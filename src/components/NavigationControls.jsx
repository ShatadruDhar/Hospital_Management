import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const NavigationControls = ({ onNavigate, onToday }) => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="icon" onClick={() => onNavigate(-1)}>
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button variant="primary" onClick={onToday}>
        Today
      </Button>
      <Button variant="icon" onClick={() => onNavigate(1)}>
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default NavigationControls;
