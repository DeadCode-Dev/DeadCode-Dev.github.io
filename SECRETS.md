# Secrets Configuration Guide

This document provides detailed instructions for setting up the required secrets for the DeadCode Dev portfolio website.

## Required Secrets

The application requires the following environment variables for the contact form functionality:

### 1. CONTACT_EMAIL
- **Description**: The email address used to send contact form submissions
- **Type**: String
- **Example**: `yourname@zohomail.com`
- **Setup**: Use your Zoho email address

### 2. CONTACT_PASS
- **Description**: App password for the email account (NOT your regular password)
- **Type**: String
- **Example**: `abcd1234efgh5678`
- **Setup**: Generate an app password from your Zoho account

### 3. CONTACT_RECEIVER
- **Description**: Email address that will receive the contact form submissions
- **Type**: String
- **Example**: `contact@yourdomain.com`
- **Setup**: Can be the same as CONTACT_EMAIL or a different email address

## Local Development Setup

1. Copy the environment template:
```bash
cp env.example .env.local
```

2. Edit `.env.local` with your actual values:
```bash
CONTACT_EMAIL=your-zoho-email@zohomail.com
CONTACT_PASS=your-app-password-here
CONTACT_RECEIVER=where-to-receive@emails.com
```

## GitHub Secrets Configuration

For GitHub Pages deployment, you need to set up repository secrets:

### Step 1: Access Repository Settings
1. Go to your GitHub repository
2. Click on "Settings" tab
3. Navigate to "Secrets and variables" → "Actions"

### Step 2: Add Repository Secrets
Click "New repository secret" for each of the following:

1. **Name**: `CONTACT_EMAIL`
   - **Value**: Your Zoho email address

2. **Name**: `CONTACT_PASS`
   - **Value**: Your Zoho app password

3. **Name**: `CONTACT_RECEIVER`
   - **Value**: Email address to receive contact forms

## Zoho Mail App Password Setup

Since the application uses Zoho SMTP, you need to create an app password:

### Step 1: Login to Zoho Mail
1. Go to [Zoho Mail](https://mail.zoho.com)
2. Sign in with your credentials

### Step 2: Access Security Settings
1. Click on your profile/avatar in the top-right corner
2. Go to "Settings"
3. Navigate to "Security" section

### Step 3: Generate App Password
1. Find "App Passwords" section
2. Click "Generate New Password"
3. Enter a name for the application (e.g., "Portfolio Website")
4. Copy the generated password
5. Use this password as your `CONTACT_PASS` value

### Important Notes:
- **Never use your regular Zoho password** in the application
- App passwords are more secure and can be revoked if needed
- Keep your app password secret and don't share it

## SMTP Configuration Details

The application is configured to use Zoho's SMTP server with these settings:
- **Host**: smtp.zoho.com
- **Port**: 465
- **Security**: SSL/TLS
- **Authentication**: Required

## Troubleshooting

### Common Issues:

1. **Authentication Failed**
   - Make sure you're using an app password, not your regular password
   - Verify the email address is correct
   - Check that 2FA is enabled on your Zoho account

2. **Connection Timeout**
   - Verify your internet connection
   - Check if your hosting provider blocks SMTP ports
   - Ensure Zoho SMTP is accessible from your deployment environment

3. **Emails Not Received**
   - Check spam/junk folders
   - Verify the CONTACT_RECEIVER email address
   - Test with a different receiver email

### Testing Locally
You can test the email functionality locally by:
1. Setting up your `.env.local` file
2. Running `npm run dev`
3. Filling out the contact form on `localhost:3000`
4. Checking if the email is received

## Security Best Practices

1. **Never commit secrets to version control**
2. **Use environment variables for all sensitive data**
3. **Regularly rotate app passwords**
4. **Use different credentials for development and production**
5. **Monitor email sending logs for suspicious activity**

## Support

If you encounter issues with email configuration:
1. Check Zoho Mail documentation
2. Verify your account settings
3. Test with a simple SMTP client first
4. Review application logs for error messages