import type { getFilterResponse } from '@/store/utils/mixin'
import type { DialogProps } from 'element-plus'

import type {
  imageListRules,
  requiredRadioRules,
  requiredRules,
  validatorRules
} from '@/utils/formRules'
import { RouteRecordRaw } from 'vue-router'

// $ModalDialog
declare module 'vue' {
  export interface VNode {
    destroy?: any
  }

  /**
   * Costom Instance.
   * proxy._t
   *
   */
  interface ComponentCustomProperties {
    _t: (str: string) => string
    $ModalDialog: (options: PropsOptionsUnion) => VNode
    getValidatorRules: (...args: any[]) => ReturnType<typeof validatorRules>
    getRequiredRules: (...args: any[]) => ReturnType<typeof requiredRules>
    getRequiredRadioRules: (...args: any[]) => ReturnType<typeof requiredRadioRules>
    getImageListRules: (...args: any[]) => ReturnType<typeof imageListRules>
  }
}

declare module 'axios' {
  /**
   * Costom Axios Field.
   */
  export interface AxiosRequestConfig {
    redirect?: string
    /**
     * 是否将response驼峰转译, 默认不转为 false
     */
    needCamelCase?: boolean
  }
}

declare module 'pinia' {
  /**
   * Costom Pinia Field.
   */
  export interface PiniaCustomProperties {
    filterResponse: typeof getFilterResponse
  }
}

declare module 'vue-router' {
  // export interface RouteRecordRaw {
  //   icon?: 'string'
  // }
  export interface RouteMeta {
    title?: string
  }
}

declare global {
  interface RenderComponent {
    data?: any
    component?: any
  }
  type ComponentOriginOptions = {
    title: string
    headerDescText?: string
    headerIcon?: string
    confirmText?: string
    maxHeight?: number | string | 'auto'
    dialogWidth?: string | '500px'
    disabledConfirmButton?: boolean | false
    hideFooter?: boolean | false
    renderComponent: RenderComponent
    onConfirm?: (instance: any, context: any) => Promise<any>
    // onCancel?: (instance: Ref<null>, context: ComponentInternalInstance) => Promise<any>
  }

  type Mutable = {
    -readonly [K in keyof DialogProps]: DialogProps[K]
  }

  type PropsOptionsUnion = ComponentOriginOptions | Mutable
  type PropsOptionsMixed = Partial<ComponentOriginOptions & Mutable>

  // interface CustomRouteItem extends Omit<readonly RouteRecordRaw, 'children'> {
  //   title?: string
  //   icon?: string
  //   children?: CustomRouteItem[]
  // }

}
export { }
