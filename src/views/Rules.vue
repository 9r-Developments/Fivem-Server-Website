<template>
  <div class="rules-page">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-badge" data-aos="fade-down"><i class="fa-solid fa-scale-balanced"></i> Guidelines</div>
        <h1 data-aos="fade-up" data-aos-delay="100">Server <span class="accent">Rules</span></h1>
        <p class="subtitle" data-aos="fade-up" data-aos-delay="200">Please follow these rules to ensure a positive experience for everyone on our server</p>
      </div>
      <div class="hero-decoration">
        <div class="circle circle-1" data-aos="zoom-in" data-aos-delay="300"></div>
        <div class="circle circle-2" data-aos="zoom-in" data-aos-delay="400"></div>
      </div>
    </div>
    
    <div class="container">
      <!-- 导航栏 -->
      <div class="rules-nav" data-aos="fade-up">
        <button 
          v-for="(section, index) in ruleSections" 
          :key="index"
          @click="scrollToSection(section.id)"
          class="nav-button"
          data-aos="fade-up"
          :data-aos-delay="50 * index"
        >
          <i :class="section.icon"></i>
          {{ section.title }}
        </button>
      </div>
      
      <div class="rules-content">
        <div 
          v-for="(section, sectionIndex) in ruleSections" 
          :key="sectionIndex" 
          class="rules-section" 
          :id="section.id"
          data-aos="fade-up"
          :data-aos-delay="100 * sectionIndex"
        >
          <div class="section-header" data-aos="fade-right">
            <div class="section-icon">
              <i :class="section.icon"></i>
            </div>
            <h2>{{ section.title }}</h2>
          </div>
          
          <div class="rules-list-container">
            <div 
              v-for="(rule, ruleIndex) in section.rules" 
              :key="ruleIndex" 
              class="rule-card"
              :class="{'important': rule.important}"
              :data-index="sectionIndex * 10 + ruleIndex + 1"
              data-aos="fade-up"
              :data-aos-delay="100 + (ruleIndex * 50)"
            >
              <div class="rule-header">
                <div class="rule-number">{{ sectionIndex * 10 + ruleIndex + 1 }}</div>
                <h3>{{ rule.title }}</h3>
              </div>
              <div class="rule-body">
                <p>{{ rule.description }}</p>
                <div v-if="rule.penalty" class="rule-penalty">
                  <span class="penalty-label">Penalty:</span> {{ rule.penalty }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="rules-reminder" data-aos="fade-up" data-aos-delay="300">
          <div class="reminder-icon">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div class="reminder-content">
            <h3>Remember</h3>
            <p>By joining our server, you agree to follow all rules. Failure to comply may result in warnings, temporary bans, or permanent removal from the server. Staff decisions are final, but you may appeal through our Discord.</p>
            <a href="#" class="discord-button" data-aos="zoom-in" data-aos-delay="400">
              <i class="fa-brands fa-discord"></i> Join our Discord
            </a>
          </div>
        </div>
      </div>
      
      <div class="rules-updates" data-aos="fade-up" data-aos-delay="200">
        <h3 data-aos="fade-right"><i class="fa-solid fa-clock-rotate-left"></i> Recent Updates</h3>
        <div class="update-list">
          <div class="update-item" data-aos="fade-left" data-aos-delay="250">
            <div class="update-date">June 10, 2025</div>
            <div class="update-content">
              <h4>Added Vehicle Rules</h4>
              <p>New rules about vehicle usage and realistic driving have been added.</p>
            </div>
          </div>
          <div class="update-item" data-aos="fade-left" data-aos-delay="300">
            <div class="update-date">May 22, 2025</div>
            <div class="update-content">
              <h4>Updated Roleplay Guidelines</h4>
              <p>Clarified expectations for in-character behavior and value of life rules.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 悬浮按钮 -->
    <div class="floating-button" @click="scrollToTop" :class="{'visible': showScrollTop}">
      <i class="fa-solid fa-arrow-up"></i>
    </div>
    
    <!-- 引入页脚组件 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';

// 返回顶部按钮状态
const showScrollTop = ref(false);

// AOS初始化
onMounted(() => {
  AOS.refresh();
  
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // 移除事件监听
  window.removeEventListener('scroll', handleScroll);
});

// 处理滚动事件
function handleScroll() {
  showScrollTop.value = window.scrollY > 300;
}

// 规则部分数据
const ruleSections = [
  {
    id: 'general',
    title: 'General Rules',
    icon: 'fa-solid fa-users',
    rules: [
      {
        title: 'Respect All Players',
        description: 'Treat all players with respect. Harassment, discrimination, hate speech, or bullying of any kind will not be tolerated.',
        penalty: 'Warning to permanent ban, depending on severity',
        important: true
      },
      {
        title: 'Stay In Character',
        description: 'Maintain roleplay at all times. Out-of-character (OOC) chat should be kept to a minimum and only used when necessary.',
        penalty: 'Verbal warning to temporary ban'
      },
      {
        title: 'No Metagaming',
        description: 'Do not use information your character wouldn\'t know in-game. This includes information from Discord, streams, or other external sources.',
        penalty: 'Temporary ban (1-7 days)'
      },
      {
        title: 'No Powergaming',
        description: 'Don\'t force scenarios on other players. Allow others to react and respond to your actions naturally.',
        penalty: 'Warning to temporary ban'
      },
      {
        title: 'Value Your Life',
        description: 'Act as you would in real life when faced with dangerous situations. Your character should fear death and injury.',
        penalty: 'Warning to temporary ban'
      }
    ]
  },
  {
    id: 'gameplay',
    title: 'Gameplay Rules',
    icon: 'fa-solid fa-gamepad',
    rules: [
      {
        title: 'No Exploiting',
        description: 'Using bugs, glitches, or exploits to gain advantages is strictly prohibited.',
        penalty: 'Immediate permanent ban',
        important: true
      },
      {
        title: 'Realistic Driving',
        description: 'Drive realistically and follow traffic laws when not in emergency situations. No unnecessary ramming or vehicle abuse.',
        penalty: 'Warning to temporary ban'
      },
      {
        title: 'Criminal Activities',
        description: 'All criminal activities must have proper roleplay behind them. Random killings or robberies without roleplay context are not allowed.',
        penalty: 'Temporary to permanent ban'
      }
    ]
  },
  {
    id: 'administrative',
    title: 'Administrative',
    icon: 'fa-solid fa-shield',
    rules: [
      {
        title: 'Staff Decisions',
        description: 'Staff decisions are final. If you disagree with a decision, you may appeal through the proper channels on our Discord.',
        penalty: 'Not applicable'
      },
      {
        title: 'Rule Updates',
        description: 'Rules may be updated at any time. It\'s your responsibility to stay informed about current server rules.',
        penalty: 'Not applicable'
      }
    ]
  }
];

// 滚动到指定区域
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -100; // 考虑顶部导航栏的高度
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// 返回顶部
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<style scoped>
.rules-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #e0e0e0;
  position: relative;
}

/* 容器 */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 强调色 */
.accent {
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Section */
.hero-section {
  height: 40vh;
  min-height: 300px;
  max-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 120px 24px 60px;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 1));
}

.hero-content {
  text-align: center;
  z-index: 10;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(138, 43, 226, 0.15);
  color: #8A2BE2;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  margin-bottom: 2rem;
  border: 1px solid rgba(138, 43, 226, 0.3);
  box-shadow: 0 4px 20px rgba(138, 43, 226, 0.2);
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
}

.subtitle {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
}

.circle-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #8A2BE2 0%, transparent 70%);
  top: -150px;
  left: -100px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00FFFF 0%, transparent 70%);
  bottom: -100px;
  right: -50px;
}

/* 规则导航 */
.rules-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 50px 0 40px;
  justify-content: center;
  position: sticky;
  top: 20px;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.8);
  padding: 15px 20px;
  border-radius: 100px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.nav-button {
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-button:hover {
  background: rgba(138, 43, 226, 0.2);
  border-color: rgba(138, 43, 226, 0.3);
  color: white;
}

.nav-button i {
  font-size: 0.9rem;
}

/* 规则内容 */
.rules-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 80px;
}

/* 规则部分 */
.rules-section {
  position: relative;
  scroll-margin-top: 150px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.section-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8A2BE2, #00FFFF);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.2);
}

.section-icon i {
  font-size: 1.8rem;
  color: white;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(90deg, #8A2BE2, #00FFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 规则列表 */
.rules-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

/* 规则卡片 */
.rule-card {
  background: rgba(25, 25, 25, 0.6);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
}

.rule-card.important {
  border: 1px solid rgba(138, 43, 226, 0.3);
  background: linear-gradient(to bottom right, rgba(30, 30, 30, 0.8), rgba(40, 20, 60, 0.8));
}

.rule-card::after {
  content: attr(data-index);
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  pointer-events: none;
}

.rule-header {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.rule-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #8A2BE2, #00FFFF);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.2);
}

.rule-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.rule-body {
  padding: 20px;
}

.rule-body p {
  margin: 0 0 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

.rule-penalty {
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
}

.penalty-label {
  font-weight: 600;
  color: #8A2BE2;
}

/* 提醒内容 */
.rules-reminder {
  background: linear-gradient(to right, rgba(30, 30, 30, 0.6), rgba(40, 40, 40, 0.6));
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-top: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.reminder-icon {
  width: 100px;
  background: linear-gradient(to bottom, #8A2BE2, #4B0082);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.reminder-icon i {
  font-size: 3rem;
  color: white;
}

.reminder-content {
  padding: 30px;
  flex: 1;
}

.reminder-content h3 {
  margin: 0 0 15px;
  font-size: 1.5rem;
}

.reminder-content p {
  margin: 0 0 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

/* Discord Button */
.discord-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #5865F2;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(88, 101, 242, 0.5);
}

/* 规则更新历史 */
.rules-updates {
  background: rgba(25, 25, 25, 0.6);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  margin: 60px 0;
  padding: 30px;
}

.rules-updates h3 {
  margin: 0 0 25px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.rules-updates h3 i {
  color: #8A2BE2;
}

.update-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.update-item {
  display: flex;
  gap: 20px;
  position: relative;
  padding-left: 20px;
}

.update-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, #8A2BE2, transparent);
}

.update-date {
  font-weight: 600;
  flex-basis: 120px;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.7);
}

.update-content h4 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.update-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
}

/* 悬浮按钮 */
.floating-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8A2BE2, #00FFFF);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
}

.floating-button.visible {
  opacity: 1;
  pointer-events: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .rules-list-container {
    grid-template-columns: 1fr;
  }
  
  .hero-section {
    height: auto;
    padding: 100px 24px 60px;
  }
  
  .rules-nav {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 10px 15px;
    border-radius: 12px;
  }
  
  .nav-button {
    white-space: nowrap;
    padding: 8px 15px;
  }
  
  .rules-reminder {
    flex-direction: column;
  }
  
  .reminder-icon {
    width: 100%;
    height: 80px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
  
  .section-icon {
    margin: 0 auto;
  }
  
  .section-header h2 {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .update-item {
    flex-direction: column;
    gap: 5px;
  }
  
  .rule-card::after {
    font-size: 3rem;
  }
}
</style> 