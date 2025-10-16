import React from 'react';

const Legend = () => {
  const legendItems = [
    { color: 'bg-primary-300', label: 'Checkup' },
    { color: 'bg-primary-400', label: 'Consultation' },
    { color: 'bg-primary-500', label: 'Follow-up' },
    { color: 'bg-primary-600', label: 'Procedure' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-sm font-semibold text-primary-700 mb-3">
        Appointment Types:
      </h3>
      <div className="flex flex-wrap gap-4">
        {legendItems.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${color} rounded` }></div>
            <span className="text-sm text-primary-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
