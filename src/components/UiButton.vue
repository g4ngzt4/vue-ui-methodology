<template>
  <button type="button" :class="blockClasses">
    <span :class="getClasses('content', { align: 'left', bold: true })">
      <slot/>
    </span>
  </button>
</template>

<script>
import ClassesMixin from '@/components/mixins/classes'
export default {
  name: 'UiButton',
  mixins: [ClassesMixin],
}
</script>

<style lang="scss" module>
.root {
  display: flex;
  background-color: transparent;
  padding: 5px;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  margin-bottom: 20px;
  cursor: pointer;
  &_rounded {
    border-radius: 500px;
  }
  &_size {
    &-small {
      padding: 0;
    }
    &-large {
      padding: 10px;
    }
  }
  &_color {
    &-red {
      background: red;
      color: #fff;
    }
    &-blue {
      background: blue;
      color: #fff;
    }
  }
  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
}
.content {
  padding: 5px;
  display: block;
  &_align {
    &-left {
      text-align: left;
    }
    &-right {
      text-align: right;
    }
  }
  &_bold {
    font-weight: bold;
  }
}
</style>
