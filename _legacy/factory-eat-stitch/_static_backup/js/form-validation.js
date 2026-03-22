// ============================================
// Factory Eat - Form Validation
// Contact Form Handling
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    if (!form) return;

    const fields = {
        restaurantName: document.getElementById('restaurant-name'),
        city: document.getElementById('city'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        ubereatsLink: document.getElementById('ubereats-link'),
        message: document.getElementById('message')
    };

    const errors = {
        restaurantName: document.getElementById('restaurant-name-error'),
        city: document.getElementById('city-error'),
        email: document.getElementById('email-error'),
        phone: document.getElementById('phone-error'),
        ubereatsLink: document.getElementById('ubereats-link-error')
    };

    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    // Real-time validation
    fields.restaurantName.addEventListener('blur', () => validateField('restaurantName'));
    fields.city.addEventListener('blur', () => validateField('city'));
    fields.email.addEventListener('blur', () => validateField('email'));
    fields.phone.addEventListener('blur', () => validateField('phone'));
    fields.ubereatsLink.addEventListener('blur', () => validateField('ubereatsLink'));

    // Clear error on input
    Object.keys(fields).forEach(key => {
        if (fields[key]) {
            fields[key].addEventListener('input', () => {
                fields[key].classList.remove('error');
                if (errors[key]) {
                    errors[key].classList.remove('show');
                }
            });
        }
    });

    // Validate individual field
    function validateField(fieldName) {
        const field = fields[fieldName];
        const error = errors[fieldName];
        let isValid = true;

        switch (fieldName) {
            case 'restaurantName':
            case 'city':
                if (!field.value.trim()) {
                    isValid = false;
                }
                break;

            case 'email':
                if (!field.value.trim() || !FactoryEat.isValidEmail(field.value)) {
                    isValid = false;
                }
                break;

            case 'phone':
                // Optional field, but validate format if provided
                if (field.value.trim() && field.value.length < 10) {
                    isValid = false;
                }
                break;

            case 'ubereatsLink':
                // Optional field, but validate URL if provided
                if (field.value.trim() && !FactoryEat.isValidUrl(field.value)) {
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            field.classList.add('error');
            if (error) error.classList.add('show');
        } else {
            field.classList.remove('error');
            if (error) error.classList.remove('show');
        }

        return isValid;
    }

    // Validate all required fields
    function validateForm() {
        let isValid = true;

        // Required fields
        ['restaurantName', 'city', 'email'].forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });

        // Optional fields with format validation
        if (fields.phone.value.trim()) {
            if (!validateField('phone')) isValid = false;
        }

        if (fields.ubereatsLink.value.trim()) {
            if (!validateField('ubereatsLink')) isValid = false;
        }

        return isValid;
    }

    // Form submission
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Hide previous messages
        successMessage.classList.remove('show');
        errorMessage.classList.remove('show');

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';

        // Prepare form data
        const formData = {
            restaurantName: fields.restaurantName.value.trim(),
            city: fields.city.value.trim(),
            email: fields.email.value.trim(),
            phone: fields.phone.value.trim(),
            ubereatsLink: fields.ubereatsLink.value.trim(),
            message: fields.message.value.trim(),
            timestamp: new Date().toISOString()
        };

        try {
            // EmailJS Integration - CONFIGURED
            await emailjs.send(
                'service_c5ite9e',      // Service ID
                'template_7bx6mjj',     // Template ID
                {
                    restaurant_name: formData.restaurantName,
                    city: formData.city,
                    email: formData.email,
                    phone: formData.phone,
                    ubereats_link: formData.ubereatsLink,
                    message: formData.message
                },
                'eY4L2WOlxyF-NUakn'     // Public Key
            );

            // Show success message
            successMessage.classList.add('show');

            // Reset form
            form.reset();

            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'engagement',
                    'event_label': 'contact_form',
                    'value': 1
                });
            }

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            console.error('Form submission error:', error);
            errorMessage.classList.add('show');
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer ma demande';
        }
    });

    // Phone number formatting
    fields.phone.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('33')) {
            value = '+' + value;
        } else if (value.startsWith('0')) {
            value = '+33' + value.substring(1);
        }
        // Don't auto-format to avoid disrupting user input
    });
});
