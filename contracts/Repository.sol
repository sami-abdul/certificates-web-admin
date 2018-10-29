pragma solidity 0.4.24;

import "./AccessControl.sol";


contract Repository is Ownable {

    struct Certificate {
        bytes32 certificateId;
        bytes32 studentId;
        bytes32 courseId;
        bytes32 studentName;
        bytes32 courseName;
        uint256 issuedDate;
        bool isRevoked;
        bytes32 txHash;
    }

    mapping(bytes32 => Certificate) public idToCertificate;
    mapping(bytes32 => bytes32[]) public stdIdToCertificateIds;

    bytes32[] public certificateIds;

    function isCertificateIssued(bytes32 _certId) public view returns (bool) {
        return idToCertificate[_certId].issuedDate != 0;
    }

    function isCertificateValid(bytes32 _certId) public view returns (bool) {
        return !idToCertificate[_certId].isRevoked;
    }

    function getCertificateById(bytes32 _certId) public view returns (bytes32, bytes32, bytes32, bytes32, bytes32, uint256, bool) {
        Certificate memory cert = idToCertificate[_certId];
        return (cert.studentId, cert.courseId, cert.studentName, cert.courseName, cert.txHash, cert.issuedDate, cert.isRevoked);
    }

    function getCertificatesByStudentId(bytes32 _stdId) public view returns (bytes32[], bytes32[], bytes32[], bytes32[], uint256[]) {
        bytes32[] certIds = stdIdToCertificateIds[_stdId];

        bytes32[] memory certificateIds_ = new bytes32[](certIds.length);
        bytes32[] memory courseIds = new bytes32[](certIds.length);
        bytes32[] memory studentNames = new bytes32[](certIds.length);
        bytes32[] memory courseNames = new bytes32[](certIds.length);
        uint256[] memory issuedDates = new uint256[](certIds.length);

        for (uint i = 0; i < certIds.length; i++) {
            Certificate memory cert = idToCertificate[certIds[i]];
            certificateIds_[i] = cert.certificateId;
            courseIds[i] = cert.courseId;
            studentNames[i] = cert.studentName;
            courseNames[i] = cert.courseName;
            issuedDates[i] = cert.issuedDate;

        }

        return (certificateIds_, courseIds, studentNames, courseNames, issuedDates);
    }

    function getAllCertificates() public view returns (bytes32[], bytes32[], bytes32[], bytes32[],bytes32[] ,uint256[], bool[]) {
        bytes32[] memory certificateIds_ = new bytes32[](certificateIds.length);
        bytes32[] memory studentIds = new bytes32[](certificateIds.length);
        bytes32[] memory courseIds = new bytes32[](certificateIds.length);
        bytes32[] memory studentNames = new bytes32[](certificateIds.length);
        bytes32[] memory courseNames = new bytes32[](certificateIds.length);
        uint256[] memory issuedDates = new uint256[](certificateIds.length);
        bool[] memory revokeStatuses = new bool[](certificateIds.length);

        for (uint i = 0; i < certificateIds.length; i++) {
            Certificate memory cert = idToCertificate[certificateIds[i]];
            certificateIds_[i] = cert.certificateId;
            studentIds[i] = cert.studentId;
            courseIds[i] = cert.courseId;
            studentNames[i] = cert.studentName;
            courseNames[i] = cert.courseName;
            issuedDates[i] = cert.issuedDate;
            revokeStatuses[i] = cert.isRevoked;
        }

        return (certificateIds_, studentIds, courseIds, studentNames, courseNames,  issuedDates, revokeStatuses);
    }

    function addCertificate(bytes32 _stdId, bytes32 _crsId, bytes32 _stdName, bytes32 _crsName, uint256 _date) public onlyOwner returns (bytes32) {
        bytes32 certId = keccak256(_stdId, _crsId, _stdName, _crsName, _date);

        idToCertificate[certId] = Certificate(certId, _stdId, _crsId, _stdName, _crsName, _date, false, '');
        stdIdToCertificateIds[_stdId].push(certId);
        certificateIds.push(certId);

        return certId;
    }

    function setCertificateTxHash(bytes32 _certId, bytes32 _txHash) public onlyOwner {
        idToCertificate[_certId].txHash = _txHash;
    }

    function revokeCertificate(bytes32 _certId) public onlyOwner {
        idToCertificate[_certId].isRevoked = true;
    }

    function enactCertificate(bytes32 _certId) public onlyOwner {
        idToCertificate[_certId].isRevoked = false;
    }
}