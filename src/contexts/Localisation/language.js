import {createI18n } from 'vue-i18n'


// The following is the scenario of setting language package separately. When setting language package separately, it needs to be introduced separately
// {{$t('toolbar.supply')}}
const messages = {
  en: require('../../assets/locales/en.json'), 
  zh_CN: require('../../assets/locales/zh-CN.json')
}

var lang = navigator.language || navigator.userLanguage // General browser language and IE browser


lang = lang.substr(0, 2)




const i18n =  new createI18n({
  locale: localStorage.getItem('p_lang_locale') ? localStorage.getItem('p_lang_locale') : 'en', // set locale  The default is English
  messages: messages, // set locale messages
  silentTranslationWarn: true
})
export default i18n