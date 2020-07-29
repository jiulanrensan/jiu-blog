import {api} from '@/service/api'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.api = (fn, params, options) => {
    return api[fn](params, options)
  }
}