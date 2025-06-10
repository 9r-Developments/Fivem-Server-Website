<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import backgroundImage from '../assets/background.jpg';
import bannerImage from '../assets/Banner.jpg';
import Footer from '../components/Footer.vue';
import AOS from 'aos';

const backgroundImageUrl = ref(backgroundImage);
const isLoaded = ref(true); // 设为true，直接显示内容
const selectedCategory = ref('all');
const showParticles = ref(true);

onMounted(() => {
  // 重新初始化AOS以确保动画正常工作
  AOS.refresh();
});

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Features', icon: 'fa-solid fa-star' },
  { id: 'jobs', name: 'Jobs & Economy', icon: 'fa-solid fa-briefcase' },
  { id: 'vehicles', name: 'Custom Vehicles', icon: 'fa-solid fa-car' },
  { id: 'housing', name: 'Housing System', icon: 'fa-solid fa-home' },
  { id: 'gameplay', name: 'Gameplay Features', icon: 'fa-solid fa-gamepad' }
];

// Features data
const products = ref([
  {
    id: 1,
    title: 'Advanced Job System',
    description: 'Multiple legal and illegal career paths with progression systems, unique missions and custom gameplay mechanics.',
    category: 'jobs',
    image: bannerImage,
    icon: 'fa-solid fa-briefcase'
  },
  {
    id: 2,
    title: 'Custom Vehicle Collection',
    description: 'Over 200 custom vehicles including cars, motorcycles, boats and aircraft with realistic handling and damage models.',
    category: 'vehicles',
    image: bannerImage,
    icon: 'fa-solid fa-car-side'
  },
  {
    id: 3,
    title: 'Property Ownership',
    description: 'Buy and customize apartments, houses, businesses and warehouses across the map with interior decoration options.',
    category: 'housing',
    image: bannerImage,
    icon: 'fa-solid fa-building'
  },
  {
    id: 4,
    title: 'Advanced Phone System',
    description: 'Fully functional smartphone with apps, messaging, banking, job listings, social media and more.',
    category: 'gameplay',
    image: bannerImage,
    icon: 'fa-solid fa-mobile-screen'
  },
  {
    id: 5,
    title: 'Dynamic Economy',
    description: 'Player-driven economy with stock market, business ownership, item crafting, and trading systems.',
    category: 'jobs',
    image: bannerImage,
    icon: 'fa-solid fa-chart-line'
  },
  {
    id: 6,
    title: 'Custom Car Dealerships',
    description: 'Multiple dealerships across the city offering different vehicle brands with financing options and customization.',
    category: 'vehicles',
    image: bannerImage,
    icon: 'fa-solid fa-store'
  }
]);

// Filter products based on selected category
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value;
  }
  return products.value.filter(product => product.category === selectedCategory.value);
});
</script>

<template>
  <div class="feature-container">
    <!-- 粒子背景 -->
    <div class="particles-container" v-if="showParticles">
      <div class="particle" v-for="i in 40" :key="i"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="feature-hero" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
      <div class="feature-hero-overlay"></div>
      <div class="feature-hero-content" :class="{ 'animate-in': isLoaded }">
        <div class="hero-badge" data-aos="fade-down">
          <i class="fa-solid fa-server badge-icon"></i> 
          <span>Server Features</span>
        </div>
        <h1 class="feature-title" data-aos="fade-up" data-aos-delay="100">Premium <span class="accent">Roleplay Features</span></h1>
        <p class="feature-subtitle" data-aos="fade-up" data-aos-delay="200">Discover the unique features that make our FiveM roleplay server stand out from the rest</p>
        
        <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="300">
          <span>Explore Features</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
    
    <!-- Filters Section -->
    <div class="filters-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Browse Our <span class="accent">Server Features</span></h2>
        <div class="filter-buttons" data-aos="fade-up" data-aos-delay="100">
          <button 
            v-for="(category, index) in categories" 
            :key="category.id" 
            @click="selectedCategory = category.id"
            :class="{ 'active': selectedCategory === category.id }"
            class="filter-button"
            :data-aos="'fade-up'" 
            :data-aos-delay="100 + (index * 50)"
          >
            <i :class="category.icon"></i>
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Features Grid Section -->
    <div class="features-section">
      <div class="container">
        <div class="features-grid">
          <div 
            v-for="(product, index) in filteredProducts" 
            :key="product.id" 
            class="product-card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="card-highlight"></div>
            <div class="product-image">
              <img :src="product.image" :alt="product.title">
            </div>
            <div class="card-content">
              <div class="feature-icon">
                <i :class="product.icon"></i>
              </div>
              <div class="product-info">
                <div class="product-category">{{ categories.find(c => c.id === product.category)?.name }}</div>
                <h3>{{ product.title }}</h3>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-footer">
                  <button class="cta-button primary">
                    <i class="fa-solid fa-info-circle"></i> Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 特色功能展示 -->
    <div class="showcase-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Experience Our <span class="accent">Premium Features</span></h2>
        <div class="showcase-content">
          <div class="showcase-image" data-aos="fade-right">
            <img src="../assets/Banner.jpg" alt="Feature showcase">
            <div class="image-overlay">
              <div class="play-button">
                <i class="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
          <div class="showcase-info" data-aos="fade-left" data-aos-delay="100">
            <h3>Immersive Roleplay Experience</h3>
            <p>Our server is designed to provide the most immersive roleplay experience possible, with attention to every detail and a focus on player engagement and community building.</p>
            <ul class="feature-list">
              <li data-aos="fade-left" data-aos-delay="150"><i class="fa-solid fa-check"></i> Custom scripts and resources</li>
              <li data-aos="fade-left" data-aos-delay="200"><i class="fa-solid fa-check"></i> Active admin and support team</li>
              <li data-aos="fade-left" data-aos-delay="250"><i class="fa-solid fa-check"></i> Regular events and activities</li>
              <li data-aos="fade-left" data-aos-delay="300"><i class="fa-solid fa-check"></i> Constant updates and improvements</li>
            </ul>
            <button class="cta-button secondary" data-aos="zoom-in" data-aos-delay="350">
              <i class="fa-solid fa-play"></i> Watch Server Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 加入社区部分 -->
    <div class="join-section">
      <div class="container">
        <div class="join-content" data-aos="fade-up">
          <h2 data-aos="fade-up">Ready to <span class="accent">Join Our Server?</span></h2>
          <p data-aos="fade-up" data-aos-delay="100">Experience all these amazing features and become part of our growing community today!</p>
          <div class="join-buttons" data-aos="fade-up" data-aos-delay="200">
            <button class="cta-button primary" data-aos="zoom-in-right" data-aos-delay="250">
              <i class="fa-solid fa-play"></i> Join Server Now
            </button>
            <button class="cta-button outline" data-aos="zoom-in-left" data-aos-delay="300">
              <i class="fa-brands fa-discord"></i> Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 引入页脚组件 -->
    <Footer />
  </div>
</template>

<style scoped>
/* 容器样式 */
.feature-container {
  min-height: 100vh;
  background-color: #0a0a0a;
  color: white;
  position: relative;
  overflow: hidden;
}

/* 粒子背景 */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.8) 0%, rgba(138, 43, 226, 0) 70%);
  border-radius: 50%;
  opacity: 0.2;
}

.particle:nth-child(odd) {
  background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0) 70%);
}

/* 为每个粒子设置不同的大小和位置 */
.particle:nth-child(1) { width: 80px; height: 80px; top: 10%; left: 10%; }
.particle:nth-child(2) { width: 60px; height: 60px; top: 20%; left: 30%; }
.particle:nth-child(3) { width: 100px; height: 100px; top: 40%; left: 5%; }
.particle:nth-child(4) { width: 50px; height: 50px; top: 60%; left: 40%; }
.particle:nth-child(5) { width: 70px; height: 70px; top: 70%; left: 80%; }
.particle:nth-child(6) { width: 85px; height: 85px; top: 30%; left: 70%; }
.particle:nth-child(7) { width: 55px; height: 55px; top: 90%; left: 20%; }
.particle:nth-child(8) { width: 75px; height: 75px; top: 5%; left: 60%; }

/* Hero Section */
.feature-hero {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.feature-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(10, 10, 10, 0.95));
  z-index: 1;
}

.feature-hero-content {
  max-width: 900px;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
  padding-top: 120px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(138, 43, 226, 0.15);
  color: #8A2BE2;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  margin-bottom: 2rem;
  border: 1px solid rgba(138, 43, 226, 0.3);
  box-shadow: 0 4px 20px rgba(138, 43, 226, 0.2);
}

.badge-icon {
  font-size: 1.1rem;
}

.feature-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.feature-title .accent {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* 滚动指示器 */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  margin-top: 2rem;
  cursor: pointer;
}

.scroll-indicator i {
  font-size: 1.2rem;
}

/* Section Title Styles */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
}

.section-title .accent {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

/* Filters Section */
.filters-section {
  padding: 6rem 0 2rem;
  position: relative;
  z-index: 10;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-button {
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.filter-button i {
  font-size: 0.9rem;
}

.filter-button:hover {
  background: rgba(40, 40, 40, 0.9);
  color: white;
}

.filter-button.active {
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  border: 1px solid #8A2BE2;
  color: white;
  box-shadow: 0 8px 20px rgba(138, 43, 226, 0.3);
}

/* Features Grid Section */
.features-section {
  padding: 3rem 0 6rem;
  position: relative;
  z-index: 10;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.product-card {
  background: rgba(25, 25, 25, 0.8);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  height: 100%;
}

.card-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 70%);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}

.product-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 8px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: all 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8A2BE2, #00FFFF);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
}

.feature-icon i {
  font-size: 1.5rem;
  color: white;
}

.product-info {
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
}

.product-category {
  font-size: 0.85rem;
  color: #8A2BE2;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-info h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: white;
  font-weight: 700;
}

.product-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.product-footer {
  margin-top: auto;
}

/* CTA Buttons */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.cta-button.primary {
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  color: white;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
}

.cta-button.secondary {
  background: rgba(30, 30, 30, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-button.outline {
  background: transparent;
  border: 2px solid #8A2BE2;
  color: #8A2BE2;
}

/* Showcase Section */
.showcase-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #0a0a0a, #151515);
}

.showcase-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.showcase-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.showcase-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.4s ease;
  border-radius: 8px;
  transform: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.showcase-image:hover img {
  box-shadow: 0 12px 25px rgba(138, 43, 226, 0.25);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.showcase-image:hover .image-overlay {
  opacity: 1;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(138, 43, 226, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.play-button i {
  font-size: 2rem;
  color: white;
  margin-left: 5px; /* 轻微调整播放按钮位置 */
}

.showcase-info h3 {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: white;
}

.showcase-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.feature-list li i {
  color: #8A2BE2;
}

/* Join Section */
.join-section {
  padding: 8rem 0;
  background: linear-gradient(to top, rgba(138, 43, 226, 0.1), transparent);
}

.join-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.join-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.join-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.join-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .showcase-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .showcase-image {
    margin: 0 auto;
    max-width: 600px;
  }
  
  .join-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .feature-title {
    font-size: 2.5rem;
  }
  
  .feature-subtitle {
    font-size: 1rem;
  }
  
  .filter-buttons {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }
  
  .filter-button {
    white-space: nowrap;
  }
  
  .join-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .filter-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>