import React, {Component} from 'react';
import CertificateController from '../../interface/certificateController';
import HelperFunctions from '../../utils/constants';
import {Card, Grid, Button} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from '../../components/Layout'
import web3 from "../../interface/web3";


class CertificateDetail extends Component {
    state = {
        loading: false,
        errorMessage: '',
        transactionHash : ''
    };

    static async getInitialProps(props) {

        const certificate = await CertificateController.methods.getCertificateById(props.query.address).call();

        let date = new Date(parseInt(certificate['4']));
        const certificateDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();


        return {
            address: props.query.address,
            studentId: HelperFunctions.convertHexToString(certificate['0']),
            courseId: HelperFunctions.convertHexToString(certificate['1']),
            studentName: HelperFunctions.convertHexToString(certificate['2']),
            courseName: HelperFunctions.convertHexToString(certificate['3']),
            issuedDate: certificateDate,
            isRevoked: certificate['5']
        };
    };

    renderCertificateDetails() {
        let validity;
        const {
            address,
            studentId,
            courseId,
            studentName,
            courseName,
            issuedDate,
            isRevoked
        } = this.props;
      if(!isRevoked){
          validity = "Valid"
      } else{
          validity = "Invalid"
      }

        const items = [
            {
                header: address,
                meta: 'Certificate ID',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: studentName,
                meta: 'Name of Student',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: courseName,
                meta: 'Name of Course',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: studentId,
                meta: 'Unique Id of Student',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: courseId,
                meta: 'Course Id',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: issuedDate,
                meta: 'Date of certificate',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: validity,
                meta: 'The Validity of Certificate',
                style: {overflowWrap: 'break-word'}
            },

        ];

        return <Card.Group style={{marginTop: '20px'}} items={items}/>

    };

    flipCertificateStatus = async (props) => {
        let statusEvent;
        const accounts = await web3.eth.getAccounts();
        this.setState({loading: true, errorMessage: ''});
        if (this.props.isRevoked) {
            await CertificateController.methods
                .enactCertificate(this.props.address)
                .send({
                    from: accounts[0]
                }).on('transactionHash',(hash) =>{
                    this.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
                }).on('confirmation', function () {
                    console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                    statusEvent = newCertificateInstance.events.CertificateEnacted;
                });
            this.setState({loading: false});
            Router.pushRoute(`/certificate/${this.props.address}`);
        } else {
            await CertificateController.methods
                .revokeCertificate(this.props.address)
                .send({
                    from: accounts[0]
                }).on('transactionHash',(hash) =>{
                    this.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
                }).on('confirmation', function () {
                    console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                    statusEvent = newCertificateInstance.events.CertificateEnacted;
                });
            this.setState({loading: false});
            Router.pushRoute(`/certificate/${this.props.address}`);

        }
    };

    render() {
        let content;
        if (this.props.isRevoked) {
            content = 'Enact Certificate'
        } else {
            content = 'Revoke Certificate'
        }
        return (
            <Layout>
                <div style={{marginTop: '50px'}}>
                    <Link route={`index`}>
                        <a>
                            Back
                        </a>
                    </Link>
                    <h1>Certificate Details</h1>
                </div>
                {this.renderCertificateDetails()}
                <div style={{paddingBottom: '100px'}}>
                <Button
                    loading={this.state.loading}
                    onClick={this.flipCertificateStatus}
                    floated="right"
                    content={content}
                    icon='circle'
                    primary/>

                <div style={{marginTop: '40px'}}>
                    { this.state.transactionHash ?  <a href={this.state.transactionHash} target="_blank" >See transaction status on EtherScan</a> : null }
                </div>
                </div>

            </Layout>


        )
    }
}

export default CertificateDetail;