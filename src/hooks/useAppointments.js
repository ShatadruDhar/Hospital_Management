import { useMemo } from 'react';
import AppointmentService from '../services/appointmentService';

/**
 * Custom hook for managing appointment data
 * Separates business logic from UI components (headless pattern)
 */
export const useAppointments = (doctorId, date, viewType) => {
  const appointments = useMemo(() => {
    if (viewType === 'day') {
      return AppointmentService.getAppointmentsByDoctorAndDate(doctorId, date);
    } else {
      return AppointmentService.getAppointmentsByDoctorAndWeek(doctorId, date);
    }
  }, [doctorId, date, viewType]);

  return {
    appointments,
    loading: false,
    error: null
  };
};

/**
 * Hook for generating time slots
 */
export const useTimeSlots = (startHour = 8, endHour = 18) => {
  return useMemo(() => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of [0, 30]) {
        slots.push({ hour, minute });
      }
    }
    return slots;
  }, [startHour, endHour]);
};

/**
 * Hook for generating week days
 */
export const useWeekDays = (startDate) => {
  return useMemo(() => {
    const days = [];
    const start = new Date(startDate);
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  }, [startDate]);
};
