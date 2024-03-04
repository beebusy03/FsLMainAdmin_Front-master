import React, { useState } from "react";
import { callApi } from "../../../common/CallApi";
import { Button } from "@mui/material";
import Heading from "./../../../common/Heading";
import jsPDF from "jspdf";
import "jspdf-autotable";
import MUIDataTable from "mui-datatables";

const CancelRegister = () => {
  const [sections, setSections] = useState([]);
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [tbdata, setTbdata] = useState([]);
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    section: "",
    shortreportby: "",
    genratedby: "",
  });

  const apigetData = `${apiPrefix}/alluser/getregistrationreports`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    callApi(
      `${apigetData}?fromDate=${formData.fromDate}&toDate=${formData.toDate}&section=${formData.section}&shortreportby=${formData.shortreportby}&genratedby=${formData.genratedby}`
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
      "File Number",
      "Office Case Number",
      "Transferred From",
      "Registration Date",
      "Police Station/Dept",
      "Fir Number",
    ];

    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 60, // Start the table below the title
      styles: {
        cellPadding: 5,
        fontSize: 8,
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
      name: "mainfileno",
      label: "File Number",
    },
    {
      name: "casefileno",
      label: "Office Case Number",
    },
    {
      name: "registon",
      label: "Transferred From",
    },
    {
      name: "distcode",
      label: "Registration Date",
    },
    {
      name: "policest",
      label: "Police Station/Dept",
    },
    {
      name: "firno",
      label: "Fir Number",
    },
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="TRANFER REGISTER REPORTS" />
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col">
              <label className="label">Report From</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label className="label">Report As On</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="toDate"
                value={formData.toDate}
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

export default CancelRegister;
