// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from your EmailJS account at https://www.emailjs.com/
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your public key
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your template ID
  
  // Email settings
  TO_EMAIL: 'support@lordvservices.com',
  FROM_NAME: 'Lord V Services Contact Form'
}

// Instructions for setup:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Customer's name
//    - {{from_email}} - Customer's email
//    - {{phone}} - Customer's phone
//    - {{company}} - Customer's company
//    - {{service}} - Selected service
//    - {{message}} - Customer's message
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values above with your actual credentials
