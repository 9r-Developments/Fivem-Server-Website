import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Features from '../views/Features.vue'
import Staff from '../views/Staff.vue'
import Rules from '../views/Rules.vue'
import JoinUs from '../views/Join.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '9r-Developments - Premium FiveM Roleplay Server',
        description: 'Join 9r-Developments, a premium FiveM roleplay server offering an immersive GTA5 roleplaying experience with custom scripts and active community.',
        keywords: 'FiveM, Roleplay Server, GTA5 RP, 9r-Developments'
      }
    },
    {
      path: '/features',
      name: 'features',
      component: Features,
      meta: {
        title: 'Features - 9r-Developments',
        description: 'Explore all the amazing features offered by 9r-Developments FiveM roleplay server, including custom scripts, vehicles and roleplay opportunities.',
        keywords: 'FiveM features, server features, roleplay functions, custom scripts'
      }
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff,
      meta: {
        title: 'Our Team - 9r-Developments',
        description: 'Meet the professional team behind 9r-Developments FiveM roleplay server, dedicated to providing the best roleplaying experience.',
        keywords: 'server staff, admin team, development team, moderators'
      }
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules,
      meta: {
        title: 'Server Rules - 9r-Developments',
        description: 'Guidelines and rules for 9r-Developments FiveM roleplay server to ensure all players have the best experience possible.',
        keywords: 'server rules, community guidelines, roleplay rules, terms of service'
      }
    },
    {
      path: '/join',
      name: 'join',
      component: JoinUs,
      meta: {
        title: 'Join Us - 9r-Developments',
        description: 'Learn how to join 9r-Developments FiveM roleplay server and become part of our growing community.',
        keywords: 'join server, connect to FiveM, server application, join community'
      }
    }
  ]
})

// Global navigation guard to set page title and metadata
router.beforeEach((to, _from, next) => {
  // Update page title
  document.title = to.meta.title as string || '9r-Developments';
  
  // Update meta tags
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '');
  }
  
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords as string || '');
  }
  
  next();
});

export default router 