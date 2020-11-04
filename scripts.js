

const app = new Vue({
    el: '#tabs',
    data: {
        aggregate: false,
        size: 0,
        offset: 0,
        activetab: 1,
        results: [],
        userData: [],
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
            axios.post('https://search.torre.co/opportunities/_search/?offset=' + this.offset + '&size=' + this.size + '&aggregate=' + this.aggregate)
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
        openBio(username) {
            debugger;
            axios.get('https://torre.bio/api/bios/' + username, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': 'content-type',
                    'Access-Control-Allow-Methods': "PUT, POST, GET, DELETE, PATCH, OPTIONS"
                },
                withCredentials: true,
                credentials: 'same-origin',
                crossdomain: true
            })
                .then(response => {
                    return response;
                })
                .then(response => {
                    this.userData = response.data.results;
                    console.log(this.userData);
                })
                .catch(err => {
                    console.log(err);
                });

        },
        resetResults() {
            if (this.results.length > 0)
                this.results = [];
            this.aggregate = false;
            this.size = 0;
            this.offset = 0;
            this.responseAvailable = false;
            this.buttonClicked = false;
        }
    }
})