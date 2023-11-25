import React, { useState } from "react";
import "../Recipient/Recipient.css";

function Recipient() {
  const [formData, setFormData] = useState({
    data: "",
    nname: "",
    number: "",
    company: "",
    address: "",
    amount: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    // start the componenet//

    <div className="ka-recipient">
      {/*start name and information componenet   */}
      <div className="ka-enter-name">
        <p className="ka-main-rec-info ">Recipient information </p>
        <p className="ka-pragraph">
          Enter the recipients information accurately
        </p>
      </div>
      {/* end name and information componenet  */}
      {/* start form to entert data */}
      <div className="ka-countaener">
        {" "}
        {/* enter name */}
        <div className="ka-line1">
          <input
            className="ka-inp2"
            placeholder="Enter Recipient Full Name"
            type="text"
            name="nname"
            value={formData.name}
            onChange={handleInputChange}
          />
          {/* Enter Recipient Numper */}
          <input
            className="ka-inp2"
            placeholder="Enter Recipient Numper"
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>
        {/*  Payment Methood*/}
        <div className="ka-line2">
          <div className="ka-line2-col1">
            <label className="ka-pay">Payment Methood </label>
            <select
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            >
              {/* select data */}
              <option>Select </option>
              <option value="  company 1">MTN cash</option>
              <option value="company 2">Syriatel cash </option>
              <option value="company 3"> Alharam</option>
              <option value="company 4"> Alfouad</option>
              <option value="company 5"> Bemo Bank</option>
            </select>
          </div>
          {/* enter Youer Address  */}
          <div className="ka-line2-col2">
            <input
              placeholder="Enter Youer Address"
              className="ka-inp3"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* The Amount Withdrawn */}
        <div className="ka-line3">
          <input
            placeholder="The Amount Withdrawn"
            className="ka-inp4"
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
          {/* The Password For Varifai */}
          <input
            placeholder="The Password For Varifai"
            className="ka-inp5"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>{" "}
      {/* end form data */}
    </div>
    // end the  components
  );
}

export default Recipient;
