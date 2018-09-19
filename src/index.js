import PopoVuePanel from './Panel.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('popo-vue-panel', PopoVuePanel)
}

export { PopoVuePanel }

export default PopoVuePanel;