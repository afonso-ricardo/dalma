D'ALMA MASSAGE SPA - DEPLOYMENT FILES
=====================================

FILES TO UPLOAD (Keep these exact names):
----------------------------------------

1. index.html
   - Main website page with all content
   - Contains hero, services, gallery, and contact sections
   - Content is dynamically loaded from content-config.js

2. styles.css
   - All styling and responsive design
   - Mobile optimization included

3. script.js
   - Interactive features and animations
   - Form validation and smooth scrolling
   - Modal functionality (uses serviceData from content-config.js)

4. content-config.js
   - Central configuration file for all website content
   - Services, space images, gallery images, hero content
   - Easy updates without touching HTML

5. content-loader.js
   - Dynamic content loading script
   - Generates HTML from content-config.js data

UPLOAD INSTRUCTIONS:
-------------------

1. Upload all 5 files to your web server's root directory
2. Make sure file names remain exactly as shown above
3. Create an 'images' folder and upload all your service/space/gallery images
4. Test website by visiting your domain

CUSTOMIZATION NOTES:
-------------------

- Replace logo placeholder with your actual logo:
  In index.html, find: <div class="footer-logo-placeholder"><span>LOGO</span></div>
  Replace with: <img src="your-logo.png" alt="D'Alma Spa Logo" class="actual-logo">

- Update contact information in index.html:
  * Phone number: +351 938 251 868 (appears in navigation and contact section)
  * Address: Rua António Sérgio N. 145 2º Andar, Alverca, Lisboa, Portugal 2615-000
  * Email: Update in contact form if needed

- Update social media links in footer:
  * Find: <a href="#"><i class="fab fa-instagram"></i></a>
  * Replace # with actual URLs

IMAGE FILE STRUCTURE:
-------------------

Create these folders and files:
/images/
├── Services:
│   ├── massagem-modeladora.jpg
│   ├── massagem-ayurvedica.jpg
│   ├── reflexologia.jpg
│   ├── ritual-equilibrio.jpg
│   ├── constelacao-individual.jpg
│   ├── constelacao-grupo.jpg
│   └── pedicure.jpg
├── Space:
│   ├── espaco1.jpg
│   ├── espaco2.jpg
│   ├── espaco3.jpg
│   ├── espaco4.jpg
│   └── espaco5.jpg
└── Gallery:
    ├── galeria-trabalho-1.jpg
    ├── galeria-trabalho-2.jpg
    ├── galeria-trabalho-3.jpg
    ├── galeria-trabalho-4.jpg
    ├── galeria-trabalho-5.jpg
    └── galeria-trabalho-6.jpg

CONTENT MANAGEMENT:
-------------------

- Edit content-config.js to update any text, descriptions, or image paths
- Changes will automatically appear on website after page refresh
- No need to edit HTML files for basic content updates
