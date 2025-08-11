import { usePresenter } from '@/composables/usePresenter'
import { defineStore } from 'pinia'
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Shell 进程专用的简单模式状态管理
export const useSimpleModeStore = defineStore('simpleMode', () => {
  const windowPresenter = usePresenter('windowPresenter')
  // 状态
  const isEnabled = ref(false)

  // Actions
  const setEnabled = (enabled: boolean) => {
    isEnabled.value = enabled
  }

  const reset = () => {
    isEnabled.value = false
  }

  const onStateChanged = (_, enabled: boolean) => {
    isEnabled.value = enabled
  }

  onMounted(async () => {
    isEnabled.value = await windowPresenter.isSimpleModeEnabled()
    window.electron.ipcRenderer.on('simple-mode:state-changed', onStateChanged)
  })

  onBeforeUnmount(() => {
    window.electron.ipcRenderer.removeAllListeners('simple-mode:state-changed')
  })

  return {
    isEnabled,
    setEnabled,
    reset
  }
})
