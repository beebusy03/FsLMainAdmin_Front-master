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
  const [selectedOption, setSelectedOption] = useState("");
  const [sections, setSections] = useState([]);
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [tbdata, setTbdata] = useState([]);
  const [formData, setFormData] = useState({
    sectionno: "",
    startDate: "",
    endDate: "",
    reportBy: "",
  });

  const apigetData = `${apiPrefix}/alluser/userandsectionwisereports`;
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
      `${apigetData}?sectionno=${formData.sectionno}&startDate=${formData.startDate}&endDate=${formData.endDate}&reportBy=${formData.reportBy}`
    ).then((response) => {
      setTbdata(response);
    });
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
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
      "File No",
      "Registered On",
      "Received from Polic/Court/Others",
      "District Name",
      "Police Station",
      "Fir/Crime No",
      "U/S",
      "Court Name",
      "Diary No",
      "No Of Exhibit",
      "Nature Of Case/Examinations",
      "Case Assigned To",
      "Case Assigned On",
      "Report Ready Date",
      "File Uploading Date",
      "Mode Of Despatch And Date",
      "Remarks",
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
      label: "Sr. No",
    },
    {
      name: "mainfileno",
      label: "File No",
    },
    {
      name: "entrydate",
      label: "Registered On",
    },
    {
      name: "distcode",
      label: "District Name",
    },
    {
      name: "policest",
      label: "Police Station",
    },

    {
      name: "firno",
      label: "Fir/Crime No",
    },
    {
      name: "firdate",
      label: "U/S",
    },
    {
      name: "courtname",
      label: "Court Name",
    },
    {
      name: "diaryno",
      label: "Diary No",
    },
    {
      name: "totalexhibits",
      label: "No Of Exhibit",
    },
    {
      name: "casenature",
      label: "Nature Of Case/Examinations",
    },
    {
      name: "messengerDetails",
      label: "Case Assigned To",
    },
    {
      name: "accusedName",
      label: "Case Assigned On",
    },
    {
      name: "accusedName",
      label: "Report Ready Date",
    },
    {
      name: "accusedName",
      label: "File Uploading Date",
    },
    {
      name: "accusedName",
      label: "Mode Of Despatch And Date",
    },
    {
      name: "remarks",
      label: "Remarks",
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
          <div className="text-center">
            <h5>Generate Report By</h5>
          </div>
          <div className="row m-2">
            <div className="d-flex justify-content-center">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="receivedFrom"
                  name="receivedFrom"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="Option1"
                    control={<Radio />}
                    label="By Section Wise"
                  />
                  <FormControlLabel
                    value="Option2"
                    control={<Radio />}
                    label="By User Wise"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="row mt-3">
            {selectedOption === "Option1" && (
              <>
                <div className="col">
                  <label className="label"> Section</label>
                  <select
                    className="form-select"
                    name="sectionno"
                    value={formData.sectionno}
                    onChange={handleInputChange}
                  >
                    <option value="" selected disabled>
                      Select
                    </option>
                    {sections.map((data) => (
                      <option key={data.sectionId} value={data.sectionId}>
                        {data.sectionName}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {selectedOption === "Option2" && (
              <>
                <div className="col">
                  <label className="label"> Officer</label>
                  <select className="form-select" name="section">
                    <option value="" selected disabled>
                      Select
                    </option>
                  </select>{" "}
                </div>
              </>
            )}
            <div className="col">
              <label className="label"> Start Date</label>
              <input
                className="form-control"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label className="label">End Date</label>
              <input
                className="form-control"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label className="label">Generate Report By</label>
              <select
                className="form-select"
                name="reportBy"
                value={formData.reportBy}
                onChange={handleInputChange}
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value="REGISTRATIONDATE">Registration Date</option>
                <option value="RECEIVEDDATE">Recived Date</option>
                <option value="ALLOTMENTDATE">Allotment Date</option>
                <option value="REPORTDATE">Report Date</option>
              </select>
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
