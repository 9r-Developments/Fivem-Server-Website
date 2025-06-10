<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

const router = useRouter();
const pageContainer = ref<HTMLElement | null>(null);
const isTransitioning = ref(false);

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (to.path === from.path) {
      next();
      return;
    }

    // 开始过渡动画
    isTransitioning.value = true;
    
    // 找到当前页面内容
    const currentContent = pageContainer.value?.querySelector('.page-content');
    if (!currentContent) {
      next();
      return;
    }

    // 淡出并轻微缩小当前页面
    gsap.to(currentContent, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => next()
    });
  });
  
  router.afterEach(() => {
    // 延迟一点点以确保DOM已更新
    setTimeout(() => {
      // 找到新页面内容
      const newContent = pageContainer.value?.querySelector('.page-content');
      if (newContent) {
        // 确保新内容初始状态
        gsap.set(newContent, {
          opacity: 0,
          scale: 1.05
        });
        
        // 淡入并恢复正常大小
        gsap.to(newContent, {
          opacity: 1, 
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            isTransitioning.value = false;
          }
        });
      } else {
        isTransitioning.value = false;
      }
    }, 10);
  });
});
</script>

<template>
  <div class="page-transition" ref="pageContainer">
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page-transition {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  perspective: 1200px;
}

.page-content {
  width: 100%;
  min-height: 100vh;
  transform-origin: center center;
  will-change: transform, opacity;
}
</style> 