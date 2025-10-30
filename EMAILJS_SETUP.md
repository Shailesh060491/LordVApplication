# EmailJS Setup Instructions

## 📧 How to Set Up EmailJS for Contact Form

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT:** Set the **"To Email"** field to: `support@lordvservices.com`
4. Set the **Subject** to: `New Contact Form Submission from {{from_name}}`
5. Use this template content:

```
Dear Lord V Services Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested: {{service}}
Message: {{message}}

Please respond to the customer at their earliest convenience.

Best regards,
Lord V Services Website
```

6. Save the template and note down your **Template ID**

**⚠️ CRITICAL:** The **"To Email"** field in the template determines where emails are sent. Make sure it's set to `support@lordvservices.com`!

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   ```javascript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: 'your_actual_public_key_here',
     SERVICE_ID: 'your_actual_service_id_here',
     TEMPLATE_ID: 'your_actual_template_id_here',
     TO_EMAIL: 'support@lordvservices.com',
     FROM_NAME: 'Lord V Services Contact Form'
   }
   ```

### Step 6: Test the Form
1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message

## 🔧 Troubleshooting

### Common Issues:
1. **"Invalid Public Key"** - Check your public key in the config
2. **"Service not found"** - Verify your service ID
3. **"Template not found"** - Check your template ID
4. **Emails not received** - Check spam folder, verify email service setup

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email services
- 2 email templates

## 📞 Support
If you need help with EmailJS setup, contact:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Lord V Services: support@lordvservices.com
