/**
 * Logout Functionality for KLORIVA CRM
 */

function clearAllData() {
    // Clear all customer-related data
    localStorage.removeItem('customers');
    localStorage.removeItem('currentCustomer');
    localStorage.removeItem('currentPage');
}

function handleLogout() {
    // Clear all data
    clearAllData();
    
    // Redirect to login page
    window.location.href = 'index.html';
    
    // Prevent default anchor behavior
    return false;
}

// Attach to window object
window.logout = handleLogout;