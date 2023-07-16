import { useState } from 'react';
export interface Option {
  value: string;
  label: string;
}

export interface InputSelectProps {
  options: Option[];
}

export const InputSelect = ({ options }: InputSelectProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select className='InputSelect' value={selectedOption} onChange={handleOptionChange}>
        <option disabled selected value={""}>Elegir una opcion</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

