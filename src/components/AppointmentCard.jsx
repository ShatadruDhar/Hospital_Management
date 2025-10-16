import React from 'react';
import { getAppointmentColor } from '../utils/appointmentUtils';

const AppointmentCard = ({ appointment, compact = false }) => {
  const colorClass = getAppointmentColor(appointment.type);

  if (compact) {
    return (
      <div className={`text-xs p-1 rounded mb-1 ${colorClass}` }>
        <div className="font-semibold truncate">{appointment.patientName}</div>
        <div className="truncate">{appointment.type}</div>
      </div>
    );
  }

  return (
    <div className={`p-3 rounded-lg border-l-4 ${colorClass}` }>
      <div className="font-semibold">{appointment.patientName}</div>
      <div className="text-sm mt-1">{appointment.type}</div>
      <div className="text-xs mt-1 opacity-75">
        {appointment.duration} minutes
      </div>
    </div>
  );
};

export default AppointmentCard;
