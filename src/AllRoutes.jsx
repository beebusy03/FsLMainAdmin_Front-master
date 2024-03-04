import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Sidebar from './common/sidbar';
import UserAdmin from './admin/other/useradmin';
import Dashboard from './dashboard/dashboard';
import SequenceNumberUpdation from './admin/other/sequencenumberupdation';
import SectionTransfer from './admin/other/sectiontransfer';
import DuplocateRecord from './admin/other/duplicaterecord';
import CancleCaseDetail from './admin/other/canclecasedetail';
import DispatchCancilation from './admin/other/dispatchcancilation';
import BulkResign from './admin/other/bulkresign';
import PoliceAdition from './admin/other/policeadition';
import PsAddition from './admin/other/psadition';
import ChangePassword from './admin/other/changepassword';
import EmployeMaster from './admin/reports/masterreport/employemaster';
import SectionMaster from './admin/reports/masterreport/sectionmaster';
import PoliceMaster from './admin/reports/masterreport/policemaster';
import DesignationMaster from './admin/reports/masterreport/designationmaster';
import OfficeMaster from './admin/reports/masterreport/officemaster';
import ReportSearch from './admin/reports/reportsearch';
import MainRegister from './admin/reports/registrationreport/mainregister';
import OtherRegister from './admin/reports/registrationreport/otherregister';
import UserWiseRegister from './admin/reports/registrationreport/userwiseregister';
import DepartmentCaseNature from './admin/reports/registrationreport/departmentcasenature';
import DespatchPending from './admin/reports/registrationreport/despatchpending';
import ExhibitPending from './admin/reports/registrationreport/exhibitpending';
import CancleRegister from './admin/reports/registrationreport/calcleregister';
import ReportUpload from './admin/reports/registrationreport/reportupload';
import TransferRegister from './admin/reports/registrationreport/transferregister';
import SectionWise from './admin/reports/misreport/sectionwise';
import SectionPeriodic from './admin/reports/misreport/sectionperiodic';
import DistrictWise from './admin/reports/misreport/districtwise';
import DistrictWisePeriodic from './admin/reports/misreport/districtwiseperiodic';
import OfficeWise from './admin/reports/misreport/officewise';
import NatureOfCaseDepartment from './admin/reports/misreport/natureofcasedepartment';
import PoliceStationWise from './admin/reports/misreport/policestationwise';
import DistrictSectionDateWise from './admin/reports/misreport/districtsectiondatewise';
import AnualStatement from './admin/reports/misreport/anualstatement';
import UploadReport from './admin/reports/misreport/uploadreport';
import Home from './Home';
import Features from './Features';

const AllRoutes = () => {

    return (

        <Sidebar>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/UserAdmin" element={<UserAdmin />} />
                    <Route path="/SequenceNumberUpdation" element={<SequenceNumberUpdation />} />
                    <Route path="/SectionTransfer" element={<SectionTransfer />} />
                    <Route path="/DuplocateRecord" element={<DuplocateRecord />} />
                    <Route path="/CancleCaseDetail" element={<CancleCaseDetail />} />
                    <Route path="/DispatchCancilation" element={<DispatchCancilation />} />
                    <Route path="/BulkResign" element={<BulkResign />} />
                    <Route path="/PoliceAdition" element={<PoliceAdition />} />
                    <Route path="/PsAddition" element={<PsAddition />} />
                    <Route path="/ChangePassword" element={<ChangePassword />} />
                    <Route path="/EmployeMaster" element={<EmployeMaster />} />
                    <Route path="/SectionMaster" element={<SectionMaster />} />
                    <Route path="/PoliceMaster" element={<PoliceMaster />} />
                    <Route path="/DesignationMaster" element={<DesignationMaster />} />
                    <Route path="/OfficeMaster" element={<OfficeMaster />} />
                    <Route path="/ReportSearch" element={<ReportSearch />} />
                    <Route path="/MainRegister" element={<MainRegister />} />
                    <Route path="/OtherRegister" element={<OtherRegister />} />
                    <Route path="/UserWiseRegister" element={<UserWiseRegister />} />
                    <Route path="/DepartmentCaseNature" element={<DepartmentCaseNature />} />
                    <Route path="/DespatchPending" element={<DespatchPending />} />
                    <Route path="/ExhibitPending" element={<ExhibitPending />} />
                    <Route path="/CancleRegister" element={<CancleRegister />} />
                    <Route path="/ReportUpload" element={<ReportUpload />} />
                    <Route path="/TransferRegister" element={<TransferRegister />} />
                    <Route path="/SectionWise" element={<SectionWise />} />
                    <Route path="/SectionPeriodic" element={<SectionPeriodic />} />
                    <Route path="/DistrictWise" element={<DistrictWise />} />
                    <Route path="/DistrictWisePeriodic" element={<DistrictWisePeriodic />} />
                    <Route path="/OfficeWise" element={<OfficeWise />} />
                    <Route path="/NatureOfCaseDepartment" element={<NatureOfCaseDepartment />} />
                    <Route path="/PoliceStationWise" element={<PoliceStationWise />} />
                    <Route path="/DistrictSectionDateWise" element={<DistrictSectionDateWise />} />
                    <Route path="/AnualStatement" element={<AnualStatement />} />
                    <Route path="/UploadReport" element={<UploadReport />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Features" element={<Features />} />
                </Route>
            </Routes>
        </Sidebar>

    );
}


export default AllRoutes;
