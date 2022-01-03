import { createPinia } from 'pinia'
import { pluginPinia } from '@/store/plugins'

const store = createPinia()

store.use(pluginPinia)

export default store

