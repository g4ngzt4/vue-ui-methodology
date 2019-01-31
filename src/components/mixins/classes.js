export default {
  props: {
    mods: Object,
  },
  computed: {
    blockClasses() {
      return this.getClasses('root', this.mods)
    },
  },
  methods: {
    getClasses(name, mods) {
      const modifiers = !mods ? [] : Object.keys(mods).map(k => {
        if (mods[k] === true) return this.$style[`${name}_${k}`]
        if (mods[k] === false || !mods[k].length) return
        return this.$style[`${name}_${k}-${mods[k]}`]
      })
      return [
        this.$style[name], ...modifiers
      ]
    }
  },
}