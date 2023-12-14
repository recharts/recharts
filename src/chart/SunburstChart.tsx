import React from 'react';

interface SunburstProps {
  data: any;
  children: React.ReactNode;
}

export const SunburstChart = ({ data, children }: SunburstProps) => {
  return (
    <div>
      <p>{data.name}</p>
      {children}
    </div>
  );
};
