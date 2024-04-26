<template>
  <el-config-provider
    :locale="currentLocaleLang"
  >
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { computed, defineComponent, watch } from 'vue'

import { useUserAccountStore } from '@/modules/UserAccount/store'
import { useLanguage } from '@/hooks/useLanguage'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup () {
    const store = useUserAccountStore()
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        store.setLanguage({
          locale: route.params.locale || 'en'
        })
      }
    )

    return {
      ...useLanguage()
    }
  }
})
</script>

<style lang="scss">
@use '@/styles/index.scss';
</style>
