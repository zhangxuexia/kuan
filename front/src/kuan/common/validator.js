import Vue from 'vue'
import zh_CN from 'vee-validate/dist/locale/zh_CN.js';
import VeeValidate, { Validator } from 'vee-validate'
// 自定义提示
const dictionary = {
  zn: {
    messages: {
      required: (field) => '请输入'+field,
      max: () => '元素最大长度为20位'
    }
  }
}
Validator.localize('zh_CN', {messages:dictionary.zn.messages})
Validator.extend('phone', {
  getMessage: field => '请填写正确的手机号',
  validate: value => {
    return /^1[2|3|4|6|7|5|8|9]\d{9}$/.test(value)
  }
})
  Validator.extend('money', {
    getMessage: field => '请填写正确的金额',
    validate: value => {
      return /(^[1-9]([0-9]+)?(\.[0-9]*)?$)|(^(0){1}$)|(^(0){1}\.[0-9]+$)/.test(value)
    }
  })
Validator.extend('companyPhone', {
  getMessage: field => field + '格式输入不正确',
  validate: value => {
    return /^(((\d{3,4})(-)?\d{7,8})|(1[3584]\d{9})|((\d{3})(-)?\d{3,4}(-)?\d{3,4})|(\d{5}))$/.test(value)
  }
})
Validator.extend('password', {
  getMessage: field => field + '为5-20位字母、数字或符号的至少两种组合',
  validate: value => {
    return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{5,20}$/.test(value)
  }
})
Validator.extend('name', {
  getMessage: field => '字母数字长度2至14位，汉字位数2至6位',
  validate: value => {
    return /^([\u4e00-\u9fa5]{2,6}|[a-zA-Z\d]{2,14})$/.test(value)
  }
})
Validator.extend('email', {
  getMessage: field => '请填写正确的邮箱地址',
  validate: value => {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)
  }
});
Validator.extend('max50', {
  getMessage: field => field+'最大长度不能超过50',
  validate: value => {
    return /^.{0,50}$/.test(value)
  }
})
Validator.extend('max70', {
  getMessage: field => field+'最大长度不能超过70',
  validate: value => {
    return /^.{0,70}$/.test(value)
  }
})
Validator.extend('max100', {
  getMessage: field => field+'最大长度不能超过100',
  validate: value => {
    return /^.{0,70}$/.test(value)
  }
})
Validator.extend('account', {
  getMessage: field => '请填写正确的银行账户（5-23位数字）',
  validate: value => {
    return /^[0-9]{5,23}$/.test(value)
  }
})
Validator.extend('numScore', {
  getMessage: field => '请填写数字',
  validate: value => {
    return /^[0-9]{1,23}$/.test(value)
  }
})
Validator.extend('url', {
  getMessage: field => field+'以http://或者https://开头',
  validate: value => {
    return /^(http:\/\/|https:\/\/)\S{2,100}/.test(value)
  }
})
export default function () {
  Vue.use(VeeValidate,{locale:zh_CN})
}
