<template>
    <div class="full-template">
        <div class="container d-flex justify-content-center">
        <div class="shadow p-2 w-div">
            <h1 class="text-white"><i>Welcome, calculate your mortgage here</i></h1>
        </div>
    </div>
    <div class="container d-flex justify-content-center">
        <div class="shadow calc-div p-3 mb-5">
            <h3 class="pt-4">Mortgage Calculator</h3>
            <div>
            <div class="mb-3 me-3">
            <label for="example" class="form-label ff-text"><h5>Interest Rate:</h5></label>
            <input type="number" class="form-control" placeholder="%" v-model="inRate" required>
            </div>
            <div class="result-card shadow">
            <div class="card-body">
                <div class="mb-3 me-3">
            <h5>Loan Amount:</h5>
            <div class="div-img">
            <p class="l-result"><b><span v-if="dollar">$</span>{{loanAmount}}</b></p>
                <img src="@/assets/loann.png" class="money-img" v-if="isMoney">
            </div>
            </div>
            <div class="mb-3">
            <h5>Estimated Amount pr Month:</h5>
            <div class="div-img">
            <p class="l-result"><b>{{esAmount}}</b></p>
                <img src="@/assets/loann.png" class="money-img" v-if="isMoney">
            </div>
            </div>
            </div>
            </div>
            <form class="pt-5" @submit.prevent="calcLoan">
            <hr class="mt-4">
            <div class="d-md-flex mt-4">
            <div class="mb-3 me-3">
            <label for="exampleInputEmail1" class="form-label f-text"><h5>Purchase Price:</h5></label>
            <input type="number" class="form-control" id="example1" placeholder="$" v-model="priceInput" @keyup.enter="calcLoan" required>
            </div>
            <div class="mb-3 me-3">
            <label for="exampleInputPassword1" class="form-label f-text"><h5>Down Payment:</h5></label>
            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="$" v-model="paymentInput" @keyup.enter="calcLoan" required>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label f-text"><h5>Repayment Time:</h5></label>
            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Years" v-model="noOfYears" @keyup.enter="calcLoan" required>
            </div>
            </div>
            <hr class="mt-4">
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-c">Calculate loan</button>
            </div>
            <hr class="mt-4">
            </form>
            <div class="d-flex justify-content-between">
            <button class="btn btn-p me-3" @click="clearCalc">Clear</button>
            <button type="submit" class="btn btn-p" data-bs-toggle="modal" data-bs-target="#exampleModal">Get a mortgage quote</button>
            </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">MORTGAGE QUOTE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-block">
        <div class="result-card">
            <div class="card-body">
            <h3>Loan:</h3>
            <div class="card-body shadow">
            <span v-if="dollar">$</span>{{loanAmount}}
            </div>
            </div>
        </div>
        <div class="result-card">
            <div class="card-body">
            <h3>Estimated Amount per year:</h3>
            <div class="card-body shadow">
            {{esAmount}}
            </div>
            </div>
        </div>
        <div class="result-card">
            <div class="card-body">
            <h3>Mortgage Payments:</h3>
            <div class="card-body shadow">
            {{mgPayment}}
            </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save quote</button>
      </div>
    </div>
  </div>
</div>
    <router-link to="/f-page" class="btn btn-p text-left mt-4 text-white"><i class="fa fa-arrow-left me-3"></i>Go back</router-link>
    </div>
</template>

<style>
    .w-div {
        background: rgb(47, 3, 71);
        border-radius: 8px;
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
    .btn-p {
        background: purple;
        color: white !important;
    }
    .btn-c {
        background: rgb(47, 3, 71);
        color: white !important;
    }
    .f-text {
        color: rgb(62, 4, 93) !important;
    }
    .ff-text {
        color: purple !important;
    }
    .full-template {
        background: rgb(248, 248, 248);
        padding-bottom: 19px;
    }
    .result-card {
        border-radius: 8px;
    }
    .calc-div {
        background: white !important;
        border: 4px solid white;
        border-radius: 8px;
        margin-top: 50px;
    }
    .div-img {
        position: relative;
    }
    .money-img {
        width: 100px;
        height: 50px;
    }
    .l-result {
        position: absolute;
        color:purple;
    }
</style>

<script>
export default {
    data() {
        return {
            loanAmount:"",
            priceInput:"",
            paymentInput:"",
            esAmount:"",
            noOfYears:"",
            inRate:"",
            isMoney:false,
            dollar:false,
            mgPayment:""
        }
    },
    methods: {
        calcLoan() {
            if (this.paymentInput > this.priceInput) {
                this.loanAmount = null
                alert("Purchase price must be greater than down payment!")
            } else if (this.paymentInput < this.priceInput) {
                this.loanAmount = (Number(this.priceInput) - Number(this.paymentInput))
                this.dollar = true
                this.isMoney = true
                let properCalc = this.inRate * ( 1 + this.inRate)^5
                let laterCalc = ((1 + this.inRate)^5) - 1
                const realCalc = properCalc / laterCalc
                this.mgPayment = "$" + (Number(this.loanAmount * realCalc))
            }
             if (this.noOfYears == 5 || this.noOfYears < 5) {
                this.esAmount = "$" + 1300
            } else if (this.noOfYears == 10 || this.noOfYears < 10 || this.noOfYears > 5) {
                this.esAmount = "$" + 2000
            } else if (this.noOfYears == 15 || this.noOfYears < 15 || this.noOfYears > 10) {
                this.esAmount = "$" + 2500
            } else if (this.noOfYears == 20 || this.noOfYears < 20 || this.noOfYears > 15) {
                this.esAmount = "$" + 3000
            } else if (this.noOfYears > 20) {
                alert("Sorry! you can't get a loan because the number of years is too much to pay back")
                this.esAmount = ""
                this.loanAmount = ""
                this.dollar = false
                this.isMoney = false
            }
        },
        clearCalc() {
            this.loanAmount = null
            this.esAmount = null
            this.priceInput = null
            this.paymentInput = null
            this.noOfYears = null
            this.isMoney = false
        }
    }
}
</script>