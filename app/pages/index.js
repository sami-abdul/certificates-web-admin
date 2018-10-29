import React, {Component} from 'react';
import CertificateController from '../interface/certificateController';
import {Card, Button, Form, Input, Message, Select , Header } from 'semantic-ui-react';
import {Link} from '../../routes'
import Layout from '../components/Layout'
import HelperFunctions from "../utils/constants";

class StudentCertificateIndex extends Component {

    state = {
        idType: 'studentId',
        loading: false,
        idValue: '',
        errorMessage: '',
        searchedCertificate: {},
        isCertificateFetched: false
    };

    onSearch = async (event) => {
        event.preventDefault();
        let certificate = null;
        this.setState({loading: true, errorMessage: '', isCertificateFetched: false});
        try {
            if (this.state.idType === 'studentId') {
                certificate = await CertificateController.methods.getCertificateByStudentId(HelperFunctions.convertStringToHex(this.state.idValue)).call();
                if (certificate['0'].length === 0) {
                    this.setState({errorMessage: "Record not found"});
                } else {
                    this.setState({searchedCertificate: certificate, isCertificateFetched: true})
                }
            } else {
                certificate = await CertificateController.methods.getCertificateById(this.state.idValue).call();
                if (certificate['4'] === '0') { // The response is null
                    this.setState({errorMessage: "Record not found"});
                } else {
                    this.setState({searchedCertificate: certificate, isCertificateFetched: true})
                }
            }
        } catch (e) {
            this.setState({errorMessage: e.message});
        }
        this.setState({loading: false});

    };

    renderCertificates = (certificates) => {
        let items = [];
        if (this.state.idType === 'studentId') {
            for (let i = 0; i < certificates['0'].length; i++) {
                items.push({
                    header: HelperFunctions.convertHexToString(certificates['2'][i]),
                    description: (
                        <Link route={`/certificate/${certificates['0'][i]}`}>
                            <a>
                                View Certificate
                            </a>
                        </Link>
                    ),
                    fluid: true
                });
            }
        } else {
            items.push({
                header: HelperFunctions.convertHexToString(certificates['2']),
                description: (
                    <Link route={`/certificate/${this.state.idValue}`}>
                        <a>
                            View Certificate
                        </a>
                    </Link>
                ),
                fluid: true
            });
        }
        return <Card.Group items={items}/>
    };


    render() {
        const options = [
            {key: 'studentId', text: 'Student ID', value: 'studentId'},
            {key: 'certificateId', text: 'Certificate ID', value: 'certificateId'}
        ];
        return (
            <Layout>
                <Form onSubmit={this.onSearch}>
                    <Input
                        style={{marginTop: '50px'}}
                        type='text'
                        size="massive"
                        onChange={event => this.setState({idValue: event.target.value})}
                        value={this.state.idValue}
                        fluid
                        placeholder='Search Certificate by...'
                        action>
                        <input/>
                        <Select compact options={options} defaultValue={this.state.idType}
                                onChange={(e, {value}) => this.setState({idType: value, isCertificateFetched: false ,errorMessage : ''})}/>
                        <Button type='submit'>Search</Button>
                    </Input>
                </Form>

                <Link route='/certificate/new'>
                    <div style={{marginTop: '40px'}} error={!!this.state.errorMessage}>

                        {this.state.errorMessage ? <Message error header="Oops!" content={this.state.errorMessage}/> : null}

                        <a>
                            <Button
                                floated="right"
                                content='Issue Certificate'
                                icon='add circle'
                                primary/>
                        </a>
                    </div>
                </Link>
                <div style={{marginTop: '100px'}}>
                    {this.state.isCertificateFetched ? this.renderCertificates(this.state.searchedCertificate) : null}
                </div>
                <div style={{marginTop: '250px'}}>
                {!this.state.isCertificateFetched ? <Header as='h1'  size="massive"  textAlign="center" fluid disabled>
                    No certificates to show. <br/>Please use search.
                </Header> : null}
                </div>


            </Layout>
        )
    }


}

export default StudentCertificateIndex;