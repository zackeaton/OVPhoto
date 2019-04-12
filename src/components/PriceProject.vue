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
              Invoice #: 123<br> Created: January 1, 2015<br> Due: February 1, 2015
            </td>
          </tr>
        </table>
      </td>
    </tr>

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

    <tr class="heading">
      <td>Item</td>
      <td>Unit Cost</td>
      <td>Quantity</td>
      <td>Price</td>
    </tr>

    <tr class="item" v-for="item in items">
      <td><input v-model="item.description" /></td>
      <td>$<input type="number" v-model="item.price" /></td>
      <td><input type="number" v-model="item.quantity" /></td>
      <td>${{ item.price * item.quantity | currency }}</td>
    </tr>

    <tr>
      <td colspan="4">
        <button class="btn-add-row" @click="addRow">Add row</button>
      </td>
    </tr>

    <tr class="total">
      <td colspan="3"></td>
      <td>Total: ${{ total | currency }}</td>
    </tr>
  </table>
</div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "price-project",
  data() {
    return {
      project_id: null,
      project_name: null,
      invoice_cost: null,
      dept_cost: null,
      dept_status: null,
      project_name: null,
      main_hourly: null,
      shoot_hours: null,
      edit_hours: null,
    };
  },
  methods: {
      calcTotal: function (event) {
          alert('Test');
      }
  }
};