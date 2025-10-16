export const doctors = [
  {
    id: '1',
    name: 'Dr. Anirban Chatterjee',
    specialty: 'Cardiology',
    workingHours: { start: '08:00', end: '18:00' }
  },
  {
    id: '2',
    name: 'Dr. Sudipa Banerjee',
    specialty: 'Pediatrics',
    workingHours: { start: '09:00', end: '17:00' }
  },
  {
    id: '3',
    name: 'Dr. Debashish Mukherjee',
    specialty: 'Orthopedics',
    workingHours: { start: '08:00', end: '16:00' }
  }
];

const patients = [
  'Abhijit Sen', 'Tanushree Bose', 'Sanjib Das', 'Mahua Chakraborty', 'Subhash Dutta',
  'Mitali Ghosh', 'Prosenjit Roy', 'Poulami Bhattacharya', 'Soumya Bandopadhyay', 
  'Sreeja Majumdar', 'Debanjan Das Gupta', 'Susmita Sen', 'Biswajit Ganguly',
  'Chandana Dasgupta', 'Arindam Chatterjee', 'Moumita Banerjee', 'Tathagata Mukherjee',
  'Sayantani Bose', 'Dipankar Sanyal', 'Barnali Mitra'
];

const appointmentTypes = ['Checkup', 'Consultation', 'Follow-up', 'Procedure'];

// Generate mock appointments
export const appointments = (() => {
  const appointments = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 50; i++) {
    const doctorId = doctors[Math.floor(Math.random() * doctors.length)].id;
    const dayOffset = Math.floor(Math.random() * 7);
    const hour = 8 + Math.floor(Math.random() * 9);
    const minute = Math.random() < 0.5 ? 0 : 30;
    const duration = [30, 60, 90][Math.floor(Math.random() * 3)];
    
    const startTime = new Date(today);
    startTime.setDate(today.getDate() + dayOffset);
    startTime.setHours(hour, minute, 0, 0);
    
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    appointments.push({
      id: `apt-${i}` ,
      doctorId,
      patientName: patients[Math.floor(Math.random() * patients.length)],
      type: appointmentTypes[Math.floor(Math.random() * appointmentTypes.length)],
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration
    });
  }

  return appointments;
})();