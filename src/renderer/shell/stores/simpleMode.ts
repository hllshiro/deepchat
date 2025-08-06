import { defineStore } from 'pinia'
import { ref } from 'vue'

// Shell 进程专用的简单模式状态管理
export const useSimpleModeStore = defineStore('simpleMode', () => {
  // 状态
  const isEnabled = ref(false)

  // Actions
  const setEnabled = (enabled: boolean) => {
    console.log('Shell SimpleMode Store: Setting enabled to', enabled)
    isEnabled.value = enabled
  }

  const reset = () => {
    isEnabled.value = false
  }

  // 监听主进程的状态变更通知
  window.electron.ipcRenderer.on('simple-mode:state-changed', (_, enabled: boolean) => {
    console.log('Shell SimpleMode Store: Received state change from main process:', enabled)
    isEnabled.value = enabled
  })
  return {
    isEnabled,
    setEnabled,
    reset
  }
})
