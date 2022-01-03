<template>
  <el-config-provider
    :locale="currentLocale"
  >
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

import selfEn from '@/locales/lang/en'
import selfZhHans from '@/locales/lang/zh-hans'
import { useUserAccountStore } from '@/modules/UserAccount/store'

const useLanguage = (store) => {
  const currentLocale = computed(() => {
    let locale: any = null

    switch (store.locale) {
      case 'zh-hans':
        locale = {
          ...zhCn,
          ...selfZhHans
        }
        break
      case 'en':
        locale = {
          ...en,
          ...selfEn
        }
        break
    }
    return locale
  })

  return {
    currentLocale
  }
}

export default {
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
      ...useLanguage(store)
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/index.scss'
</style>
