import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as AlphaSpaces,
  email,
  min_value,
  max_value,
  confirmed,
  not_one_of
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos_required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('alpha_spaces', AlphaSpaces)
    defineRule('min_value', min_value)
    defineRule('max_value', max_value)
    defineRule('password_mismatch', confirmed)
    defineRule('not_one_of', not_one_of)
    defineRule('country_excluded', not_one_of)

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          tos_required: `You must accept the terms of service`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alpha_spaces: `The field ${context.field} may only containe alphabetical characters.`,
          mail: `The field ${context.field} must be a valid email.`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          not_one_of: `You are not allowed to use this value for the field ${context.field}`,
          country_excluded: `Due to restrictions, we will not allow users from this location.`,
          password_mismatch: `The passwords dont match.`
        }

        const message = messages[context.rule.name] ?? `The field ${context.field} is invalid.`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
