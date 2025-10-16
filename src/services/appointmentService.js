import { appointments } from '../data/mockData';

/**
 * Service layer for appointment data access
 * Abstracts data fetching and filtering logic
 */
class AppointmentService {
  /**
   * Get appointments for a specific doctor on a specific date
   */
  static getAppointmentsByDoctorAndDate(doctorId, date) {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    
    return appointments.filter(apt => {
      if (apt.doctorId !== doctorId) return false;
      
      const aptDate = new Date(apt.startTime);
      aptDate.setHours(0, 0, 0, 0);
      
      return aptDate.getTime() === targetDate.getTime();
    });
  }

  /**
   * Get appointments for a specific doctor for a week starting from startDate
   */
  static getAppointmentsByDoctorAndWeek(doctorId, startDate) {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    return appointments.filter(apt => {
      if (apt.doctorId !== doctorId) return false;
      
      const aptDate = new Date(apt.startTime);
      return aptDate >= start && aptDate < end;
    });
  }

  /**
   * Get all appointments for a specific doctor
   */
  static getAppointmentsByDoctor(doctorId) {
    return appointments.filter(apt => apt.doctorId === doctorId);
  }
}

export default AppointmentService;
