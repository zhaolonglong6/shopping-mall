import { getBannerApi } from '@/api/home'
import { ref, onMounted } from 'vue'
export function useBanner() {
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerApi('2')
    bannerList.value = res.data.result
  }
  onMounted(() => {
    getBannerList()
  })
  return {
    bannerList
  }
}