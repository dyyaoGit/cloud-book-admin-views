<template>
  <div>
    <ul class="clearfix">
      <li class="base-star"
          v-for="(item,index) in 10"
          :class="{
          'right-star': index%2 == 1,
          'active-star': currentValue>index
          }"
          @mouseover='handleOver(index)'
          @click="handleClick(index)"
      ></li>
    </ul>
    <ul class="clearfix">
      <li class="base-star"
          v-for="(item,index) in 10"
          :class="{
          'right-star': index%2 == 1,
          'active-star': currentValue>index
          }"
          @mouseover='handleOver(index)'
          @click="handleClick(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      canSelect: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        currentValue: this.value,
        isCanSelect: this.canSelect,
        clickValue: this.value
      }
    },
    methods: {
      handleOver(index) {
        if(this.isCanSelect){
          this.currentValue = index + 1
        }
      },
      handleClick(index) {
        if(this.isCanSelect){
          this.clickValue = index + 1
          this.$emit('input', index + 1)
          this.isCanSelect = false
        }
      }
    },
    watch: {
      value(val) {
        this.currentValue = val
        this.clickValue = val
      }
    },
    created() {
    }
  }
</script>

<style>
  .base-star {
    float: left;
    width: 30px;
    height: 57px;
    background: url('./img/star_base.png') no-repeat;
  }

  .right-star {
    background-position: -30px 0;
  }

  .active-star {
    background-image: url('./img/star_active.png');
  }

</style>
