Vue.component('account', {
    template: '#account-template',
    data: function () {
        return {
            name: '',
            nameColor: 'blue',
            centered: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                float: 'none'

            }
        }
    },
    methods: {},
    computed: {
        isNameNull() {
            if (this.name.length === 0) {
                return true;
            }
            return false;
        }
    }, props: {
        accountType: {
            type: String,
            required: true
        }
    }
})

Vue.component('donate', {
    template: '#donate-template',
    data: function () {
        return {

        }
    }

    ,
    methods: {

        addToCart: function (amount) {
            this.$emit('add-to-cart', amount)
        }


    }

})


new Vue({
    el: '.app'
    ,
    data: {
        accountType: 'standard user',
        cart: 0

    },
    methods: {
        updateCart: function (amount) {
            this.cart += amount;
        }
    }
})
