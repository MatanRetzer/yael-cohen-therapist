Landing Page for “גוף רכות לב - יעל כהן”
King Matan, here’s a concise README for your project:

Overview
This repository contains a single-page landing site in Hebrew for “גוף רכות לב - יעל כהן.” It showcases emotional bodywork therapy treatments, workshops, and testimonials. The page is fully responsive and uses CSS, HTML, and minimal JavaScript (for the “read more” toggle feature).

Features
Hebrew RTL Layout: The page uses dir="rtl" for proper right-to-left rendering.
Responsive Design: Flexible grid layouts and media queries ensure the page looks good on all devices.
Image-Based Header: A full-height hero section with an overlay for the header and introduction.
Treatments Section: Three treatment cards with a “read more” toggle mechanism (toggleContent() function).
Workshop Section: Additional info about the workshop, also with toggle logic.
Testimonials: Grid of testimonials with images and text.
About Section: An introduction to יעל כהן’s background, credentials, and approach.
Action Buttons: Links for contacting via phone, WhatsApp, and a Google form.
File Structure
index.html
The main landing page HTML. Contains embedded <style> blocks, a small <script> for toggling hidden content, and references to external resources.

styles.css
Optional external stylesheet (already linked in index.html). If you’re keeping everything in one file, you can remove this link or populate styles.css with additional rules.

Images
Make sure the following images are placed in the same folder as index.html (or update paths if you change the folder structure):

ראשי אופציה 1.jpg
עוצמת_הרכות.jpg
בעשט_2.jpg
תנועות_עיניים_2.jpg
תמונה_סדנא_2.jpg
עוד_תמונות_2.jpg
עוד_תמונות_3.jpg
עוד_תמונות_4.jpg
yael_profile.jpg
Getting Started
Clone or Download this repository to your local machine.
Place Images: Ensure all images listed above are in the correct directory or adjust their paths in index.html.
Open index.html in your web browser to preview the page locally.
Deployment (GitHub Pages)
Push the repository to GitHub.
In your repository settings, scroll to Pages (or “Pages” in the left menu).
Under “Branch,” select main (or master if that’s your default) and click Save.
GitHub Pages will generate a public URL for your site.
Note: You’ll need to ensure the images work from that hosted environment by checking or adjusting the paths if needed.
Customization
Colors & Fonts: Update variables under :root in the embedded CSS.
Read More Buttons: Modify the toggleContent() function in the script at the bottom if you need to change text or animation.
Image Paths: Change or rearrange the src attributes if you store images in subdirectories.
Contact
For any questions about the code or deployment, feel free to open an issue or message King Matan.

Enjoy your new landing page!
