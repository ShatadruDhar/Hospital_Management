import React from 'react';
import ScheduleView from './components/ScheduleView';

const App = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-primary-700 mb-2">
            Hospital Appointment Scheduler
          </h1>
          <p className="text-primary-500">
            Manage and view doctor appointments
          </p>
        </div>

        <ScheduleView />
      </div>
    </div>
  );
};

export default App;
