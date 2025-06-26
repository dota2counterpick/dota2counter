
import React from 'react';
import { Search } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedAttribute: string;
  onAttributeChange: (attribute: string) => void;
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedAttribute,
  onAttributeChange,
  selectedRole,
  onRoleChange
}) => {
  const attributes = ['All', 'Strength', 'Agility', 'Intelligence'];
  const roles = ['All', 'Carry', 'Support', 'Nuker', 'Disabler', 'Initiator', 'Durable', 'Escape', 'Pusher', 'Jungler'];

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search heroes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-400 focus:outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">Attribute:</span>
          <div className="flex gap-1">
            {attributes.map((attr) => (
              <button
                key={attr}
                onClick={() => onAttributeChange(attr)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  selectedAttribute === attr
                    ? 'bg-yellow-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {attr}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        <span className="text-sm text-slate-400 mr-2">Role:</span>
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onRoleChange(role)}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              selectedRole === role
                ? 'bg-yellow-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};
