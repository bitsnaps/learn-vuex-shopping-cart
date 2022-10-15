<template>
  <div>
    <h1>Product List ({{ nbrOfProducts }})</h1>
    <img
      v-if="loading"
      src="@/assets/loading.gif"
    >
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{ priceInCurrency(product.price) }} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import toCurrency from '@/helpers/currency'

export default {
  data () {
    return {
      loading: false,
      productIndex: 1
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.items,
      nbrOfProducts: state => state.products.items.length
    }),

    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    }),
    priceInCurrency(product) {
      return toCurrency(product.price, 'USD', 2)
    }    
  },

  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => {
        this.loading = false
      }).catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style scoped>

</style>