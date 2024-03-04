import React from 'react';
import { Routes, Route } from "react-router-dom";
import UserDashboard from './user/UserDashboard'
import UserSidebar from './common/UserSidebar';
import RegistrationN from './user/Roles/RegistrationN';
import Registration from './user/Roles/Registration';
import MOReturnLetter from './user/Roles/MOReturnLetter';
import PreExamination from './user/Roles/PreExamination';
import ReassignCases from './user/Roles/ReassignCases';
import Edition from './user/Roles/Edition';
import DespatchEntry from './user/Roles/DespatchEntry';
import ExhibitEntry from './user/Roles/ExhibitEntry';
import ReportEntry from './user/Roles/ReportEntry';
import ParcelEntry from './user/Roles/ParcelEntry';
import ParcelEntry2 from './user/Roles/ParcelEntry2'; // testing {26-02-2024} {lakshya}
import PostExam from './user/Roles/PostExam';
import ReportApproval from './user/Roles/ReportApproval';
import AssignToIncharge from './user/Roles/AssignToIncharge';
import SocVisit from './user/Roles/SocVisit';
import RegiNew from './user/Roles/RegiNew';
import SectionTransfer from './user/Roles/SectionTransfer';
import ReportUpload from './user/Roles/ReportUpload';
import FurtherMaterial from './user/Roles/FutherMaterial';
import ViewReport from './user/Roles/ViewReport';
import CancelRegistration from './user/Roles/CancelRegistration';
import BulkAssign from './user/Roles/BulkAssign';
import SignPdfReport from './user/Roles/SignPdfReport';
import OldCases from './user/Roles/OldCases';
import MainRegister from './user/Reports/RegistrationReport/MainRegister';
import OtherRegister from './user/Reports/RegistrationReport/OtherRegister';
import UserWiseReports from './user/Reports/RegistrationReport/UserWiseReports';
import DepartmentCaseNature from './user/Reports/RegistrationReport/DepartmentCaseNature';
import DespatchPendingReg from './user/Reports/RegistrationReport/DespatchPendingReg';
import ExhibitPenRegister from './user/Reports/RegistrationReport/ExhibitPenRegister';
import CancelRegister from './user/Reports/RegistrationReport/CancelRegister';
import ReportUploadRe from './user/Reports/RegistrationReport/ReportUploadRe'
import TransferRegister from './user/Reports/RegistrationReport/TransferRegister';
import DistrictWisePeriodic from './user/Reports/MISReports/DistrictWisePeriodic';
import OfficerWise from './user/Reports/MISReports/OfficerWise';
import NatureofCaseDept from './user/Reports/MISReports/NatureofCaseDept';
import PoliceStationWise from './user/Reports/MISReports/PoliceStationWise';
import AnnualStateMent from './user/Reports/MISReports/AnnualStateMent';
import UploadedReport from './user/Reports/MISReports/UploadedReport';
import DuplicateReport from './user/Reports/OtherReports/DuplicateReport';
import CourtReports from './user/Reports/OtherReports/CourtReports';
import JHReports from './user/Reports/OtherReports/JHReports';
import CCTNSExhibit from './user/Reports/OtherReports/CCTNSExhibit';
import PrintReport from './user/Reports/OtherReports/PrintReport';
import ChangePassword from './user/ChangePassword';
import PostExamComp from './user/Roles/PostExamComp';
import ReportApprovalComp from './user/Roles/ReportApprovalComp';
import SectionWise from './user/Reports/MISReports/SectionWise';
import SectionPeriodic from './user/Reports/MISReports/SectionPeriodic';
import DistrictWise from './user/Reports/MISReports/DistrictWise';
import Reduxtestcom from './Reduxtestcom';
import PrivateRoute from './PrivateRoute';
import RegistrionFinal from './user/Roles/RegistrationComp/RegistrionFinal';

const UserRoutes = () => {

    return (

        <UserSidebar>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    {/* ROles Routes Start  */}
                    <Route path="/Dashboard" element={<UserDashboard />} />
                    <Route path="/RegistrationN" element={<RegistrationN />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/MOReturnLetter" element={<MOReturnLetter />} />
                    <Route path="/PreExamination" element={<PreExamination />} />
                    <Route path="/ReassignCases" element={<ReassignCases />} />
                    <Route path="/Edition" element={<Edition />} />
                    <Route path="/DespatchEntry" element={<DespatchEntry />} />
                    <Route path="/ExhibitEntry" element={<ExhibitEntry />} />
                    <Route path="/ReportEntry" element={<ReportEntry />} />
                    <Route path="/PostExam" element={<PostExam />} />
                    <Route path="/ParcelEntry2" element={<ParcelEntry2 />} />
                    <Route path="/ParcelEntry" element={<ParcelEntry />} />
                    <Route path="/ReportApproval" element={<ReportApproval />} />
                    <Route path="/AssignToIncharge" element={<AssignToIncharge />} />
                    <Route path="/SocVisit" element={<SocVisit />} />
                    <Route path="/RegiNew" element={<RegiNew />} />
                    <Route path="/SectionTransfer" element={<SectionTransfer />} />
                    <Route path="/ReportUpload" element={<ReportUpload />} />
                    <Route path="/FurtherMaterial" element={<FurtherMaterial />} />
                    <Route path="/ViewReport" element={<ViewReport />} />
                    <Route path="/CancelRegistration" element={<CancelRegistration />} />
                    <Route path="/BulkAssign" element={<BulkAssign />} />
                    <Route path="/SignPdfReport" element={<SignPdfReport />} />
                    <Route path="/OldCases" element={<OldCases />} />
                    {/* Roles Route end  */}
                    {/* Report Routes state  */}
                    <Route path="/MainRegister" element={<MainRegister />} />
                    <Route path="/OtherRegister" element={<OtherRegister />} />
                    <Route path="/UserWiseReports" element={<UserWiseReports />} />
                    <Route path="/DepartmentCaseNature" element={<DepartmentCaseNature />} />
                    <Route path="/DespatchPendingReg" element={<DespatchPendingReg />} />
                    <Route path="/ExhibitPenRegister" element={<ExhibitPenRegister />} />
                    <Route path="/CancelRegister" element={<CancelRegister />} />
                    <Route path="/ReportUploadRe" element={<ReportUploadRe />} />
                    <Route path="/TransferRegister" element={<TransferRegister />} />

                    <Route path="/SectionWise" element={<SectionWise />} />
                    <Route path="/SectionPeriodic" element={<SectionPeriodic />} />
                    <Route path="/DistrictWise" element={<DistrictWise />} />
                    <Route path="/DistrictWisePeriodic" element={<DistrictWisePeriodic />} />
                    <Route path="/OfficerWise" element={<OfficerWise />} />
                    <Route path="/NatureofCaseDept" element={<NatureofCaseDept />} />
                    <Route path="/PoliceStationWise" element={<PoliceStationWise />} />
                    {/* <Route path="/DistrictSectionDateWise" element={<DistrictSectionDateWise />} /> */}
                    <Route path="/AnnualStateMent" element={<AnnualStateMent />} />
                    <Route path="/UploadedReport" element={<UploadedReport />} />


                    {/* other  */}

                    <Route path="/DuplicateReport" element={<DuplicateReport />} />
                    <Route path="/CourtReports" element={<CourtReports />} />
                    <Route path="/JHReports" element={<JHReports />} />
                    <Route path="/CCTNSExhibit" element={<CCTNSExhibit />} />
                    <Route path="/PrintReport" element={<PrintReport />} />
                    <Route path="/ChangePassword" element={<ChangePassword />} />

                    <Route path="/PostExamComp" element={<PostExamComp />} />
                    <Route path="/ReportApprovalComp" element={<ReportApprovalComp />} />

                    {/* testing componetnt  */}
                    <Route path="/Reduxtestcom" element={<Reduxtestcom />} />
                    <Route path="/RegistrionFinal" element={<RegistrionFinal />} />
                    <Route path="/ParcelEntry2" element={<ParcelEntry2 />} />


                    {/* Report Routes End  */}

                </Route>
            </Routes>
        </UserSidebar>

    );
}


export default UserRoutes;
