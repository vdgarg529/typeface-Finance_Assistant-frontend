import { useState } from 'react';
import TransactionList from '../components/TransactionList';

const Statement = () => {
  const [filters, setFilters] = useState({
    start_date: '',
    end_date: '',
    type: '',
    category: ''
  });
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleApplyFilters = () => {
    // Only apply filters that have values
    const activeFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        activeFilters[key] = value;
      }
    });
    setAppliedFilters(activeFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      start_date: '',
      end_date: '',
      type: '',
      category: ''
    });
    setAppliedFilters({});
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Transaction Statement</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
              Start Date
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={filters.start_date}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_date">
              End Date
            </label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={filters.end_date}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              placeholder="Filter by category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={handleApplyFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Apply Filters
          </button>
          
          <button
            onClick={handleClearFilters}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Clear Filters
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <TransactionList filters={appliedFilters} />
      </div>
    </div>
  );
};

export default Statement;