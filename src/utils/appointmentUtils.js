export const getAppointmentColor = (type) => {
  const colors = {
    'Checkup': 'bg-primary-50 border-primary-400 text-primary-800',
    'Consultation': 'bg-primary-100 border-primary-500 text-primary-800',
    'Follow-up': 'bg-primary-200 border-primary-600 text-primary-800',
    'Procedure': 'bg-primary-300 border-primary-700 text-primary-800'
  };
  return colors[type] || 'bg-gray-100 border-gray-400 text-gray-800';
};

export const getAppointmentForSlot = (appointments, day, hour, minute) => {
  const slotTime = new Date(day);
  slotTime.setHours(hour, minute, 0, 0);

  return appointments.find(apt => {
    const startTime = new Date(apt.startTime);
    const endTime = new Date(apt.endTime);
    return slotTime >= startTime && slotTime < endTime;
  });
};

export const getAppointmentsForDayAndHour = (appointments, day, hour) => {
  const dayStart = new Date(day);
  dayStart.setHours(hour, 0, 0, 0);
  
  const dayEnd = new Date(day);
  dayEnd.setHours(hour + 1, 0, 0, 0);

  return appointments.filter(apt => {
    const aptStart = new Date(apt.startTime);
    const aptEnd = new Date(apt.endTime);

    // Check for any overlap between the appointment and the hour slot
    return aptStart < dayEnd && aptEnd > dayStart;
  });
};
