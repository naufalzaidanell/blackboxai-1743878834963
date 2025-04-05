/**
 * Authentication Handler for KLORIVA CRM
 */

// Initialize single admin account
const ADMIN_ACCOUNT = {
  id: 'ADMIN-001',
  name: 'Admin KLORIVA',
  email: 'admin@kloriva.com',
  phone: '08123456789',
  joinDate: new Date().toISOString(),
  password: 'kloriva123'
};

// Clear all customer data
function clearAllCustomers() {
  localStorage.removeItem('customers');
  localStorage.removeItem('currentCustomer');
}

// Handle login
function handleLogin(email, password) {
  // Get existing customers
  const customers = JSON.parse(localStorage.getItem('customers')) || [];
  
  // Find matching customer
  const customer = customers.find(c => 
    c.email === email && c.password === password
  );
  
  if (customer) {
    localStorage.setItem('currentCustomer', JSON.stringify(customer));
    return true;
  }
  return false;
}

// Check authentication
function isAuthenticated() {
  return !!localStorage.getItem('currentCustomer');
}

// Logout
function logout() {
  clearAllCustomers();
  window.location.href = 'index.html';
}