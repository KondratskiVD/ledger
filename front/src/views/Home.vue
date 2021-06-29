<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: 'Home',
  setup () {
    const currentOffset = moment().utcOffset()
    const currentDate = moment('2015-12-20T12:00:00+00:00').utcOffset(currentOffset).format('YYYY-MM-DD HH:mm')
    console.log(currentDate)
  }
})
</script>
