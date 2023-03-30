
<html>
<head>
    <title>ASSET EXPLORER</title>
    <link rel="stylesheet" href="css/index-Style.css">
    <link rel="stylesheet" href="js/treantJS/Treant.css">
    <!--------Jquery and Bootstrap CDN----->

    <script src="vendor_libraries/jquery/jquery-3.6.0.min.js" ></script>

    <link rel="stylesheet" href="vendor_libraries/bootstrap4.6/css/bootstrap.min.css">

    <!--<link href="vendor_libraries/responsive.dataTables.min.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet" />--->





</head>
<body>
<div class="main-controller-frame">
    <div id="overlay"></div>
    <div id="collapse-navigation">
        <div class="container-fluid">
            <?php include 'Templates/collapse-nav.php';?>
        </div>
    </div>
    <div class="dashboard-main-frame">
        <div class="dashboard-left-navbar">
            <div class="container-fluid">
                <?php include 'Templates/main-nav.php';?>
            </div>
        </div>
        <div class="dashboard-main-panel">
            <div class="dashboard-inner-frame">
                <div class="section-1">
                    <div class="container-fluid">
                        <div class="section-1-content">
                            <div class="menu-section"><img src="imgs/menu.png" alt="menu"></div>
                            <h1>Dashboard</h1>
                            <span>Welcome</span>
                        </div>
                    </div>
                </div>
                <div class="section-2">
                    <div class="container-fluid">
                        <div class="section-2-content">
                            <h2>Welcome To Asset Explorer</h2>
                        </div>
                    </div>
                </div>
                <div class="section-3">
                    <?php include 'Templates/view-panel-1.php';?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'Modals/treeModal.php';?>


<!-------JQuery CDN--->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<!-- Bootstrap JS -->

<script src="vendor_libraries/bootstrap4.6/js/bootstrap.min.js"></script>
<script src="js/index-script.js"></script>
<script src="js/page-navigation.js"></script>


<!---<script src="https://cdn.jsdelivr.net/npm/luxon@1.26.0/build/global/luxon.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>--->
<script src="js/treantJS/vendor/raphael.js"></script>
<script src="js/treantJS/Treant.js"></script>
<script src="vendor_libraries/chart.min.js"></script>
<!--<script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>--->



<script src="js/index.js"></script>
<script src="js/multiPieChart.js"></script>

</body>
</html>
