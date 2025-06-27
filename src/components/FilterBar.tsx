import React from 'react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedAttribute: string;
  onAttributeChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedAttribute,
  onAttributeChange,
  selectedRole,
  onRoleChange,
}) => {
  const attributes = ['All', 'Strength', 'Agility', 'Intelligence', 'Universal'];
  const roles = [
    'All',
    'Carry',
    'Support',
    'Durable',
    'Nuker',
    'Disabler',
    'Initiator',
    'Escape',
    'Jungler',
    'Pusher',
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-4">
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-grow px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <select
        value={selectedAttribute}
        onChange={(e) => onAttributeChange(e.target.value)}
        className="px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        {attributes.map((attr) => (
          <option key={attr} value={attr}>
            {attr}
          </option>
        ))}
      </select>

      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};
