new Vue({
    el: '#app',
    data() {
        return {
            cards: null
        }
    },
    mounted() {
        axios
            .get('api/resumeCards.json')
            .then(response => {
                this.cards = response.data.cards
                //console.log('++++',response.data.cards.hours_music.hours)
                }
            )
    },
})