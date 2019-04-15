<template>
    <div class="invoice-box">
  <table cellpadding="0" cellspacing="0">
    <tr class="top">
      <td colspan="4">
        <table>
          <tr>
            <td class="title">
              <img src="http://static1.squarespace.com/static/5982735ae6f2e1038a293da0/t/5a47f502e4966b19e3e6d4e3/1514665395643/ov1.jpg?format=1000w" style="width:100%; max-width:300px;">
            </td>

            <td>
              Invoice #: 123<br> 
              Created: <input type="date" id='dates' v-model="invoice_created_date" class='right-align col s2' required>
              <br> Due: <input type="date" id='dates' v-model="invoice_due_date" class='right-align col s2' required>
            </td>
          </tr>
        </table>
      </td>

    <tr class="information">
      <td colspan="4">
        <table>
          <tr>
            <td>
              OV Photography<br> 1 University Blvd<br> St. Louis, MO 63121
            </td>

            <td>
              Acme Corp.<br> John Doe<br> john@example.com
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr class="heading">
      <td colspan="3">Payment Method</td>
      <td>Check #</td>
    </tr>

    <tr class="details">
      <td colspan="3">Check</td>
      <td>1000</td>
    </tr>
  </table>

  <table>
    <thead>
      <tr>
      <td>Item</td>
      <td>Unit Cost</td>
      <td>Quantity</td>
      <td>Price</td>
      </tr>
    </thead>

    <tr class="item" v-for="item in items">
      <td><input v-model="item.description" /></td>
      <td><input type="number" v-model="item.price" /></td>
      <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$"
       onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="item.quantity" /></td>
      <td>${{ item.price * item.quantity}}</td>
    </tr>

    <!--<ul>
      <li :key='item.id' v-for='item in items'>{{item.price}}</li>
    </ul> -->

   <tr>
      <td colspan="4">
        <router-link to="/projects" class="btn grey">Back</router-link>
        <button class="btn" @click="addRow">Add row</button>
        <button class="btn red" @click="delRow">Delete row</button>
      </td>
    </tr>

    <tr class="total">
      <td colspan="3"></td>
      <td>Total: ${{ total }}</td>
    </tr>
  </table>
</div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "price-project",
  //el: 'ex1',
  data() {
    return {
      items: [
      { description: "Shoot Location", quantity: 1, price: 300 },
      { description: "Photographers", quantity: 1, price: 75 },
      { description: "Wardrobe Changes", quantity: 1, price: 10 }
    ]
    };
  },
   computed: {
    total() {
      return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
      addRow() {
      this.items.push({ description: "", quantity: 1, price: 0 });
    },
      delRow() {
        this.items.splice(-1,1);
      }
  },
 filters: {
    currency(value) {
      return value.toFixed(2);
    }
  }
};
</script>

<style>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}
</style>