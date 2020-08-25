<template>
  <div class="home">
    This is home
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    
  },

  mounted () {
    axios.get(`${process.env.VUE_APP_API}/api/user`)
    .then(response => {
        console.log(response)
        console.log(`${process.env.VUE_APP_API}`)
    })
  }
}
</script>
