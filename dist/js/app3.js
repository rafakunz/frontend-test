new Vue({
    el: '#app3',
    data() {
        return {
            musics: null
        }
    },
    mounted() {
        axios
            .get('api/musics.json')
            .then(response => {
                this.musics = response.data.musics
                //console.log('++++',response.data.cards.hours_music.hours)
                }
            )
    },
})