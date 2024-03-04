import React, { useEffect, useState } from "react";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDataTable } from "mdbreact";
import { callApi } from "../../common/CallApi";
import Heading from "../../common/Heading";
const SequenceNumberUpdation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState([]);

    const getStateListApi = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        callApi(getStateListApi)
            .then((response) => {
                setFormData(response);
                console.log(response);
            });
    }, []);

    const handleButtonClick = (userId) => {
        console.log(userId);
    };

    // Update the rows property with the API response data
    const data = {
        columns: [
            {
                label: 'Userid',
                field: 'userId',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Title',
                field: 'title',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Body',
                field: 'body',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 270,
            },
        ],
        rows: formData.map((item) => ({
            userId: item.userId,
            title: item.title,
            body: item.body,
            action: (
                <button
                    onClick={() => handleButtonClick(item.userId)}
                    className="btn btn-primary"
                >
                    Click Me
                </button>
            ),
        })),
    };

    return (
        <div className="container">
            <div className="card m-3 shadow">
                <Heading title="Sequence Detail" />
                <div className="row m-2">
                    <div className="col-lg-2">Current Year</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-2">Existing Case No</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-lg-2">New Case No</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-2">Section</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-lg-2">Existing</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-2">New</div>
                    <div className="col-lg-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <button
                            className="btn btn-primary m-2"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Update &nbsp;
                            <FontAwesomeIcon
                                icon={faFilePen}
                                className={isHovered ? "faarrowrightHovered" : ""}
                            />
                        </button>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <Heading title="Sequence Number Updation" />
                <div className="card-body">
                    <div className="row m-2">
                        <MDBDataTable striped bordered hover data={data} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SequenceNumberUpdation;
