<script setup lang="ts">
import Header from './components/Header.vue'
import PageTransition from './components/PageTransition.vue'
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const isLoaded = ref(false);

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "9r-Developments",
  "url": "https://9r-dev.com",
  "logo": "https://9r-dev.com/logo.png",
  "description": "Premium FiveM roleplay server offering an immersive GTA5 roleplaying experience with custom scripts and active community.",
  "sameAs": [
    "https://discord.gg/9r-developments",
    "https://twitter.com/9r_developments",
    "https://www.youtube.com/channel/9r-developments"
  ]
};

onMounted(() => {
  // Add structured data to the page
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  // Reduce delay time
  setTimeout(() => {
    isLoaded.value = true;
    
    // Create entrance animation with GSAP
    const tl = gsap.timeline();
    tl.to('.header', { 
      y: 0, 
      opacity: 1, 
      duration: 0.6, 
      ease: 'power3.out' 
    });
  }, 100);
});
</script>

<template>
  <div id="app-container" :class="{ loaded: isLoaded }">
    <Header class="header" />
    <main class="main-content">
      <PageTransition>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </PageTransition>
    </main>
  </div>
</template>

<style scoped>
#app-container {
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app-container.loaded {
  opacity: 1;
}

.header {
  position: relative;
  z-index: 10;
}

.main-content {
  flex: 1;
  position: relative;
}
</style>
