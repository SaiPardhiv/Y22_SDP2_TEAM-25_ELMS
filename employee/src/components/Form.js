import { Typography } from '@mui/material';
import React, { useState } from 'react';


const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    leavePurpose: '',
    leaveDates: [],
    leaveType: '',
    documentation: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (dates) => {
    setFormData({ ...formData, leaveDates: dates });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, documentation: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submission logic goes here
    console.log(formData);
  };

  return (
    
    <div style={styles.cardContainer}><Typography><h2>Leave Request Form</h2></Typography>
      <h2 style={styles.heading}>Leave Request Form</h2>
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Leave Purpose:</label>
            <input
              type="text"
              name="leavePurpose"
              value={formData.leavePurpose}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Dates for Leave:</label>
            <input
              type="date"
              name="leaveDates"
              value={formData.leaveDates}
              onChange={handleDateChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Type of Leave:</label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="">Select Type</option>
              <option value="casual">Casual</option>
              <option value="medical">Medical</option>
              <option value="maternity">Maternity</option>
              <option value="onduty">On Duty</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Documentation (PDF only):</label>
            <input
              type="file"
              accept="application/pdf"
              name="documentation"
              onChange={handleFileChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestForm;

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  heading: {
    color: 'white',
    marginBottom: '20px',
  },
  card: {
    width: '700px',
    padding: '20px',
    backgroundColor: '#c4d7ed',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: 'white',
  },
  input: {
    width: '70%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'white',
    color: '#007bff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
