<template>
  <div class="join-container">
    <!-- Hero Section -->
    <div class="join-hero" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
      <div class="join-hero-overlay"></div>
      <div class="join-hero-content">
        <div class="hero-badge" data-aos="fade-down">
          <i class="fa-solid fa-right-to-bracket badge-icon"></i> 
          <span>Join Our Community</span>
        </div>
        <h1 class="join-title" data-aos="fade-up" data-aos-delay="100">Ready to <span class="accent">Start Your Journey?</span></h1>
        <p class="join-subtitle" data-aos="fade-up" data-aos-delay="200">Follow these simple steps to join our FiveM roleplay server and become part of our growing community</p>
        
        <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
          <button class="cta-button primary" data-aos="zoom-in-right" data-aos-delay="400">
            <i class="fa-solid fa-play"></i> Connect to Server
          </button>
          <button class="cta-button outline" data-aos="zoom-in-left" data-aos-delay="450">
            <i class="fa-brands fa-discord"></i> Join Discord
          </button>
        </div>
      </div>
    </div>
    
    <!-- Server Stats Section -->
    <div class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
            <i class="fa-solid fa-users stat-icon"></i>
            <div class="stat-value">{{ serverStats.players }}</div>
            <div class="stat-label">Active Players</div>
          </div>
          
          <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
            <i class="fa-solid fa-car stat-icon"></i>
            <div class="stat-value">{{ serverStats.vehicles }}</div>
            <div class="stat-label">Custom Vehicles</div>
          </div>
          
          <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
            <i class="fa-solid fa-home stat-icon"></i>
            <div class="stat-value">{{ serverStats.properties }}</div>
            <div class="stat-label">Properties</div>
          </div>
          
          <div class="stat-card" data-aos="fade-up" data-aos-delay="400">
            <i class="fa-solid fa-shield-halved stat-icon"></i>
            <div class="stat-value">{{ serverStats.staff }}</div>
            <div class="stat-label">Staff Members</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- How to Join Section -->
    <div class="how-to-join-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">How to <span class="accent">Join Our Server</span></h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Follow these steps to become part of our roleplay community</p>
        
        <div class="steps-grid">
          <div
            v-for="(step, index) in joinSteps"
            :key="step.id"
            class="step-card"
            data-aos="fade-up"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="step-number">{{ step.id }}</div>
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
            <a :href="step.link" class="step-button">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Connection Info Section -->
    <div class="connection-section">
      <div class="container">
        <div class="connection-content">
          <div class="connection-info" data-aos="fade-right">
            <h2 data-aos="fade-up">Server <span class="accent">Connection Details</span></h2>
            <p data-aos="fade-up" data-aos-delay="100">Copy the FiveM link below or search for "9r-Developments" in the FiveM server browser</p>
            
            <div class="server-link" data-aos="fade-up" data-aos-delay="200">
              <code>fivem://connect/9r-dev.com</code>
              <button class="copy-button">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
            
            <div class="requirements" data-aos="fade-up" data-aos-delay="300">
              <h3>Requirements</h3>
              <ul class="req-list">
                <li data-aos="fade-left" data-aos-delay="350"><i class="fa-solid fa-check"></i> Legal copy of GTA V</li>
                <li data-aos="fade-left" data-aos-delay="400"><i class="fa-solid fa-check"></i> FiveM client installed</li>
                <li data-aos="fade-left" data-aos-delay="450"><i class="fa-solid fa-check"></i> Discord account</li>
                <li data-aos="fade-left" data-aos-delay="500"><i class="fa-solid fa-check"></i> Microphone recommended</li>
              </ul>
            </div>
          </div>
          <div class="connection-image" data-aos="fade-left" data-aos-delay="200">
            <img src="../assets/Banner.jpg" alt="Server screenshot">
          </div>
        </div>
      </div>
    </div>
    
    <!-- FAQ Section -->
    <div class="faq-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Frequently <span class="accent">Asked Questions</span></h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Find answers to common questions about joining our server</p>
        
        <div class="faq-list">
          <div 
            v-for="(faq, _index) in faqs" 
            :key="faq.id"
            class="faq-item"
            :class="{ 'expanded': expandedFAQs.includes(faq.id) }"
            @click="toggleFAQ(faq.id)"
          >
            <div class="faq-header">
              <div class="faq-question">{{ faq.question }}</div>
              <div class="faq-icon">
                <i class="fa-solid" :class="expandedFAQs.includes(faq.id) ? 'fa-minus' : 'fa-plus'"></i>
              </div>
            </div>
            <div class="faq-answer" :class="{ 'visible': expandedFAQs.includes(faq.id) }">
              {{ faq.answer }}
            </div>
          </div>
        </div>
        
        <div class="more-questions" data-aos="fade-up" data-aos-delay="500">
          <p>Still have questions? Join our Discord for more assistance</p>
          <button class="cta-button secondary" data-aos="zoom-in" data-aos-delay="600">
            <i class="fa-brands fa-discord"></i> Join Our Discord
          </button>
        </div>
      </div>
    </div>
    
    <!-- 加入社区部分 -->
    <div class="community-section">
      <div class="container">
        <div class="community-content" data-aos="fade-up">
          <h2 data-aos="fade-up">Ready to Begin Your <span class="accent">Roleplay Journey?</span></h2>
          <p data-aos="fade-up" data-aos-delay="100">Join hundreds of players already enjoying our unique FiveM roleplay experience</p>
          <div class="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <button class="cta-button primary" data-aos="zoom-in-right" data-aos-delay="300">
              <i class="fa-solid fa-play"></i> Join Now
            </button>
            <button class="cta-button outline" data-aos="zoom-in-left" data-aos-delay="350">
              <i class="fa-solid fa-book"></i> Read Server Guide
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 引入页脚组件 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import backgroundImage from '../assets/background.jpg';
import Footer from '../components/Footer.vue';
import AOS from 'aos';

const backgroundImageUrl = ref(backgroundImage);
const expandedFAQs = ref<number[]>([]);

// 在组件挂载后初始化AOS
onMounted(() => {
  AOS.refresh();
});

// 服务器统计数据
const serverStats = ref({
  players: '150+',
  vehicles: '200+',
  properties: '100+',
  staff: '10+'
});

// 加入步骤
const joinSteps = ref([
  {
    id: 1,
    title: 'Join Our Discord',
    description: 'Connect with our community and get the latest updates by joining our Discord server.',
    icon: 'fa-brands fa-discord',
    link: '#'
  },
  {
    id: 2,
    title: 'Create Your Character',
    description: 'Follow our character creation guide to set up your roleplay identity on the server.',
    icon: 'fa-solid fa-user-plus',
    link: '#'
  },
  {
    id: 3,
    title: 'Read the Rules',
    description: 'Familiarize yourself with our server rules and guidelines to ensure a positive experience.',
    icon: 'fa-solid fa-book',
    link: '#'
  },
  {
    id: 4,
    title: 'Connect to the Server',
    description: 'Use FiveM client to connect to our server using the connection details provided in Discord.',
    icon: 'fa-solid fa-server',
    link: '#'
  }
]);

// 常见问题
const faqs = ref([
  {
    id: 1,
    question: 'Do I need to own GTA V to play on your FiveM server?',
    answer: 'Yes, you need to own a legitimate copy of Grand Theft Auto V on PC to play on any FiveM server, including ours. FiveM is a modification framework that requires the base game files.'
  },
  {
    id: 2,
    question: 'Is there an application process to join the server?',
    answer: 'Yes, we have a simple application process to ensure quality roleplay on our server. Visit our Discord server and follow the instructions in the #applications channel to get started.'
  },
  {
    id: 3,
    question: 'What kind of roleplay does your server focus on?',
    answer: 'Our server focuses on realistic city roleplay with emphasis on character development, interactions, and storytelling. We offer a variety of both legal and illegal career paths, businesses, and activities.'
  },
  {
    id: 4,
    question: 'Are there custom scripts and vehicles on the server?',
    answer: 'Yes, our server features numerous custom scripts, vehicles, maps, and gameplay mechanics that enhance the roleplay experience beyond vanilla GTA V capabilities.'
  },
  {
    id: 5,
    question: 'How can I report issues or players breaking rules?',
    answer: 'We have an in-game report system accessible via F2, and you can also report issues directly in our Discord server in the #support channel. Our staff team is available to assist with any concerns.'
  }
]);

// 切换FAQ展开状态
function toggleFAQ(id: number) {
  const index = expandedFAQs.value.indexOf(id);
  if (index > -1) {
    expandedFAQs.value.splice(index, 1);
  } else {
    expandedFAQs.value.push(id);
  }
}
</script>

<style scoped>
.join-container {
  min-height: 100vh;
  background-color: #0a0a0a;
  color: white;
  overflow: hidden;
}

/* Hero Section */
.join-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.join-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(10, 10, 10, 0.95));
  z-index: 1;
}

.join-hero-content {
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

.join-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.join-title .accent {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.join-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
}

.cta-button.primary {
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  color: white;
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
}

.cta-button.outline {
  background: transparent;
  border: 2px solid #8A2BE2;
  color: #8A2BE2;
}

.cta-button.secondary {
  background: rgba(30, 30, 30, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

/* Server Stats Section */
.stats-section {
  padding: 3rem 0;
  background: linear-gradient(to bottom, #0a0a0a, #101010);
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: rgba(30, 30, 30, 0.6);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Section Titles */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-title .accent {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 4rem;
}

/* How to Join Section */
.how-to-join-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #101010, #151515);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.step-card {
  background: rgba(25, 25, 25, 0.7);
  border-radius: 16px;
  padding: 3rem 2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
}

.step-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 5rem;
  font-weight: 900;
  opacity: 0.1;
  color: #8A2BE2;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(0, 255, 255, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  border: 2px solid rgba(138, 43, 226, 0.3);
}

.step-icon i {
  font-size: 2.5rem;
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-title {
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
}

.step-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.step-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #8A2BE2;
  font-weight: 600;
  text-decoration: none;
}

/* Connection Section */
.connection-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #151515, #0a0a0a);
}

.connection-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.connection-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.connection-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.server-link {
  background: rgba(20, 20, 20, 0.8);
  border-radius: 50px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  border: 1px solid rgba(138, 43, 226, 0.2);
}

.server-link code {
  font-family: monospace;
  font-size: 1.1rem;
  color: #8A2BE2;
}

.copy-button {
  background: rgba(138, 43, 226, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #8A2BE2;
}

.requirements {
  background: rgba(30, 30, 30, 0.6);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.requirements h3 {
  color: #8A2BE2;
  margin-bottom: 1.5rem;
}

.req-list {
  list-style: none;
  padding: 0;
}

.req-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.req-list li i {
  color: #8A2BE2;
}

.connection-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.connection-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transform: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

.connection-image img:hover {
  box-shadow: 0 12px 25px rgba(138, 43, 226, 0.25);
}

/* FAQ Section */
.faq-section {
  padding: 8rem 0;
  background: #0a0a0a;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(25, 25, 25, 0.7);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.faq-item:hover {
  background: rgba(35, 35, 35, 0.7);
}

.faq-item.expanded {
  background: rgba(30, 30, 30, 0.9);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.faq-header {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question {
  font-weight: 600;
  font-size: 1.1rem;
}

.faq-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(138, 43, 226, 0.2);
  color: #8A2BE2;
}

.faq-answer {
  padding: 0 2rem;
  max-height: 0;
  overflow: hidden;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.25s ease-out;
  opacity: 0;
  transform: translateY(-10px);
}

.faq-answer.visible {
  padding: 0 2rem 2rem;
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

.more-questions {
  text-align: center;
  margin-top: 4rem;
}

.more-questions p {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Community Section */
.community-section {
  padding: 8rem 0;
  background: linear-gradient(to top, rgba(138, 43, 226, 0.1), transparent);
  text-align: center;
}

.community-content {
  max-width: 700px;
  margin: 0 auto;
}

.community-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.community-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .connection-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .connection-image {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .steps-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .join-title {
    font-size: 2.5rem;
  }
  
  .community-content h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .step-icon {
    width: 60px;
    height: 60px;
  }
  
  .step-icon i {
    font-size: 2rem;
  }
}
</style> 