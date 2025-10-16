/**
 * Hospital Management System - Mock Data
 * Salt Lake City Hospital, Kolkata
 * Last Updated: 16/10/2025
 */

// Available appointment types
export const appointmentTypes = [
  'First Visit',
  'Follow-up',
  'Emergency',
  'Report Review',
  'Pediatric Consultation',
  'Orthopedic Assessment',
  'Sports Injury',
  'Minor Procedure'
];

// Configuration for each appointment type
export const appointmentConfig = {
  'First Visit': { duration: 30, code: 'FV' },
  'Follow-up': { duration: 15, code: 'FU' },
  'Emergency': { duration: 20, code: 'EC' },
  'Report Review': { duration: 10, code: 'RR' },
  'Pediatric Consultation': { duration: 45, code: 'PC' },
  'Orthopedic Assessment': { duration: 40, code: 'OA' },
  'Sports Injury': { duration: 60, code: 'SI' },
  'Minor Procedure': { duration: 45, code: 'MP' }
};

// Doctor database
export const doctors = [
  {
    id: 'SLCH-DOC-001',
    name: 'Dr. Anirban Chatterjee',
    specialty: 'General Medicine',
    workingHours: { 
      start: '10:30', 
      end: '18:30',
      wednesday: { start: '12:00', end: '19:00' }
    },
    lunch: '14:00-15:00',
    chamber: 'Block A, Room 103',
    degrees: 'MBBS (Cal), MD (SSKM)',
    regNo: 'WB/MCI/7845',
    languages: ['Bengali', 'English', 'Hindi'],
    fees: {
      new: 800,
      followup: 500,
      reportReview: 300
    }
  },
  {
    id: 'SLCH-DOC-014',
    name: 'Dr. Sudipa Banerjee',
    specialty: 'Pediatric Surgery',
    workingHours: { 
      start: '09:30', 
      end: '16:30',
      saturday: { start: '09:30', end: '13:30' }
    },
    lunch: '13:00-14:00',
    chamber: 'Block B, Room 205 (Pediatric Wing)',
    degrees: 'MBBS (R.G.Kar), MS (AIIMS-Delhi)',
    regNo: 'WB/MCI/12452',
    emergencyDays: ['Monday', 'Thursday'],
    languages: ['Bengali', 'English'],
    fees: {
      new: 1000,
      followup: 600,
      emergency: 1500
    },
    notice: 'On leave from 22nd Oct to 25th Oct - Pediatric Surgery Conference'
  },
  {
    id: 'SLCH-DOC-023',
    name: 'Dr. Debashish Mukherjee',
    specialty: 'Orthopedics & Sports Medicine',
    workingHours: { 
      start: '07:30', 
      end: '14:30',
      friday: { start: '16:00', end: '20:00' }
    },
    lunch: '12:30-13:30',
    chamber: 'Block A, Room 107 (Near Physio)',
    degrees: 'MBBS (NRS), MS-Ortho (PGI), Sp. Fellowship (Sports Medicine-UK)',
    regNo: 'WB/MCI/15978',
    specialClinic: 'Friday Evening - Sports Injury & Arthritis Clinic',
    languages: ['Bengali', 'English', 'Hindi'],
    fees: {
      new: 1200,
      followup: 800,
      procedure: 2500,
      specialClinic: 1500
    },
    assistants: ['Ranjit (Physio)', 'Malati di (Nurse)']
  }
];

// Patient database
export const patients = [
  {
    name: 'Abhijit Sen',
    id: 'SL-2021-4517',
    address: '45/C, EC Block',
    phone: '9831xxxxxx',
    age: 45,
    bloodGroup: 'B+',
    regDate: '15/03/2021'
  },
  {
    name: 'Tanushree Bose',
    id: 'SL-2020-3892',
    address: '127, AE Block',
    phone: '9007xxxxxx',
    age: 36,
    bloodGroup: 'O+',
    regDate: '22/08/2020'
  },
  {
    name: 'Sanjib Das',
    id: 'SL-2019-2134',
    address: '89/B, BD Block',
    phone: '8334xxxxxx',
    age: 62,
    bloodGroup: 'AB+',
    regDate: '04/12/2019',
    note: 'Diabetic'
  },
  {
    name: 'Sreeja Majumdar',
    id: 'SL-2022-6723',
    address: '56, FE Block',
    phone: '9674xxxxxx',
    age: 28,
    bloodGroup: 'A+',
    regDate: '18/01/2022',
    lastVisit: '02/10/2025'
  },
  {
    name: 'Biswajit Ganguly',
    id: 'SL-SC-142',
    address: '234/1, AG Block',
    phone: '9830xxxxxx',
    age: 73,
    bloodGroup: 'B+',
    regDate: '10/06/2018',
    cardType: 'Senior Gold'
  },
  {
    name: 'Barnali Mitra',
    id: 'LT-2025-0127',
    address: '45/2A Lake Town',
    phone: '6290xxxxxx',
    age: 41,
    bloodGroup: 'O-',
    regDate: '05/09/2025',
    referredBy: 'Dr. Mukherjee'
  }
];

// Generate mock appointments for the week
const generateAppointments = () => {
  const appointments = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 50; i++) {
    const doctorId = doctors[Math.floor(Math.random() * doctors.length)].id;
    const dayOffset = Math.floor(Math.random() * 7);
    const hour = 8 + Math.floor(Math.random() * 9);
    const minute = Math.random() < 0.5 ? 0 : 30;
    const appointmentType = appointmentTypes[Math.floor(Math.random() * appointmentTypes.length)];
    const duration = appointmentConfig[appointmentType].duration;
    
    const startTime = new Date(today);
    startTime.setDate(today.getDate() + dayOffset);
    startTime.setHours(hour, minute, 0, 0);
    
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    const randomPatient = patients[Math.floor(Math.random() * patients.length)];
    
    appointments.push({
      id: `APT-${dayOffset}${hour}${minute}-${i}`,
      doctorId,
      patientName: randomPatient.name,
      patientId: randomPatient.id,
      type: appointmentType,
      code: appointmentConfig[appointmentType].code,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration,
      status: Math.random() > 0.1 ? 'confirmed' : 'tentative'
    });
  }

  return appointments;
};

export const appointments = generateAppointments();