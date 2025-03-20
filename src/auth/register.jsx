import React, { useState } from "react";
import "../App.css";

export default function Register() {
  const [step, setStep] = useState(1);

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div className="container mt-5 mb-5">
      {/* Logo and title */}
      <div className="logo-container text-center mb-3">
        <img
          src="https://iiap-portal.org/portal/img/picpa.png"
          alt="Logo"
          width="200px"
          height="200px"
        />
        <p className="text-white mt-2">INSTITUTE OF INTERNAL AUDITORS</p>
      </div>

      <div className="card shadow-lg p-4">
        {/* Title Above Stepper Navigation */}
        <h4 className="mb-4">
          {step === 1
            ? "PROFILE INFORMATION"
            : step === 2
            ? "PERMANENT MEMBERSHIP INFO"
            : step === 3
            ? "ADDRESS INFORMATION"
            : step === 4
            ? "COMPANY INFORMATION"
            : "CONTACT INFORMATION"}
        </h4>

        {/* Stepper Navigation */}
        <div className="stepper-container">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num} className="step-wrapper">
              {index !== 0 && (
                <div className={`line ${num <= step ? "active" : ""}`}></div>
              )}
              <div
                className={`step-circle ${num <= step ? "active" : ""}`}
                onClick={() => goToStep(num)}
              >
                {num}
              </div>
            </div>
          ))}
        </div>

        {/* Form Fields (Content Changes Per Step) */}
        <div className="row mt-4">
            {/* Step 1 */}
            {step === 1 && (
                <>
                    {/* Step 1 Form Fields */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Email *</label>
                            <input type="email" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last Name *</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">IIA Global ID *</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">First Name *</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Membership Type</label>
                            <select className="form-select" required>
                                <option value="regular">Regular Member</option>
                                <option value="student">Student (Full-time)</option>
                                <option value="educator">Educator (Full-time)</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Middle Name</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Currently Practicing Internal Audit</label>
                            <div className="d-flex align-items-center">
                                <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="practicingAudit" id="practicingYes" value="yes" checked required />
                                <label className="form-check-label" htmlFor="practicingYes">
                                    Yes
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="practicingAudit" id="practicingNo" value="no" required />
                                <label className="form-check-label" htmlFor="practicingNo">
                                    No
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Nickname</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Years Practicing Internal Audit</label>
                            <input type="number" className="form-control" value="0" id="number" name="number" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Suffix</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Password *</label>
                            <input type="number" className="form-control" min="0" max="100" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Birthday *</label>
                            <input type="date" className="form-control"  placeholder="dd/mm/yy" 
                                onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "dd/mm/yy"} required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Confirm Password *</label>
                            <input type="number" className="form-control" min="0" max="100" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <div className="d-flex align-items-center">
                                <div className="form-check me-3">
                                    <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" checked required />
                                    <label className="form-check-label" htmlFor="genderMale">
                                    Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" required />
                                    <label className="form-check-label" htmlFor="genderFemale">
                                    Female
                                    </label>
                                </div>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="gender" id="genderPreferNotToSay" value="preferNotToSay" required />
                                <label className="form-check-label" htmlFor="genderPreferNotToSay">
                                    Prefer not to say
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-danger">PREVIOUS</button>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="button" className="btn btn-primary" onClick={() => goToStep(2)}>NEXT STEP</button>
                        </div>
                    </div>
                </>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <>
                {/* Step 2 Form Fields */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Complete Address *</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Province</label>
                        <select className="form-select" required>
                            <option value="Abra">Abra</option>
                            {/* Add more provinces as needed */}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Country</label>
                        <select className="form-select" required>
                            <option value="America">America</option>
                            {/* Add more countries as needed */}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <select className="form-select" required>
                            <option value="Abra">Abra</option>
                            {/* Add more cities as needed */}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">GEO</label>
                        <select className="form-select" required>
                            <option value="Luzon">Luzon</option>
                            {/* Add more cities as needed */}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Zip Code *</label>
                        <input type="number" className="form-control" required />
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="row mb-3">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-danger" onClick={() => goToStep(1)}>PREVIOUS</button>
                    </div>
                    <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-primary" onClick={() => goToStep(3)}>NEXT STEP</button>
                    </div>
                </div>
                </>
            )}

            {/* Step 3 */}
            {step === 3 && (
                <>
                    {/* Step 3 Form Fields */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Companies</label>
                            <select className="form-select" required>
                                <option value="Company A">Company A</option>
                                {/* Add more companies as needed */}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Industry Code</label>
                            <select className="form-select" required>
                                <option value="Agri">Agriculture, Forestry, Fishing, and Hunting</option>
                                {/* Add more parent companies as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Parent Company</label>
                            <select className="form-select" required>
                                <option value="Company A">Company A</option>
                                {/* Add more companies as needed */}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company Address *</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Title Position *</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company City *</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Job Code</label>
                            <select className="form-select" required>
                                <option value="JOB1">JOB1</option>
                                <option value="JOB2">JOB2</option>
                                {/* Add more companies as needed */}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Country</label>
                            <select className="form-select" required>
                                <option value="AMER">America</option>
                                <option value="PH">Philippines</option>
                                {/* Add more companies as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Nature of Business</label>
                            <select className="form-select" required>
                                <option value="Agri">Agriculture</option>
                                <option value="Mining">Mining</option>
                                {/* Add more companies as needed */}
                            </select>
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-danger" onClick={() => goToStep(2)}>PREVIOUS</button>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="button" className="btn btn-primary" onClick={() => goToStep(4)}>NEXT STEP</button>
                        </div>
                    </div>
                </>
            )}

            {step === 4 && (
                <>
                    {/* Step 4 Form Fields */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Contact Number *</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Alternate Email *</label>
                            <input type="email" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Alternate Contact Number *</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-danger" onClick={() => goToStep(3)}>PREVIOUS</button>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="button" className="btn btn-primary" onClick={() => goToStep(5)}>NEXT STEP</button>
                        </div>
                    </div>
                </>
            )}

          {step === 5 && (
            <>
              {/* Step 5 Form Fields */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Certification</label>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CPA" id="certificationCPA" />
                      <label className="form-check-label" htmlFor="certificationCPA">CPA</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CIA" id="certificationCIA" />
                      <label className="form-check-label" htmlFor="certificationCIA">CIA</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CCSA" id="certificationCCSA" />
                      <label className="form-check-label" htmlFor="certificationCCSA">CCSA</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CFSA" id="certificationCFSA" />
                      <label className="form-check-label" htmlFor="certificationCFSA">CFSA</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CRMA" id="certificationCRMA" />
                      <label className="form-check-label" htmlFor="certificationCRMA">CRMA</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="CGAP" id="certificationCGAP" />
                      <label className="form-check-label" htmlFor="certificationCGAP">CGAP</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">School/University Name *</label>
                  <input type="text" className="form-control" required />
                  <label className="form-label mt-3">Program/Degree Course Title *</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <button type="button" className="btn btn-danger" onClick={() => goToStep(4)}>PREVIOUS</button>
                </div>
                <div className="col-md-6 text-end">
                  <button type="button" className="btn btn-success">REGISTER</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}
