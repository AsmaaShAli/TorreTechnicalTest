
const app = new Vue({
    el: '#tabs',
    data: {
        searchTerm: '',
        aggregate: false,
        size: 0,
        offset: 0,
        activetab: 1,
        results: [],
        responseAvailable: false
    },
    methods: {
        searchTorrePeople() {
            if (searchTerm != '') {
                this.responseAvailable = false;
                fetch("")
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then(response => {
                        this.results = response.body;
                        this.responseAvailable = true;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
})