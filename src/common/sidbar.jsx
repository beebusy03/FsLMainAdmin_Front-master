import $ from 'jquery';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/sidebar.css';
import efsl from '../assets/images/fsllogo.png'
const Sidebar = (props) => {
    const Navigate = useNavigate();
    const location = useLocation();

    const handleTogle = () => {
        $("#sidebar").toggleClass("active");
    }
    const [adminPagesCollapsed1, setAdminPagesCollapsed1] = useState(true);

    const toggleAdminPagesCollapse1 = () => {
        setAdminPagesCollapsed1(!adminPagesCollapsed1);
    };
    const [adminPagesCollapsed, setAdminPagesCollapsed] = useState(true);

    const toggleAdminPagesCollapse = () => {
        setAdminPagesCollapsed(!adminPagesCollapsed);
    };
    const [adminPagesCollapsed2, setAdminPagesCollapsed2] = useState(true);

    const toggleAdminPagesCollapse2 = () => {
        setAdminPagesCollapsed2(!adminPagesCollapsed2);
    };
    const [adminPagesCollapsed3, setAdminPagesCollapsed3] = useState(true);

    const toggleAdminPagesCollapse3 = () => {
        setAdminPagesCollapsed3(!adminPagesCollapsed3);
    };
    return (
        <div class="wrapper">
            <nav id="sidebar" style={{ height: '100vh', overflowY: 'auto', }}>
                <div class="sidebar-heaader">
                    <ul class="list-unstyled components">
                        <li>
                            <Link to="/Dashboard">
                            {/* <h3>Admin</h3> */}

                            <img src={efsl} alt='' style={{width:"220px",}}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul class="list-unstyled components">
                    <li>
                        <Link to="/UserAdmin" className={location.pathname === '/UserAdmin' ? 'active' : ''}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <FaUser style={{ marginRight: '5px' }} /> Approve Admin
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/SequenceNumberUpdation" className={location.pathname === '/SequenceNumberUpdation' ? 'active' : ''}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <FaUser style={{ marginRight: '5px' }} /> Reset Seq. No.
                            </span>
                        </Link>
                    </li>

                    <li>
                        <a onClick={toggleAdminPagesCollapse1}
                            className="navitem" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span >   
                                Reports</span>
                            {!adminPagesCollapsed1 && <FaChevronDown />}
                            {adminPagesCollapsed1 && <FaChevronRight />}
                        </a>
                        {!adminPagesCollapsed1 && <div className={`collapse ${adminPagesCollapsed1 ? "" : "show"}`} id="sidebarDoctor" >
                            <li >
                                <a onClick={toggleAdminPagesCollapse}
                                    className="navitem" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px' }}>
                                    <span >
                                        Master Reports</span>
                                    {!adminPagesCollapsed && <FaChevronDown />}
                                    {adminPagesCollapsed && <FaChevronRight />}
                                </a>
                                {!adminPagesCollapsed && <div className={`collapse ${adminPagesCollapsed ? "" : "show"}`} id="sidebarDoctor" >
                                    <li>
                                        <Link to="/EmployeMaster" className={location.pathname === '/EmployeMaster' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Employe Master</Link>
                                    </li>
                                    <li>
                                        <Link to="/SectionMaster" className={location.pathname === '/SectionMaster' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Section Master</Link>
                                    </li>
                                    <li>
                                        <Link to="/PoliceMaster" className={location.pathname === '/PoliceMaster' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Police Master</Link>
                                    </li>
                                    <li>
                                        <Link to="/DesignationMaster" className={location.pathname === '/DesignationMaster' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Designation Master</Link>
                                    </li>
                                    <li>
                                        <Link to="/OfficeMaster" className={location.pathname === '/OfficeMaster' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Office Master</Link>
                                    </li>
                                </div>}
                            </li>
                            <li>
                                <a onClick={toggleAdminPagesCollapse2}
                                    className="navitem" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px' }}>
                                    <span >
                                        Registration Reports</span>
                                    {!adminPagesCollapsed2 && <FaChevronDown />}
                                    {adminPagesCollapsed2 && <FaChevronRight />}
                                </a>
                                {!adminPagesCollapsed2 && <div className={`collapse ${adminPagesCollapsed2 ? "" : "show"}`} id="sidebarDoctor" >
                                    <li >
                                        <Link to="/MainRegister" className={location.pathname === '/MainRegister' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Main Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/OtherRegister" className={location.pathname === '/OtherRegister' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Other Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/UserWiseRegister" className={location.pathname === '/UserWiseRegister' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />User Wise Report</Link>
                                    </li>
                                    <li>
                                        <Link to="/DepartmentCaseNature" className={location.pathname === '/DepartmentCaseNature' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Department/Case Nature</Link>
                                    </li>
                                    <li>
                                        <Link to="/DespatchPending" className={location.pathname === '/DespactPending' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Despatch Pending Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/ExhibitPending" className={location.pathname === '/ExhibitPending' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Exhibit Pending Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/CancleRegister" className={location.pathname === '/CancleRegister' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />cancle Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/ReportUpload" className={location.pathname === '/ReportUpload' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Report Upload</Link>
                                    </li>
                                    <li>
                                        <Link to="/TransferRegister" className={location.pathname === '/TransferRegister' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Transfer Register</Link>
                                    </li>
                                </div>}
                            </li>
                            <li>
                                <a onClick={toggleAdminPagesCollapse3}
                                    className="navitem" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px' }}>
                                    <span >
                                        MIS Reports</span>
                                    {!adminPagesCollapsed3 && <FaChevronDown />}
                                    {adminPagesCollapsed3 && <FaChevronRight />}
                                </a>
                                {!adminPagesCollapsed3 && <div className={`collapse ${adminPagesCollapsed3 ? "" : "show"}`} id="sidebarDoctor" >
                                    <li>
                                        <Link to="/SectionWise" className={location.pathname === '/SectionWise' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Section Wise</Link>
                                    </li>
                                    <li>
                                        <Link to="/SectionPeriodic" className={location.pathname === '/SectionPeriodic' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Section Periodic</Link>
                                    </li>
                                    <li>
                                        <Link to="/DistrictWise" className={location.pathname === '/DistricticWise' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />District Wise</Link>
                                    </li>
                                    <li>
                                        <Link to="/DistrictWisePeriodic" className={location.pathname === '/DistrictWisePeriodic' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />District Wise Periodic</Link>
                                    </li>
                                    <li>
                                        <Link to="/OfficeWise" className={location.pathname === '/OfficeWise' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Officeer Wise</Link>
                                    </li>
                                    <li>
                                        <Link to="/NatureOfCaseDepartment" className={location.pathname === '/NatureOfCaseDepartment' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Nature of Case/Dept</Link>
                                    </li>
                                    <li>
                                        <Link to="/PoliceStationWise" className={location.pathname === '/PoliceStationWise' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Police Station Wise</Link>
                                    </li>
                                    <li>
                                        <Link to="/DistrictSectionDateWise" className={location.pathname === '/DistrictSectionDateWise' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />District/Section Date Wise</Link>
                                    </li>
                                    <li>
                                        <Link to="/AnualStatement" className={location.pathname === '/AnualStatement' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Anual Statement</Link>
                                    </li>
                                    <li>
                                        <Link to="/UploadReport" className={location.pathname === '/UploadReport' ? 'active' : ''} style={{ paddingLeft: '40px' }}><FaUser style={{ marginRight: '5px' }} />Upload Report</Link>
                                    </li>
                                </div>}
                            </li>
                            <li>
                                <Link to="/ReportSearch" className={location.pathname === '/SectionTransfer' ? 'active' : ''} ><FaUser style={{ marginRight: '5px' }} />Search</Link>
                            </li>
                        </div>}
                    </li>
                    <li>
                        <Link to="/SectionTransfer" className={location.pathname === '/SectionTransfer' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Section transfer</Link>
                    </li>
                    <li>
                        <Link to="/DuplocateRecord" className={location.pathname === '/DuplocateRecord' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Duplicate Reports</Link>
                    </li>
                    <li>
                        <Link to="/CancleCaseDetail" className={location.pathname === '/CancleCaseDetail' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Delete Record</Link>
                    </li>
                    <li>
                        <Link to="/DispatchCancilation" className={location.pathname === '/DispatchCancilation' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Cancle Despatch</Link>
                    </li>
                    <li>
                        <Link to="/BulkResign" className={location.pathname === '/BulkResign' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Multiple Transfer</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={location.pathname === '/dasboard' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Mail Pending</Link>
                    </li>
                    <li>
                        <Link to="/PoliceAdition" className={location.pathname === '/PoliceAdition' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Police Adition</Link>
                    </li>
                    <li>
                        <Link to="/PsAddition" className={location.pathname === '/PsAddition' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />PS Adition</Link>
                    </li>
                    <li>
                        <Link to="/ChangePassword" className={location.pathname === '/ChangePassword' ? 'active' : ''}><FaUser style={{ marginRight: '5px' }} />Change Password</Link>
                    </li>
                </ul>
            </nav>
            
            <div id="content" style={{ height: '100vh', overflowY: 'auto' }}>
                <nav id='navbartop' class="navbar navbar-expand-lg shadow-sm">
                    <div class="container-fluid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={handleTogle}>
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        
                        <button className='btn' style={{ backgroundColor: '#fff', color: '#248888' }} onClick={() => Navigate('/')}>Logout</button>
                    </div>
                </nav>
                <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
