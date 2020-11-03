
const app = new Vue({
    el: '#tabs',
    data: {
        aggregate: false,
        size: 0,
        offset: 0,
        activetab: 1,
        results: [],
        responseAvailable: false
    },
    methods: {
        searchTorrePeople() {
            let _this = this;
            const data = {
                offset: _this.offset,
                size: _this.size,
                aggregate: this.aggregate
            };
            this.responseAvailable = false;
            //url = 'https://search.torre.co/people/_search/?offset=' + this.offset + '&size=' + this.size + '&aggregate=' + this.aggregate;
            axios.post('https://search.torre.co/people/_search/?offset=' + _this.offset + '&size=' + _this.size + '&aggregate=' + _this.aggregate)
                .then(response => {
                    return response;
                })
                .then(response => {
                    debugger;
                    this.results = response.data.results;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });

        },
        searchTorreOpportunities() {
            let _this = this;
            const data = {
                offset: _this.offset,
                size: _this.size,
                aggregate: this.aggregate
            };
            this.responseAvailable = false;
            //url = 'https://search.torre.co/people/_search/?offset=' + this.offset + '&size=' + this.size + '&aggregate=' + this.aggregate;
            axios.post('https://search.torre.co/opportunities/_search/?offset=' + _this.offset + '&size=' + _this.size + '&aggregate=' + _this.aggregate)
                .then(response => {
                    return response;
                })
                .then(response => {
                    debugger;
                    this.results = response.data.results;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
})