import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '../api/layout'

export const useNavigationStore = defineStore('navigation', () => {
  const navigationList = ref([])
  const getCategory = async () => {
    let res = await getCategoryAPI()
    navigationList.value = res.data.result
  }
  return { navigationList, getCategory }
})
