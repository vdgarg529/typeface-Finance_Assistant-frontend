import { useState, useEffect } from 'react';
import api from '../utils/api';
import ChartCard from '../components/ChartCard';

const Summary = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [filters, setFilters] = useState({
    start_date: '',
    end_date: '',
    type: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSummaryData();
  }, [filters]);

  const fetchSummaryData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.start_date) params.append('start_date', filters.start_date);
      if (filters.end_date) params.append('end_date', filters.end_date);
      if (filters.type) params.append('type', filters.type);

      // Fetch category summary
      const categoryResponse = await api.get(`/transactions/summary/category?${params}`);
      const categoryChartData = categoryResponse.data.map(item => ({
        name: item.category,
        value: item.total_amount
      }));
      setCategoryData(categoryChartData);

      // Fetch date summary
      const dateResponse = await api.get(`/transactions/summary/date?${params}`);
      const dateChartData = dateResponse.data.map(item => ({
        name: new Date(item.date).toLocaleDateString(),
        value: item.total_amount
      }));
      setDateData(dateChartData);
    } catch (error) {
      console.error('Error fetching summary data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Financial Summary</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Summary Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-8">Loading summary data...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categoryData.length > 0 && (
            <ChartCard 
              data={categoryData} 
              title="Spending by Category" 
              type="pie"
            />
          )}
          
          {dateData.length > 0 && (
            <ChartCard 
              data={dateData} 
              title="Spending Over Time" 
              type="line"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Summary;