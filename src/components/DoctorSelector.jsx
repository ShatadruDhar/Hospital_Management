import React from 'react';

const DoctorSelector = ({ selectedDoctorId, onChange, doctors }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-primary-700 mb-2">
        Select Doctor
      </label>
      <select
        value={selectedDoctorId}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-primary-700"
      >
        {doctors.map(doctor => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name} - {doctor.specialty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoctorSelector;
