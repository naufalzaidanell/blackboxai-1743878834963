/**
 * CRM Core Functionality for KLORIVA
 * Handles customer data management and basic operations
 */

// Initialize CRM
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in for all pages except index
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage !== 'index.html' && !localStorage.getItem('currentCustomer')) {
        window.location.href = 'index.html';
        return;
    }

    // Load customer data if on index page
    if (currentPage === 'index.html' && !localStorage.getItem('currentCustomer')) {
        initializeSampleCustomer();
    }

    // Set current page
    localStorage.setItem('currentPage', currentPage.replace('.html', ''));
});

// Initialize sample customer data
function initializeSampleCustomer() {
    const sampleCustomer = {
        id: 'CUST-001',
        name: 'Budi Santoso',
        email: 'budi.santoso@example.com',
        phone: '+6281234567890',
        birthDate: '1990-07-15',
        createdAt: new Date().toISOString(),
        orders: [],
        loyalty: {
            points: 0,
            tier: 'Bronze'
        },
        addresses: [
            {
                type: 'primary',
                street: 'Jl. Merdeka No. 123',
                city: 'Jakarta Selatan',
                province: 'DKI Jakarta',
                postalCode: '12345'
            }
        ]
    };
    localStorage.setItem('currentCustomer', JSON.stringify(sampleCustomer));
}

// Get current customer data
function getCurrentCustomer() {
    return JSON.parse(localStorage.getItem('currentCustomer'));
}

// Update customer data
function updateCustomer(updatedData) {
    const customer = getCurrentCustomer();
    const updatedCustomer = {...customer, ...updatedData};
    localStorage.setItem('currentCustomer', JSON.stringify(updatedCustomer));
    return updatedCustomer;
}

// Navigation functions
function navigateTo(page) {
    localStorage.setItem('currentPage', page);
    window.location.href = `${page}.html`;
}

// Clear all customers
function clearCustomers() {
    localStorage.removeItem('customers');
    localStorage.removeItem('currentCustomer');
}

// Logout function
function logout() {
    clearCustomers();
    navigateTo('index');
}
