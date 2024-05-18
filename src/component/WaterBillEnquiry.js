import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../component/WaterBillEnquiry.css"
import water from "./../img/water.png"
const WaterBillEnquiry = () => {
  const [form, setForm] = useState({
    customerName: '',
    customerId: '',
    counterNo: 'counter 1',
    totalMonths: '1',
    dateOfEnquiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add form submission logic here
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header text-center text-teal-500">
        <img src={water} alt="Logo" className="logo-img" />
          <h2>Water-Bill-Enquiry</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name:</label>
              <input
                type="text"
                className="form-control small-input"
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="customerId">Customer ID:</label>
              <input
                type="text"
                className="form-control small-input"
                id="customerId"
                name="customerId"
                value={form.customerId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="counterNo">Counter No.:</label>
              <select
                className="form-control"
                id="counterNo"
                name="counterNo"
                value={form.counterNo}
                onChange={handleChange}
              >
                <option value="counter 1">counter 1</option>
                <option value="counter 2">counter 2</option>
                <option value="counter 3">counter 3</option>
                <option value="counter 1">counter 1</option>
                <option value="counter 2">counter 2</option>
                <option value="counter 3">counter 3</option>
              </select>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="totalMonths">Total Months:</label>
              <select
                className="form-control"
                id="totalMonths"
                name="totalMonths"
                value={form.totalMonths}
                onChange={handleChange}
              >
                <option value="1">Baisakh</option>
                <option value="2">Jestha</option>
                <option value="3">Ashar</option>
                <option value="4">Shrawan</option>
                <option value="5">Bhadra</option>
                <option value="6">Ashoj</option>
                <option value="2">Kartik</option>
                <option value="3">Mangsir</option>
                <option value="4">Poush</option>
                <option value="5">Magh</option>
                <option value="6">Falgun</option>
                <option value="6">Chaitra</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="dateOfEnquiry">Date Of Enquiry:</label>
              <input
                type="date"
                className="form-control"
                id="dateOfEnquiry"
                name="dateOfEnquiry"
                value={form.dateOfEnquiry}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaterBillEnquiry;
