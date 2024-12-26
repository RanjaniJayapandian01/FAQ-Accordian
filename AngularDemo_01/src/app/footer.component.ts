import { Component } from "@angular/core";


@Component({
    selector: 'app-footer',
    template:`
    <footer class="footer">
  <div class="footer-content">
    <div class="footer-links">
      <a routerLink="/privacy-policy">Privacy Policy</a>
      <a routerLink="/terms-of-service">Terms of Service</a>
    </div>
    <div class="social-media">
      <a href="#" target="_blank">Facebook</a>
      <a href="#" target="_blank">Instagram</a>
      <a href="#" target="_blank">Twitter</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Plant Shop. All rights reserved.</p>
  </div>
</footer>

    `,
    styles:
    `
    /* footer.component.css */
.footer {
 position: relative; /* Sticky at the bottom */
  color: #1b372a;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 10px;
}

.footer-links, .social-media {
  display: flex;
  gap: 20px;
}

.footer-links a, .social-media a {
  text-decoration: none;
  color: #1b372a;
  font-size: 12px;
  font-weight: bold;
}

.footer-links a:hover, .social-media a:hover {
  color: #1b372a;
}

.footer-bottom p {
  font-size: 10px;
}

    `
})

export class FooterComponent{
    
}