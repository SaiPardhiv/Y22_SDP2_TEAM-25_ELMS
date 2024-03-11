const mongoose = require('mongoose');

const LeaveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        unique: true,
        required: true
    },
    leavePurpose: {
        type: String,
        required: true
    },
    leaveDates: {
        type: Date,
        unique: true,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    documentation: {
        type: Document
        
    }
});

const LeaveModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;
