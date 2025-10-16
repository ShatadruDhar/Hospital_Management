import React, { useState } from 'react';
import DoctorSelector from './DoctorSelector';
import NavigationControls from './NavigationControls';
import ViewToggle from './ViewToggle';
import Legend from './Legend';
import DayView from './DayView';
import WeekView from './WeekView';
import { useAppointments } from '../hooks/useAppointments';
import { doctors } from '../data/mockData';

const ScheduleView = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0].id);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState('day');

  const selectedDoctor = doctors.find(d => d.id === selectedDoctorId);
  const { appointments } = useAppointments(selectedDoctorId, currentDate, viewType);

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (viewType === 'day') {
      newDate.setDate(newDate.getDate() + direction);
    } else {
      newDate.setDate(newDate.getDate() + (direction * 7));
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="space-y-6">
      {/* Controls Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <DoctorSelector
          selectedDoctorId={selectedDoctorId}
          onChange={setSelectedDoctorId}
          doctors={doctors}
        />

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <NavigationControls 
            onNavigate={navigateDate}
            onToday={goToToday}
          />
          <ViewToggle 
            viewType={viewType}
            onChange={setViewType}
          />
        </div>
      </div>

      {/* Legend */}
      <Legend />

      {/* Calendar View */}
      {viewType === 'day' ? (
        <DayView
          doctor={selectedDoctor}
          date={currentDate}
          appointments={appointments}
        />
      ) : (
        <WeekView
          doctor={selectedDoctor}
          startDate={currentDate}
          appointments={appointments}
        />
      )}
    </div>
  );
};

export default ScheduleView;
