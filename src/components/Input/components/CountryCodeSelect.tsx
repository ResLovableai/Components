import React, { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+81', flag: '🇯🇵' },
  // Add more country codes as needed
];

export const CountryCodeSelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);

  return (
    <select
      value={selectedCountry.code}
      onChange={(e) => {
        const country = COUNTRY_CODES.find(c => c.code === e.target.value);
        if (country) setSelectedCountry(country);
      }}
      className="rsp-h-full rsp-border-r rsp-border-gray-300 rsp-bg-gray-50 rsp-px-2 rsp-rounded-l-md"
    >
      {COUNTRY_CODES.map((country) => (
        <option key={country.code} value={country.code}>
          {country.flag} {country.code}
        </option>
      ))}
    </select>
  );
};