
const app = new Vue({
    el: '#tabs',
    data: {
        aggregate: false,
        size: 0,
        offset: 0,
        activetab: 1,
        results: [],
        buttonClicked: false,
        responseAvailable: false
    },
    methods: {
        searchTorrePeople() {
            this.buttonClicked = true;
            let _this = this;
            const data = {
                offset: _this.offset,
                size: _this.size,
                aggregate: _this.aggregate
            };
            this.responseAvailable = false;
            axios.post('https://search.torre.co/people/_search/?offset=' + _this.offset + '&size=' + _this.size + '&aggregate=' + _this.aggregate)
                .then(response => {
                    return response;
                })
                .then(response => {
                    this.results = response.data.results;
                    console.log(this.results);
                    this.responseAvailable = true;
                    this.buttonClicked = false;
                })
                .catch(err => {
                    console.log(err);
                });

        },
        searchTorreOpportunities() {
            this.buttonClicked = true;
            const data = {
                offset: this.offset,
                size: this.size,
                aggregate: this.aggregate
            };
            this.responseAvailable = false;
            axios.post('https://search.torre.co/opportunities/_search/?offset=' + _this.offset + '&size=' + _this.size + '&aggregate=' + _this.aggregate)
                .then(response => {
                    return response;
                })
                .then(response => {
                    this.results = response.data.results;
                    this.responseAvailable = true;
                    this.buttonClicked = false;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
})