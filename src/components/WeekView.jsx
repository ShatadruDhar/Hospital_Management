import React from 'react';
import ScheduleHeader from './ScheduleHeader';
import AppointmentCard from './AppointmentCard';
import { useTimeSlots, useWeekDays } from '../hooks/useAppointments';
import { formatDate, getDayName } from '../utils/dateUtils';
import { getAppointmentsForDayAndHour } from '../utils/appointmentUtils';

const WeekView = ({ doctor, startDate, appointments }) => {
  const weekDays = useWeekDays(startDate);
  const timeSlots = useTimeSlots();
  const uniqueHours = [...new Set(timeSlots.map(slot => slot.hour))];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ScheduleHeader doctor={doctor} />

      <div className="p-4">
        <div className="text-center mb-4 text-sm text-primary-600">
          {formatDate(weekDays[0])} - {formatDate(weekDays[6])}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Header Row */}
          <div className="grid grid-cols-8 border-b border-primary-100">
            <div className="p-2 font-semibold text-primary-700 text-sm border-r border-primary-100">
              Time
            </div>
            {weekDays.map((day, idx) => (
              <div key={idx} className="p-2 text-center border-r border-primary-100">
                <div className="font-semibold text-primary-800">{getDayName(day)}</div>
                <div className="text-xs text-primary-600">
                  {day.getDate()}
                </div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          {uniqueHours.map(hour => (
            <div key={hour} className="grid grid-cols-8 border-b border-gray-100">
              <div className="p-2 text-sm font-medium text-primary-600 border-r border-primary-100">
                {`${hour.toString().padStart(2, '0')}:00`}
              </div>
              {weekDays.map((day, dayIdx) => {
                const dayAppointments = getAppointmentsForDayAndHour(
                  appointments, 
                  day, 
                  hour
                );
                
                return (
                  <div key={dayIdx} className="p-1 border-r border-gray-100 min-h-[60px]">
                    {dayAppointments.map(apt => (
                      <AppointmentCard 
                        key={apt.id} 
                        appointment={apt} 
                        compact={true}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
