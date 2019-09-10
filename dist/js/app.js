
import axios from 'axios'
 

new Vue({
    el: '#app',
    data: {
      cards: []
    },
    mounted () {
      axios.get('https://pmweb-dev.github.io/resumeCards.json')
        .then(response => (this.cards = response.hours_music.hours))
        .then(response => (this.cards = response.hours_music.percent_diference))
    }
  })

  console.log()

  // {
  //   "cards":{
  //     "hours_music":{
  //       "hours": 235,
  //       "percent_diference": 130
  //     },
  //     "quantity_bands":{
  //       "bands": 48,
  //       "percent_diference": 98
  //     },
  //     "lost_artists":{
  //       "losts": 12,
  //       "percent_diference": 37
  //     }
  //   }
  // }

// export default {
//   name: 'app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   created() {
// axios.get('https://pmweb-dev.github.io/resumeCards.json').then((response) => {
//       this.info = response.cards.hours_music
//     })
//     .catch((e) => {
//       console.error(e)
//     })
//   }
// }