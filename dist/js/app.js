import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://pmweb-dev.github.io/resumeCards.json')
        .then(response => (this.info = response.cards.hours_music))
        //.then(response => (this.info = response.cards.quantity_bands))
    }
  })