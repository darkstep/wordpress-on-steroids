const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (your HTML page)
app.use(express.static(path.join(__dirname)));

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail', // 'gmail', 'outlook', 'yahoo', etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Alternative: Use SMTP directly (uncomment if not using a service)
/*
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
*/

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, website, upgrade, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                error: 'Name, email, and message are required' 
            });
        }

        // Validate upgrade selection (can be array or single value)
        const upgrades = Array.isArray(upgrade) ? upgrade : (upgrade ? [upgrade] : []);
        if (upgrades.length === 0) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please select at least one service or upgrade' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid email format' 
            });
        }

        // Format upgrades for display
        const upgradesList = upgrades.map(u => `• ${u}`).join('<br>');
        const upgradesText = upgrades.join(', ');
        const subjectUpgrade = upgrades.length === 1 ? upgrades[0] : `${upgrades.length} Services`;

        // Email content
        const mailOptions = {
            from: `"WordPress on Steroids Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission: ${subjectUpgrade}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${website ? `<p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>` : ''}
                        <p><strong>Interested In (${upgrades.length}):</strong></p>
                        <div style="color: #8b5cf6; font-weight: bold; margin-left: 10px; margin-top: 5px;">
                            ${upgradesList}
                        </div>
                    </div>
                    <div style="background: #ffffff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${website ? `Website: ${website}` : ''}
Interested In (${upgrades.length}):
${upgrades.map(u => `  • ${u}`).join('\n')}

Message:
${message}
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ 
            success: true, 
            message: 'Your message has been sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send message. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
// Listen on 0.0.0.0 to accept connections from any network interface (important for hosting)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    console.log(`📧 Email service: ${process.env.EMAIL_SERVICE || 'gmail'}`);
    console.log(`📬 Receiving emails at: ${process.env.RECEIVER_EMAIL || process.env.EMAIL_USER}`);
});
