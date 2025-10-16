import React from 'react';
import { Calendar } from 'lucide-react';
import ScheduleHeader from './ScheduleHeader';
import AppointmentCard from './AppointmentCard';
import { useTimeSlots } from '../hooks/useAppointments';
import { formatDate } from '../utils/dateUtils';
import { getAppointmentForSlot } from '../utils/appointmentUtils';

const DayView = ({ doctor, date, appointments }) => {
  const timeSlots = useTimeSlots();
  const renderedAppointments = new Set();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ScheduleHeader doctor={doctor} />

      <div className="p-4">
        <div className="flex items-center justify-center mb-4 text-lg font-semibold text-primary-700">
          <Calendar className="w-5 h-5 mr-2" />
          {formatDate(date)}
        </div>

        <div className="space-y-1">
          {timeSlots.map(({ hour, minute }) => {
            const appointment = getAppointmentForSlot(appointments, date, hour, minute);
            const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

            let appointmentCard = null;
            if (appointment && !renderedAppointments.has(appointment.id)) {
              appointmentCard = <AppointmentCard appointment={appointment} />;
              renderedAppointments.add(appointment.id);
            } else if (appointment && renderedAppointments.has(appointment.id)) {
              // This slot is covered by an already rendered appointment
              return null;
            }

            return (
              <div key={timeStr} className="flex border-b border-gray-100">
                <div className="w-20 py-3 px-2 text-sm font-medium text-gray-600 flex-shrink-0">
                  {timeStr}
                </div>
                <div className="flex-1 py-2 px-3">
                  {appointmentCard || <div className="h-12"></div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayView;
