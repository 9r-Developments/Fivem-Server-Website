<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // 返回顶部按钮
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // 滚动时控制按钮显示/隐藏
    const toggleBackToTopButton = () => {
      if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };
    
    window.addEventListener('scroll', toggleBackToTopButton);
    toggleBackToTopButton(); // 初始检查
  }
});
</script>

<template>
  <!-- 页脚 -->
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="footer-pattern"></div>
    
    <div class="container">
      <div class="footer-divider"></div>
      
      <div class="footer-content">
        <!-- Logo and brand info -->
        <div class="footer-brand" data-aos="fade-up" data-aos-delay="100">
          <h2 class="footer-logo">9r<span>Developments</span></h2>
          <p class="footer-tagline">Premium FiveM Roleplay Server</p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Discord">
              <i class="fa-brands fa-discord"></i>
              <span class="social-hover">Discord</span>
            </a>
            <a href="#" class="social-link" aria-label="TikTok">
              <i class="fa-brands fa-tiktok"></i>
              <span class="social-hover">TikTok</span>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
              <span class="social-hover">Instagram</span>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <i class="fa-brands fa-youtube"></i>
              <span class="social-hover">YouTube</span>
            </a>
          </div>
        </div>
        
        <!-- Navigation links -->
        <div class="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h3 class="footer-title">Navigation</h3>
          <ul class="footer-nav">
            <li><a href="/"><span class="nav-dot"></span>Home</a></li>
            <li><a href="/features"><span class="nav-dot"></span>Server Features</a></li>
            <li><a href="/join"><span class="nav-dot"></span>How to Join</a></li>
            <li><a href="/staff"><span class="nav-dot"></span>Staff Team</a></li>
            <li><a href="/rules"><span class="nav-dot"></span>Rules</a></li>
          </ul>
        </div>
        
        <!-- 服务器特性 -->
        <div class="footer-services" data-aos="fade-up" data-aos-delay="300">
          <h3 class="footer-title">Server Features</h3>
          <ul class="footer-nav">
            <li><a href="#"><span class="nav-dot"></span>Roleplay Jobs</a></li>
            <li><a href="#"><span class="nav-dot"></span>Custom Cars</a></li>
            <li><a href="#"><span class="nav-dot"></span>Economy System</a></li>
            <li><a href="#"><span class="nav-dot"></span>Player Housing</a></li>
          </ul>
        </div>
        
        <!-- Contact info -->
        <div class="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h3 class="footer-title">Contact Us</h3>
          <ul class="contact-list">
            <li>
              <div class="contact-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="contact-details">
                <span>Email Us</span>
                <a href="mailto:contact@9r-developments.com">contact@9r-developments.com</a>
              </div>
            </li>
            <li>
              <div class="contact-icon">
                <i class="fa-brands fa-discord"></i>
              </div>
              <div class="contact-details">
                <span>Discord Server</span>
                <a href="#">Join our community</a>
              </div>
            </li>
            <li>
              <div class="contact-icon">
                <i class="fa-solid fa-headset"></i>
              </div>
              <div class="contact-details">
                <span>Support</span>
                <p>24/7 Customer Support</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="footer-bottom">
        <p class="copyright">© 2024 <span>9r-Developments.</span> All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="/rules">Server Rules</a>
          <span class="legal-separator">•</span>
          <a href="/join">How to Join</a>
        </div>
      </div>
      
      <button class="back-to-top">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  </footer>
</template>

<style scoped>
/* 页脚样式 */
.footer {
  background-color: #070707;
  padding: 5rem 1.5rem 2rem;
  color: rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.15), transparent 70%);
  top: -250px;
  left: -100px;
  z-index: 1;
  opacity: 0.7;
  pointer-events: none;
}

.footer-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 1;
  pointer-events: none;
  opacity: 0.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* 移除订阅区域相关样式 */

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 2rem 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.footer-logo span {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-link {
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  border-radius: 50%;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(0);
  z-index: -1;
}

.social-link:hover {
  transform: translateY(-4px);
  color: #fff;
  border-color: transparent;
}

.social-link:hover::before {
  transform: scale(1);
}

.social-hover {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 600;
  background: #8A2BE2;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  bottom: -30px;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.social-link:hover .social-hover {
  opacity: 1;
  bottom: -25px;
}

.footer-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, transparent);
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav li {
  margin-bottom: 0.8rem;
}

.footer-nav a, .contact-list a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.95rem;
  position: relative;
  display: inline-flex;
  align-items: center;
}

.nav-dot {
  width: 5px;
  height: 5px;
  background: #8A2BE2;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.footer-nav a:hover .nav-dot {
  transform: scale(1);
}

.footer-nav a:hover, .contact-list a:hover {
  color: #8A2BE2;
  transform: translateX(5px);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 36px;
  height: 36px;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  border: 1px solid rgba(138, 43, 226, 0.2);
}

.contact-icon i {
  color: #8A2BE2;
  font-size: 1rem;
}

.contact-list li:hover .contact-icon {
  background: #8A2BE2;
  transform: rotateY(180deg);
}

.contact-list li:hover .contact-icon i {
  color: white;
}

.contact-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.contact-details span {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.2rem;
}

.contact-details a, .contact-details p {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-bottom {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.copyright span {
  color: #8A2BE2;
}

.powered-by {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: inline-block;
}

.dev-name {
  color: #8A2BE2;
  font-weight: 600;
}

.footer-legal {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.legal-separator {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: #8A2BE2;
}

.back-to-top {
  position: absolute;
  right: 30px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #8A2BE2, #4B0082);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 100;
  transform: translateY(20px);
  pointer-events: none;
}

.back-to-top.visible {
  opacity: 0.8;
  transform: translateY(0);
  pointer-events: auto;
}

.back-to-top:hover {
  opacity: 1;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  /* 移除媒体查询中的订阅区域样式 */

  .footer-divider {
    margin: 1.5rem 0;
  }
}
</style> 