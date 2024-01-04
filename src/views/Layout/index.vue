<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { useNavigationStore } from '@/stores/navigationStore'
import { onMounted } from 'vue'

const navigationStore = useNavigationStore()
onMounted(() => {
  navigationStore.getCategory()
})
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <LayoutFixed />
</template>
