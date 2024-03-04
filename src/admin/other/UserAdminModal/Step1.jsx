import SectionMultiSelect from "../../../common/SectionMultiSelect";

function Step1(props) {
    const { formData, handleInputChange, states, selectedState, setSelectedState, lablist, selectedLab, selectedSections, setSelectedLab, setSelectedSections } = props; return (
        <>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" name='empName' value={formData?.empName} onChange={handleInputChange} />
                </div>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Name in Hindi</label>
                    <input type="text" className="form-control" name='empNameHindi' value={formData?.empNameHindi} onChange={handleInputChange} />
                </div>
            </div>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Employee Id</label>
                    <input type="text" className="form-control" name='empId' value={formData?.empId} onChange={handleInputChange} />
                </div>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Name in Hindi</label>
                    <input type="text" className="form-control" name='empNameHindi' value={formData?.empNameHindi} onChange={handleInputChange} />
                </div>
            </div>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">State</label>
                    <select
                        name='statecode'
                        value={selectedState}
                        className='form-select'
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option value="" disabled>Select a state</option>
                        {states.map((data) => (
                            <option key={data.statecd} value={data.statecd}>
                                {data.statename}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Lab</label>
                    <select
                        name="officecode"
                        value={selectedLab}
                        className='form-select'
                        onChange={(e) => setSelectedLab(e.target.value)}
                    >
                        <option value="" disabled>Select Lab</option>
                        {lablist.map((district) => (
                            <option key={district.officeId} value={district.officeId}>
                                {district.officeName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Sections</label>
                    <SectionMultiSelect setSelectedSections={setSelectedSections} selectedSections={selectedSections} /> {/* Pass setSelectedSections as prop */}

                </div>

                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Designation</label>
                    <input type="text" className="form-control" name='empDesg' value={formData?.empDesg} onChange={handleInputChange} />
                </div>
            </div>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">E-Mail Id</label>
                    <input type="text" className="form-control" name='emailId' value={formData?.emailId} onChange={handleInputChange} />
                </div>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Phone No</label>
                    <input type="text" className="form-control" name='phoneNo' value={formData?.phoneNo} onChange={handleInputChange} />
                </div>
            </div>
            <div className='row m-2'>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">AAdhar (Last Four Digit)</label>
                    <input type="text" className="form-control" name='aadhar' value={formData?.aadhar} onChange={handleInputChange} />
                </div>
                <div className='col'>
                    <label htmlFor="exampleInput" className="form-label">Officer Status</label>
                    <input type="text" className="form-control" name='google' value={formData?.google} onChange={handleInputChange} />
                </div>
            </div>
        </>
    );
}

export default Step1;