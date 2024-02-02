import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/api/category'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryList = ref([])
  const route = useRoute()
  const getCategoryList = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryList.value = res.data.result
  }
  onMounted(() => getCategoryList())
  onBeforeRouteUpdate((to, from) => {
    getCategoryList(to.params.id)
  })
  return {
    categoryList
  }
}