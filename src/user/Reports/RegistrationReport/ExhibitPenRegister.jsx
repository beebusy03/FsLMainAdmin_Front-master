import React, { useEffect, useState } from "react";
import { callApi } from "../../../common/CallApi";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Heading from "./../../../common/Heading";
import jsPDF from "jspdf";
import "jspdf-autotable";
import MUIDataTable from "mui-datatables";

const DespatchPendingReg = () => {
  const [sections, setSections] = useState([]);
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [tbdata, setTbdata] = useState([]);
  const [formData, setFormData] = useState({
    reportStartDate: "",
    reportEndDate:"",
    district:"",

  });

  const apigetData = `${apiPrefix}/alluser/exhibitpendingregister`;
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    callApi(
      `${apigetData}?reportStartDate=${formData.reportStartDate}&reportEndDate=${formData.reportEndDate}&district=${formData.district}`
    ).then((response) => {
      setTbdata(response);
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4"); // Create new jsPDF instance with A4 size

    doc.text("Your Report Title", 40, 40); // Set the title of your report

    const tableData = tbdata.map((item) => {
      return [
        item.action,
        item.fulldispno,
        item.firno,
        item.faname,
        item.referenceno,
        item.noofparcels,
        item.fslregno,
        item.firdate,
        item.sectionOfLaw,
        item.referenceNoDate,
        item.noOfArticle,
        item.exhibitArticlesMarking,
        item.messengerDetails,
        item.accusedName,
      ];
    });

    // Set up table headers and styling
    const headers = [
      "Sr. No",
      "FSL Case No. Diary No",
      "Report Ready Date",
      "District",
      "Police Station",
      "Reference No.",
      "FIR No",
      "Email Id",
    ];

    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 60, // Start the table below the title
      styles: {
        cellPadding: 5,
        fontSize: 10,
        valign: "middle",
        halign: "center",
      },
      columnStyles: {
        1: { cellWidth: 100 }, // Adjust column width as needed
      },
    });

    // Add page number at the bottom
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(40, 780, `Page ${i} of ${pageCount}`, null, null, "left");
    }

    doc.save("table.pdf");
  };

  const columns = [
    {
      name: "action",
      label: "Sr. No",
    },
    {
      name: "diaryno",
      label: "FSL Case No. Diary No",
    },
    {
      name: "exmreportdate",
      label: "Report Ready Date",
    },
    {
      name: "distcode",
      label: "District",
    },
    
    {
      name: "policest",
      label: "Police Station",
    },
    {
      name: "referenceno",
      label: "Reference No.",
    },
    {
      name: "firno",
      label: "Fir No",
    },
    
    {
      name: "emaild",
      label: "Email Id",
    },
    
    
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="PENDING EXHIBIT CASES" />
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col">
              <label className="label">Report Start Date</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="reportStartDate"
                value={formData.reportStartDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label className="label">Report End Date</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="reportEndDate"
                value={formData.reportEndDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label className="label">District</label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mt-2">{/* Additional form elements */}</div>

          <div className="row mt-3">
            <div className="col">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Generate Report
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={generatePDF}
              >
                Generate PDF
              </Button>
            </div>
          </div>

          <div className="col mt-3">
            <MUIDataTable
              title={"REGISTER REPORTS"}
              data={tbdata}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespatchPendingReg;
