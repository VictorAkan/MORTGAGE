<template>
    <section class="nav-section">
        <nav class="navbar">
  <div class="container content">
    <a class="navbar-brand" href="#">Web-Calc</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="fa fa-bars"></span>
    </button> -->
    <!-- <div class=""   aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-body"> -->
      <!-- <button type="button" class="btn-close text-reset d-md-none" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
        <button class="btn btn-login me-2">Login</button>
        <button class="btn btn-sign">Sign Up</button>
      </ul>
      </div>
    <!-- </div>
  </div> -->
</nav>
    </section>
    <section class="ex-section">
        <div class="container text-white text-center">
                <div class="row">
                    <div class="col-12 mt-5 col-div">
                        <h1 class="display-4 h-div">Where the world calculates mortgage</h1>
                        <p class="my-4 p-div">Reduce the stress of taking out loans and calculating<br>
                            monthly EMI, by utilizing the web-calc website.</p>
                        <router-link to="/" class="btn btn-main">Get Started</router-link>
                    </div>
                </div>
            </div>
    </section>
    <section class="promo-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 g-div">
                    <h1 class="promo-title">Sweet easy calculation with ease</h1>
                    <p class="h-ex">Take out loans without stress<br>
                    and with ease within few minutes</p>
                    <router-link to="/" class="btn col-btn px-4">Get Started</router-link>
                </div>
                <div class="col-md-6">
                    <!-- <img src="" alt="" class="img-fluid"> -->
                    <img src="@/assets/po.png" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
    <section id="a-section" class="bg-light">
        <div class="container">
            <div class="d-block">
                <h1 class="mt-5 c-t-title">Analyze your loans</h1>
            <p class=" mt-2">Keep track of mortgage balances and
            be sure that the money is safe by just<br> using the site with peace of mind</p>
            </div>
            <div class="row d-row">
                <div class="col-md-4 c-col">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-bar-chart"></i></div>
                            <h5><b>Dig deeper</b></h5>
                            <p>Go more further to make transactions <br>
                            and also to save detailed funds. <br>
                            In the nearest future,<br> you'll earn virtually alot.<br>
                            Make monthly and yearly<br> plans with the best todo.<br>
                            Reach out to friends with financial help</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 c-col">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-credit-card"></i></div>
                            <h5><b>Aim Higher</b></h5>
                            <p>Aim at making and saving the best amount <br>
                            for insufficient future purposes. <br>
                            Save in season<br> to have more tomorrow<br>
                            Make hare while the sun<br> shines. you'll be<br>
                            proud of yourself later.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 c-col">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-money"></i></div>
                            <h5><b>Get safe with loans</b></h5>
                            <p>Take out loans with more time to pay<br>
                            back and also very low interest.<br>
                            Buy out time to<br> get financially stable and<br>
                            you can build the best house<br> of your choice.<br>
                            Reach out to friends with financial help</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container c-row d-md-none d-block justify-content-center">
                <div class="row">
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-bar-chart"></i></div>
                            <h5><b>Dig deeper</b></h5>
                            <p>Go more further to make transactions <br>
                            and also to save detailed funds. <br>
                            In the nearest future,<br> you'll earn virtually alot.<br>
                            Make monthly and yearly<br> plans with the best todo.<br>
                            Reach out to friends with financial help</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 s-r-card">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-credit-card"></i></div>
                            <h5><b>Aim Higher</b></h5>
                            <p>Aim at making of one of the best amount <br>
                            for insufficient future purposes. <br>
                            Save in season<br> to have more tomorrow<br>
                            Make hare while the sun<br> shines. you'll be<br>
                            proud of yourself later.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 t-r-card">
                    <div class="card shadow">
                        <div class="card-body">
                        <div class="icon shadow"><i class="fa fa-money"></i></div>
                            <h5><b>Get safe with loans</b></h5>
                            <p>Take out loans with more time to pay<br>
                            back and also very low interest.<br>
                            Buy out time to<br> get financially stable and<br>
                            you can build the best house<br> of your choice.<br>
                            Reach out to friends with financial help</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section class="carousel-section">
        <div class="container d-flex justify-content-center">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/first-ca.png" class="d-block w-100" alt="...">
      <h1>Solution Mindset</h1>
    </div>
    <div class="carousel-item">
      <img src="@/assets/second-ca.png" class="d-block w-100" alt="...">
      <h1>Predictive analysis</h1>
    </div>
    <div class="carousel-item">
      <img src="@/assets/third-co.png" class="d-block w-100" alt="...">
      <h1>Transfer money</h1>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="text-dark" aria-hidden="true"><i class="fa fa-angle-left"></i></span>
    <span class="visually-hidden text-dark">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="text-dark" aria-hidden="true"><i class="fa fa-angle-right"></i></span>
    <span class="visually-hidden text-dark">Next</span>
  </button>
</div>
        </div>
    </section>
    <section class="down-section">
        <div class="container d-flex justify-content-center">
            <div class="d-block">
                <h1>Book the opportunity today</h1>
                <router-link to="/" class="btn btn-main mt-2">Get Started</router-link>
            </div>
        </div>
    </section>
    <section class="last-section">
                <div class="container">
            <div class="container-fluid d-md-flex">
                <!-- <div><button class="btn b-btn"><h2>Web-Calc</h2></button></div> -->
                <button class="btn fs-1 mb-5 ll-btn" style="color: rgb(207,230,53) !important;font-family: 'Oleo Script Swash Caps',sans-serif;">Web-Calc</button>
                <ul class="b-list fb-list">
                    <li class="text-left"><b>Features</b></li>
                    <li><a class="btn nb-btn">Loan taking</a></li>
                    <li><a class="btn nb-btn">Mortgage calculation</a></li>
                    <li><a class="btn nb-btn">Analytics</a></li>
                </ul>
                <ul class="b-list">
                    <li class="text-left"><b>Resources</b></li>
                    <li><a class="btn nb-btn">Blog</a></li>
                    <li><a class="btn nb-btn">Analytic Developers</a></li>
                    <li><a class="btn nb-btn">Support</a></li>
                </ul>
                <ul class="b-list me-5">
                    <li class="text-left"><b>Company</b></li>
                    <li><a class="btn nb-btn">About</a></li>
                    <li><a class="btn nb-btn">Our Team</a></li>
                    <li><a class="btn nb-btn">Careers</a></li>
                    <li><a class="btn nb-btn">Contact</a></li>
                </ul>
                <div class="d-md-flex text-white social-div">
                    <a href="" class="me-3"><i class="fab fa-facebook-square text-white"></i></a>
                    <a href="" class="me-3"><i class="fab fa-twitter text-white"></i></a>
                    <a href="" class="me-3"><i class="fab fa-whatsapp text-white"></i></a>
                    <a href=""><i class="fab fa-telegram text-white"></i></a>
                </div>
            </div>
        </div>

    </section>
</template>

<style>
    .navbar-brand {
        color: rgb(207, 230, 53) !important;
        font-size: 40px !important;
        font-family: "Oleo Script Swash Caps",sans-serif;
    }
    nav {
        background: rgb(47, 3, 71);
    }
    .btn-login {
        margin-left: 555px !important;
        color: white !important;
    }
    .btn-login:hover {
        background: white !important;
        color: rgb(47, 3, 71) !important;
        font-weight: 700 !important;
        border-radius: 25px !important;
    }
    .navbar-toggler {
    outline: none;
    border: none;
    box-shadow: none !important;
    }
    .navbar-nav {
        display: inline-flex !important;
    }
    .fa-bars {
        color: white !important;
    }
    .btn-sign {
        background: white !important;
        font-weight: 700 !important;
        color: rgb(47, 3, 71);
        border-radius: 25px !important;
    }
    .b-list {
        list-style-type: none;
        text-align: left !important;
    }
    h2 {
        color: rgb(47, 3, 71);
    }
    .p-div {
        font-family: "Oleo Script Swash Caps",sans-serif;
    }
    .btn {
        transition: all 0.4s ease !important;
    }
    .nb-btn {
        color: rgb(191, 190, 190) !important;
    }
    .c-t-title {
        padding-top: 100px !important;
    }
    a {
        transition: all 0.4s ease !important;
    }
    .btn:hover {
        transform: translateY(-5px) !important;
    }
    .btn-main {
        background-color: white !important;
        border-radius: 25px !important;
        font-weight: 700 !important;
    }
    .col-div {
        margin-top: 70px !important;
        padding-top: 80px;
    }
    .h-div {
        font-size: 100px !important;
        font-family: "Roboto Slab", sans-serif;
    }
    .fb-list {
        margin-left: 100px;
    }
    .llbtn {
        color: rgb(207, 230, 53) !important;
        font-family: "Oleo Script Swash Caps",sans-serif !important;
    }
    .ex-section {
        background-image: url(/Local\ Disk/lpimg.jpg);
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-blend-mode: darken !important;
        background-color: rgba(47, 3, 71, 0.7);
        padding-bottom: 40px !important;
    }
    .col-btn {
        background: rgb(47, 3, 71) !important;
        color: white !important;
        border-radius: 25px !important;
    }
    .g-div {
        text-align: left !important;
    }
    .promo-section {
        padding-top: 150px;
    }
    .h-ex {
        color: rgb(164, 164, 164) !important;
    }
    .promo-title {
    font-family: "Rubik", sans-serif;
    font-weight: 900;
    font-size: 55px;
    }
    .img-fluid {
        margin-top: -50px;
    }
    #a-section {
        background-image: linear-gradient(rgb(248, 248, 248) 90%, white 2%);
        padding-bottom: 200px;
    } 
    .nav-section {
        position: sticky !important;
        top: 0;
        z-index: 10;
    }
    .last-section {
        background: rgb(47, 3, 71) !important;
        color: white !important;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .card {
        position: absolute;
        border: none !important;
        background: rgb(47, 3, 71) !important;
        color: white !important;
    }
    .down-section {
        background-image: url(/Local\ Disk/lpimg.jpg);
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-blend-mode: darken !important;
        background-color: rgba(47, 3, 71, 0.7);
        color: white !important;
        margin-top: 100px;
        padding-top: 70px;
        padding-bottom: 70px;
    }
    .icon {
        position: absolute;
        background: white;
        border-radius: 50%;
        color: rgb(47, 3, 71) !important;
        padding: 20px;
        padding-left: 23px;
        padding-right: 23px;
        margin-top: -45px;
    }
    .carousel-section {
        margin-top: 300px !important;
    }
    .card p {
        color: rgb(183, 182, 182) !important;
    }
    .c-col {
        transform: rotate(10deg);
    }
    .c-row {
        margin-top: 100px !important;
    }
    .d-row {
        margin-top: 100px !important
    }

    @media (max-width:748px) {
        .img-fluid {
            margin-top: -0px;
        }
        .g-div {
            text-align: center !important;
        }
        .h-div {
            font-size: 50px !important;
            font-family: "Roboto Slab", sans-serif;
        }
        .navbar-nav {
            display: none;
        }
        .c-col {
            transform:0;
        }
        .s-r-card {
            margin-top: 300px !important;
        }
        .t-r-card {
            margin-top: 300px !important;
        }
        .d-row {
            display: none !important;
        }
        .fb-list {
            margin-left: 0px;
        }
        .carousel-section {
        margin-top: 100px !important;
        }
        .btn-login {
            margin-left: 0px !important;
        }
    }
</style>


