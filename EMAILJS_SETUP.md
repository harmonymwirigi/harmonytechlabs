# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Copy the Service ID** - you'll need this for the `.env` file

## Step 3: Create Email Templates

### Template 1: Contact Form

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form

**To Email:** harmonymwithalii@gmail.com (set this in the template settings)

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
New contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from your HarmonyTechLabs website contact form.
```

**Important:** In the EmailJS template editor, make sure to set the "To Email" field to `harmonymwithalii@gmail.com`. The email will be sent FROM the connected service (harmonymwirigi99@gmail.com) TO harmonymwithalii@gmail.com.

4. **Copy the Template ID** - you'll need this for `VITE_EMAILJS_TEMPLATE_ID_CONTACT`

### Template 2: Consultation Form

1. Create another template:

**Template Name:** Consultation Request

**To Email:** harmonymwithalii@gmail.com (set this in the template settings)

**Subject:** Free Consultation Request from {{from_name}}

**Content:**
```
New consultation request from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

---
This email was sent from your HarmonyTechLabs website consultation form.
```

**Important:** In the EmailJS template editor, make sure to set the "To Email" field to `harmonymwithalii@gmail.com`.

4. **Copy the Template ID** - you'll need this for `VITE_EMAILJS_TEMPLATE_ID_CONSULTATION`

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** in the API Keys section
3. Copy it - you'll need this for `VITE_EMAILJS_PUBLIC_KEY`

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env` in the root of your project:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id_here
   VITE_EMAILJS_TEMPLATE_ID_CONSULTATION=your_consultation_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Replace the placeholder values with your actual EmailJS values

## Step 6: Test the Forms

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form and submit
3. Check your email (harmonymwithalii@gmail.com) for the submission
4. Test the consultation form as well

## Troubleshooting

- **"Email service is not configured"**: Make sure all environment variables are set in your `.env` file
- **400 Error (Bad Request)**: 
  - Check that all template variables in your EmailJS template match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{project_type}}`, `{{budget}}`, `{{message}}`
  - Make sure the "To Email" field in your EmailJS template is set to `harmonymwithalii@gmail.com`
  - Verify your Service ID, Template IDs, and Public Key are correct in your `.env` file
  - Check the browser console for detailed error messages
- **Emails not arriving**: Check your spam folder, verify EmailJS service is connected correctly
- **Template errors**: Make sure template variable names match exactly ({{from_name}}, {{from_email}}, etc.)
- **Service connected to wrong email**: The service can be connected to harmonymwirigi99@gmail.com (this is fine - it's the FROM address). The TO address (harmonymwithalii@gmail.com) should be set in the template settings.

## Important Notes

- The free tier of EmailJS allows 200 emails per month
- For production, make sure to add `.env` to your `.gitignore` file
- Never commit your `.env` file with real credentials to version control

