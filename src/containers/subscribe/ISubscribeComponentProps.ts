export interface ISubscribeComponentProps {

  /**
   * Login user
   *
   * @memberof ISubscribeComponentProps
   */
  login?: (email: string, password: string) => any

  /**
   * Redirect to home page
   *
   * @memberof ISubscribeComponentProps
   */
  homePage?: () => void

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, param?: {}) => any

}
