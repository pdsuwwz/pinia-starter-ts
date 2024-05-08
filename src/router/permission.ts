import router from '@/router'
import { useUserAccountStore } from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  const userAccountStore = useUserAccountStore()

  NProgress.start()

  document.title = `${ to.meta.title || '' } - ${ systemTitle }`

  console.log('😄😄😄 ', to)

  const currentRouteLocale = to.params.locale

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  if (!Cookie.get('token')) {
    next(`/${ currentRouteLocale || userAccountStore.locale }/user/login`)
    return
  }

  // 获取用户信息
  const { data, error } = await userAccountStore.getUserInfo()

  if (error) {
    userAccountStore.setLanguage({
      locale: currentRouteLocale || userAccountStore.locale
    })
    Cookie.remove('token')
    next(`/${ currentRouteLocale || userAccountStore.locale }/user/login`)
    return
  }

  // TODO: It must be used together with the backend
  userAccountStore.setLanguage({
    locale: currentRouteLocale || data!.language
  })
  next()

})

router.afterEach((to) => {
  NProgress.done()
})
