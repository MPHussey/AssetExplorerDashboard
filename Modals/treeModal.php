<!-- Modal add customer department--- -->
<div class="modal fade" id="tree-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                           <div class="modal-header-frame">
                               <h5 class="modal-title" id="tree-modal-title"></h5>
                               <div class="export-excel-section">
                                   <form action="excel_Gen.php" method="post">
                                       <input name="excel-values" class="excel-values"  type="hidden">
                                       <button title="Explort Model List" type="submit" class="excel-gen-fire"><img style="width:30px;height:30px;margin-bottom:5px" src="./imgs/icons8-xls-48.png" alt="excel"><br/><span>Explort Model List</span></button>
                                   </form>
                               </div>
                               <div class="export-user-section">
                                   <form action="excel_user_Gen.php" method="post">
                                       <input name="excel-user-values" class="excel-user-values"  type="hidden">
                                       <button title="Export Asset User List" type="submit" class="excel-gen-fire"><img style="width:30px;height:30px;margin-bottom:5px" src="./imgs/icons8-xls-48.png" alt="excel"><br/><span>Export Asset User List</span></button>
                                   </form>
                               </div>

                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="modal-table-outerframe">
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
    </div>
</div>
