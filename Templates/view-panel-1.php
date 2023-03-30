<div style="display: none"  class="view-panel-1">
    <div class="container-fluid">

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="summary-card card-total-assets">
                        <div class="summary-card-img">
                            <img class="responsive" height="55px" src="./imgs/icons8-monitor-50.png" alt="users">
                        </div>
                        <div class="summary-card-count">
                            <p class="total-asset-count"></p>
                        </div>
                        <div class="summary-card-text">
                            <p><span style="font-size: 15px;color: black">Total</span><br>Assets</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="summary-card card-total-divisions">
                        <div class="summary-card-img">
                            <img class="responsive" height="55px" src="./imgs/icons8-company-55.png" alt="user">
                        </div>
                        <div class="summary-card-count">
                            <p class="total-division-count"></p>
                        </div>
                        <div class="summary-card-text">
                            <p><span style="font-size: 15px;color: black">Total</span><br>Divisions</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="summary-card card-total-users">
                        <div class="summary-card-img">
                            <img class="responsive" height="48px" src="./imgs/icons8-user-account-55.png" alt="user">
                        </div>
                        <div class="summary-card-count">
                            <p class="total-user-count">...</p>
                        </div>
                        <div class="summary-card-text">
                            <p><span style="font-size: 15px;color: black">Total</span><br>Users</p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="contact-card">
                    <div class="contact-header">
                        <p><span style="color: black;font-weight: 500;">Total</span><br>Assignment</p>
                        <!--<div class="search-section">
                            <input class="form-control" type="text" name="employee-search" id="employee-search" placeholder="Search Employee...">
                        </div>--->
                    </div>
                    <div class="contact-body multi-piechart">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div style="width:100%; height:250px">
                                        <canvas id="myChart"></canvas>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div id="donut-outer-frame" style="width:100%; height:250px">
                                        <canvas id="myChart-1"></canvas>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-card">
                        <div class="contact-header">
                            <p><span style="color: black;font-weight: 500;">Divisional</span><br>Assignments</p>
                            <div class="search-section">
                                <!--<input class="form-control" type="text" name="employee-search" id="employee-search" placeholder="Search Employee...">-->
                                <select class="form-control" id="select-division">

                                </select>
                            </div>
                        </div>
                        <div class="contact-body divisional-tree">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="chart" id="OrganiseChart-simple">
                                </div>
                            </div>

                        </div>


                        </div>
                    </div>
                </div>
<!--
                <div class="col-lg-5">
                    <div class="contact-card">
                        <div class="contact-header">
                            <p><span style="color: black;font-weight: 500;">Divisional</span><br>Assignments in more detail</p>
                        </div>
                        <div class="contact-body table-view">
                           <div class="container">
                               <div class="row">
                                   <div class="col-lg-12">

                                       <table class="table table-condensed" style="border-collapse:collapse;">
                                           <thead>
                                           </thead>
                                           <tbody class="model-view-body">
                                           </tbody>
                                       </table>
                                   </div>

                               </div>
                           </div>


                        </div>
                    </div>
                </div>
--->
            </div>



    </div>
</div>
