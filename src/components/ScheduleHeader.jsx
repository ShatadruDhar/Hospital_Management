import React from 'react';

const ScheduleHeader = ({ doctor }) => {
  return (
    <div className="p-4 border-b border-primary-100 bg-gradient-to-r from-primary-50 to-white">
      <h2 className="text-2xl font-bold text-primary-700">{doctor.name}</h2>
      <p className="text-primary-600">{doctor.specialty}</p>
      <p className="text-sm text-primary-500 mt-1">
        Working Hours: {doctor.workingHours.start} - {doctor.workingHours.end}
      </p>
    </div>
  );
};

export default ScheduleHeader;
