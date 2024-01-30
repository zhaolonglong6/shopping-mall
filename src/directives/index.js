// 图片懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const imgLazyLoading = {
  install(app) {
    app.directive('lazy-img', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}