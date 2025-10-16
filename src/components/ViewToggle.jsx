import React from 'react';
import { Button } from './ui/Button';

const ViewToggle = ({ viewType, onChange }) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={viewType === 'day' ? 'active' : 'default'}
        onClick={() => onChange('day')}
      >
        Day View
      </Button>
      <Button
        variant={viewType === 'week' ? 'active' : 'default'}
        onClick={() => onChange('week')}
      >
        Week View
      </Button>
    </div>
  );
};

export default ViewToggle;
