
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
    <div className="space-y-4 mb-4">
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-slate-300 mb-2">Attributes</h4>
          <div className="flex flex-wrap gap-2">
            {attributes.map((attr) => (
              <button
                key={attr}
                onClick={() => onAttributeChange(attr)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedAttribute === attr
                    ? 'bg-yellow-500 text-slate-900'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {attr}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-300 mb-2">Roles</h4>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => onRoleChange(role)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedRole === role
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
