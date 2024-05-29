// script.js

// Dummy data
const data = [
    { id: 1, type: 'coffee', name: 'Espresso', sales: 150 },
    { id: 2, type: 'tea', name: 'Green Tea', sales: 100 },
    { id: 3, type: 'pastry', name: 'Croissant', sales: 80 },
    { id: 4, type: 'coffee', name: 'Latte', sales: 120 },
    { id: 5, type: 'tea', name: 'Black Tea', sales: 90 },
    { id: 6, type: 'pastry', name: 'Muffin', sales: 50 },
  ];
  
  // Function to render data
  function renderData(filteredData) {
    const analyticsData = document.getElementById('analyticsData');
    analyticsData.innerHTML = '';
  
    if (filteredData.length === 0) {
      analyticsData.innerHTML = '<p>No data available.</p>';
      return;
    }
  
    filteredData.forEach(item => {
      const dataItem = document.createElement('div');
      dataItem.className = 'data-item';
      dataItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Type: ${item.type}</p>
        <p>Sales: ${item.sales}</p>
      `;
      analyticsData.appendChild(dataItem);
    });
  }
  
  // Function to handle filter change
  function handleFilterChange(event) {
    const selectedType = event.target.value;
    const filteredData = selectedType === 'all' ? data : data.filter(item => item.type === selectedType);
    renderData(filteredData);
  }
  
  // Event listener for filter
  document.getElementById('productType').addEventListener('change', handleFilterChange);
  
  // Initial render
  renderData(data);
  