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

const MainRegister = () => {
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
  const apigetSection = `${apiPrefix}/alluser/allddl/getallsection`;

  useEffect(() => {
    callApi(apigetSection).then((response) => {
      setSections(response);
    });
  }, []);

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
      "Sro",
      "Case No/Register No",
      "Entry Date",
      "From Detail & Diary No",
      "Police Station",
      "District",
      "Fir No",
      "Fir Date",
      "Section Of Law",
      "Reference No/Date",
      "No Of Article",
      "Exhibit Articles Marking",
      "Messenger Details",
      "Accused Name",
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
      name: "action",
      label: "Sro",
    },
    {
      name: "fulldispno",
      label: "Case No/Register No",
    },
    {
      name: "entrydate",
      label: "Entry Date",
    },
    {
      name: "faname",
      label: "From Detail & Diary No",
    },
    {
      name: "policest",
      label: "Police Station",
    },
    {
      name: "distcode",
      label: "District",
    },
    {
      name: "firno",
      label: "Fir No",
    },
    {
      name: "firdate",
      label: "Fir Date",
    },
    {
      name: "sectionOfLaw",
      label: "Section Of Law",
    },
    {
      name: "referenceNoDate",
      label: "Reference No/Date",
    },
    {
      name: "noOfArticle",
      label: "No Of Article",
    },
    {
      name: "exhibitArticlesMarking",
      label: "Exhibit Articles Marking",
    },
    {
      name: "messengerDetails",
      label: "Messenger Details",
    },
    {
      name: "accusedName",
      label: "Accused Name",
    },
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="REGISTER REPORTS" />
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
          <div className="row justify-content-center mt-3">
            <div className="col">
              <label className="label">Section</label>
            </div>
            <div className="col">
              <select
                className="form-select"
                name="section"
                value={formData.section}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Section
                </option>
                {sections.map((data) => (
                  <option key={data.sectionId} value={data.sectionId}>
                    {data.sectionName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <label className="label">Generate Report By</label>
            </div>
            <div className="col">
              <select
                className="form-select"
                name="genratedby"
                value={formData.genratedby}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="">Registration Date</option>
                <option value="">Received Date</option>
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <label className="label">Short Report By</label>
            </div>
            <div className="col-3">
              <select
                className="form-select"
                name="shortreportby"
                value={formData.shortreportby}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="">Case Number</option>
                <option value="">Section</option>
              </select>
            </div>
            <div className="col-3">
              <label className="label">Office Id</label>
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                disabled
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

export default MainRegister;
