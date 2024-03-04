import $ from "jquery";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar.css";
import "./SidebarStyle.css";
import Footer from "./footer";
import { faArrowRightFromBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserSidebar = (props) => {
    const Navigate = useNavigate();
    const location = useLocation();

    const handleTogle = () => {
        $("#sidebar").toggleClass("active");
    };
    const [adminPagesCollapsed1, setAdminPagesCollapsed1] = useState(true);
    const toggleAdminPagesCollapse1 = () => {
        setAdminPagesCollapsed1(!adminPagesCollapsed1);
    };
    const [adminPagesCollapsed2, setAdminPagesCollapsed2] = useState(true);
    const toggleAdminPagesCollapse2 = () => {
        setAdminPagesCollapsed2(!adminPagesCollapsed2);
    };
    const [adminPagesCollapsed3, setAdminPagesCollapsed3] = useState(true);
    const toggleAdminPagesCollapse3 = () => {
        setAdminPagesCollapsed3(!adminPagesCollapsed3);
    };
    const [adminPagesCollapsed4, setAdminPagesCollapsed4] = useState(true);
    const toggleAdminPagesCollapse4 = () => {
        setAdminPagesCollapsed4(!adminPagesCollapsed4);
    };
    const [adminPagesCollapsed5, setAdminPagesCollapsed5] = useState(true);
    const toggleAdminPagesCollapse5 = () => {
        setAdminPagesCollapsed5(!adminPagesCollapsed5);
    };
    return (
        <div class="wrapper">
            <nav id="sidebar" style={{ height: "100vh", overflowY: "auto" }}>
                <div class="sidebar-header">
                    <ul class="list-unstyled components">
                        <li>
                            <Link to="/User/Dashboard">
                                <h3>USER</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul class="list-unstyled components">
                    <li>
                        <a
                            onClick={toggleAdminPagesCollapse1}
                            className="navitem"
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <span>Roles</span>
                            {!adminPagesCollapsed1 && <FaChevronDown />}
                            {adminPagesCollapsed1 && <FaChevronRight />}
                        </a>
                        {!adminPagesCollapsed1 && (
                            <div
                                className={`collapse ${adminPagesCollapsed1 ? "" : "show"}`}
                                id="sidebarDoctor"
                            >
                                <li>
                                    <li>
                                        <Link to="/User/RegistrationN" className={location.pathname === '/User/RegistrationN' ? 'active' : ''}>
                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaUser style={{ marginRight: '5px' }} /> Registration N
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/Registration" className={location.pathname === '/User/Registration' ? 'active' : ''}>

                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaUser style={{ marginRight: '5px' }} /> Registration
                                            </span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/User/MOReturnLetter" className="LinkPad">
                                            MO Return Letter
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/User/PreExamination" className="LinkPad">
                                            Pre Examination
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/User/ReassignCases" className="LinkPad">
                                            RE-Assign Cases
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/User/Edition" className="LinkPad">
                                            Edition
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/User/DespatchEntry" className="LinkPad">
                                            Despatch Entry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ExhibitEntry" className="LinkPad">

                                            Exhibit Entry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ReportEntry" className="LinkPad">

                                            Report Entry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ParcelEntry" className="LinkPad">

                                            Parcel Entry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/PostExam" className="LinkPad">

                                            Post Exam
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ReportApproval" className="LinkPad">

                                            Report Approval
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/AssignToIncharge" className="LinkPad">

                                            Assign To Incharge
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/SocVisit" className="LinkPad">

                                            SOC Visit
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/User/RegiNew" className="LinkPad">

                                            REGI View
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/User/SectionTransfer" className="LinkPad">

                                            Section Transfer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ReportUpload" className="LinkPad">
                                            Report Upload
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/FurtherMaterial" className="LinkPad">
                                            Further Material
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/ViewReport" className="LinkPad">

                                            View Report
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/CancelRegistration" className="LinkPad">

                                            Cancel Registration
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/BulkAssign" className="LinkPad">

                                            Bulk Assign
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/SignPdfReport" className="LinkPad">

                                            Sign PDF Report
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/User/OldCases" className="LinkPad">

                                            OLD Cases
                                        </Link>
                                    </li>
                                </li>
                            </div>
                        )}
                    </li>
                    <li>
                        <a
                            onClick={toggleAdminPagesCollapse2}
                            className="navitem"
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <span>Reports</span>
                            {!adminPagesCollapsed2 && <FaChevronDown />}
                            {adminPagesCollapsed2 && <FaChevronRight />}
                        </a>
                        {!adminPagesCollapsed2 && (
                            <div
                                className={`collapse ${adminPagesCollapsed2 ? "" : "show"}`}
                                id="sidebarDoctor"
                            >
                                <li>
                                    <a
                                        onClick={toggleAdminPagesCollapse3}
                                        className="navitem"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            paddingLeft: "20px",
                                        }}
                                    >
                                        <span>Registration Reports</span>
                                        {!adminPagesCollapsed3 && <FaChevronDown />}
                                        {adminPagesCollapsed3 && <FaChevronRight />}
                                    </a>
                                    {!adminPagesCollapsed3 && (
                                        <div
                                            className={`collapse ${adminPagesCollapsed3 ? "" : "show"
                                                }`}
                                            id="sidebarDoctor"
                                        >
                                            <li>
                                                <Link to="/User/MainRegister" className="LinkPad">

                                                    Main Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/OtherRegister" className="LinkPad">

                                                    Other Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/UserWiseReports" className="LinkPad">

                                                    User Wise Report
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/User/DepartmentCaseNature"
                                                    className="LinkPad"
                                                >
                                                    Department/Case Nature
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/DespatchPendingReg" className="LinkPad">
                                                    Despatch Pending Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/ExhibitPenRegister" className="LinkPad">

                                                    Exhibit Pending Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/CancelRegister" className="LinkPad">

                                                    Cancel Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/ReportUploadRe" className="LinkPad">
                                                    Report Upload
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/TransferRegister" className="LinkPad">

                                                    Transfer Register
                                                </Link>
                                            </li>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <a
                                        onClick={toggleAdminPagesCollapse4}
                                        className="navitem"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            paddingLeft: "20px",
                                        }}
                                    >
                                        <span>MIS Reports</span>
                                        {!adminPagesCollapsed4 && <FaChevronDown />}
                                        {adminPagesCollapsed4 && <FaChevronRight />}
                                    </a>
                                    {!adminPagesCollapsed4 && (
                                        <div
                                            className={`collapse ${adminPagesCollapsed4 ? "" : "show"
                                                }`}
                                            id="sidebarDoctor"
                                        >
                                            <li>
                                                <Link to="/User/SectionWise" className="LinkPad">
                                                    Section Wise
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/SectionPeriodic" className="LinkPad">
                                                    Section Periodic
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/DistrictWise" className="LinkPad">
                                                    District Wise
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/User/DistrictWisePeriodic"
                                                    className="LinkPad"
                                                >
                                                    District Wise Periodic
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/OfficerWise" className="LinkPad">
                                                    Officer Wise
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/NatureofCaseDept" className="LinkPad">
                                                    Nature of Case/Dept
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/PoliceStationWise" className="LinkPad">
                                                    Police Station Wise
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/User/DistrictSectionDateWise"
                                                    className="LinkPad"
                                                >
                                                    District/Section Date Wise
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/AnnualStateMent" className="LinkPad">
                                                    Annual Statement
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/UploadedReport" className="LinkPad">
                                                    Uploaded Report
                                                </Link>
                                            </li>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <a
                                        onClick={toggleAdminPagesCollapse5}
                                        className="navitem"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            paddingLeft: "20px",
                                        }}
                                    >
                                        <span>Other Reports</span>
                                        {!adminPagesCollapsed5 && <FaChevronDown />}
                                        {adminPagesCollapsed5 && <FaChevronRight />}
                                    </a>
                                    {!adminPagesCollapsed5 && (
                                        <div
                                            className={`collapse ${adminPagesCollapsed5 ? "" : "show"
                                                }`}
                                            id="sidebarDoctor"
                                        >
                                            <li>
                                                <Link to="/User/DuplicateReport" className="LinkPad">
                                                    Duplicate Report
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/CourtReports" className="LinkPad">

                                                    Court Reports
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/JHReports" className="LinkPad">
                                                    JH Reports
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/CCTNSExhibit" className="LinkPad">
                                                    CCTNS Exhibit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/User/PrintReport" className="LinkPad">
                                                    Print Report
                                                </Link>
                                            </li>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link to="/User/RegistrationN" className="LinkPad">
                                        Search
                                    </Link>
                                </li>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/User/ChangePassword">Change Password</Link>
                    </li>


                    <li>
                        <Link to="/User/Reduxtestcom">Reduxtestcom</Link>
                    </li>
                </ul>
            </nav>
            <div id="content" style={{ height: "100vh", overflowY: "auto" }}>
                <nav id="navbartop" class="navbar navbar-expand-lg shadow-sm">
                    <div class="container-fluid">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-list"
                            viewBox="0 0 16 16"
                            onClick={handleTogle}
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                        <button
                            className="btn"
                            style={{ backgroundColor: "#fff", color: "#248888" }}
                            onClick={() => Navigate("/")}
                        ><FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Logout
                        </button>
                    </div>
                </nav>


                <div
                    className="App"
                    style={{ minHeight: "100vh", position: "relative" }}
                >
                    {props.children}
                </div>
                {/* <Footer /> */}

            </div>
        </div>
    );
};

export default UserSidebar;
