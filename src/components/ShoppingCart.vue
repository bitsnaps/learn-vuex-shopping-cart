<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="product in products">
          {{product.title}} - {{ toUSD(product.price)}} - {{product.quantity}}
        </li>
      </ul>
      <p>Total: {{toUSD(total)}}</p>
      <button @click="checkout" :disabled="products.length === 0 || checkoutStatus === 'success'">Checkout</button>
      <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import toCurrency from '@/helpers/currency'

  export default {
    computed: {
      // 'cart' here is the namespace
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),

      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },

    methods: {
      ...mapActions('cart', ['checkout']),
      toUSD(value) {
        return toCurrency(value, '$', 2)
    }   
    }
  }
</script>

<style scoped>

</style>