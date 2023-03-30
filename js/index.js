$(document).ready(function(){
    getDivisionCount();
    getTotalAssetCount();
    function getDivisionCount(){
        $.ajax({
            type:"POST",
            url:"backend/get_divisions.php",
            data:{},
            cache:false,
            success:function(data){
                var convertedData=JSON.parse(data);
                var divisionCount=convertedData.length;
                $('.total-division-count').html(divisionCount);
                var template='';
                for(var i in convertedData){
                    template+='<option value="'+convertedData[i]+'">'+convertedData[i]+'</option>';
                }

                $('#select-division').html(template);
            }

        });
    }

    getTotalUserCount();
    /*------get total user count---*/
    function getTotalUserCount(){
        $.ajax({
            type:"POST",
            url:"backend/total_user_cout.php",
            data:{},
            cache:false,
            success:function(data){
                $('.total-user-count').html(data);

            }

        });
    }

    /*---Get Total Asset Count---*/

    function getTotalAssetCount(){
        $.ajax({
            type:"POST",
            url:"backend/get_total_assets.php",
            data:{},
            cache:false,
            success:function(data){
                $('.total-asset-count').html(data);

            }

        });
    }


    /*-----Get Divisional Assignment---*/
    onload_divisional_assignment();
    function onload_divisional_assignment(){
        var division="AIRPORT AND GROUND SERVICES";
        tree_builder(division);
        //selected_modals(division);
        /*
        $.ajax({
            type:"POST",
            url:"Backend/divisional_assignment_view.php",
            cache:false,
            data:{division:division},
            success:function(data){
                var convertedData=JSON.parse(data);
                var division='';
                //console.log(convertedData);
                if(convertedData[0]["division"].length>25){
                    division=convertedData[0]["division"].substring(0,25)+"...";
                }else{
                    division=convertedData[0]["division"];
                }

                var it_laptops=0;
                var kbsl_laptops=0;
                var total_laptops=0;
                var it_desktops=0;
                var kbsl_desktops=0;
                var total_desktops=0;
                var thin_clients=0;
                var zero_clients=0;
                var divisional_total=0;
                for(var i in convertedData){
                    if(convertedData[i]["category"]=="Laptop(IT)"){
                        it_laptops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Laptop(ULKBL)"){
                        kbsl_laptops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Desktop(IT)"){
                        it_desktops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Desktop(ULKBP)"){
                        kbsl_desktops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Thin Client"){
                        thin_clients=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Zero Client"){
                        zero_clients=convertedData[i]["count"];
                    }
                }

                total_laptops=parseInt(it_laptops)+parseInt(kbsl_laptops);
                total_desktops=parseInt(it_desktops)+parseInt(kbsl_desktops);
                divisional_total=total_laptops+total_desktops+parseInt(zero_clients)+parseInt(thin_clients);
                var simple_chart_config = {
                    chart: {
                        container: "#OrganiseChart-simple",
                        rootOrientation:"WEST"
                    },
                    nodeStructure: {
                        text: { name: ""+division+" : "+divisional_total },
                        children: [
                            {
                                text: { name: "Zero Clients : "+zero_clients }
                            },
                            {
                                text: { name: "Laptops : "+total_laptops },
                                children:[
                                    {
                                        text:{name:"UL Laptops : "+it_laptops}
                                    },
                                    {
                                        text:{name:"KBSL Laptops : "+kbsl_laptops}
                                    }
                                ]
                            },
                            {
                                text: { name: "Desktops : "+total_desktops},
                                children:[
                                    {
                                        text:{name:"UL Desktops : "+it_desktops}
                                    },
                                    {
                                        text:{name:"KBSL Desktops : "+kbsl_desktops}
                                    }
                                ]
                            },
                            {
                                text: { name: "Thin Clients : "+thin_clients}
                            }
                        ]
                    }
                };
                new Treant( simple_chart_config );

            }
        })

         */
    }

    /*----Generate Tree by selection------*/
    $('#select-division').on('change',function(){
        var division=$('#select-division').val();
        tree_builder(division);
        //selected_modals(division);
    })

    /*
    * <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                               <td>05 May 2013</td>
                                               <td>Credit Account</td>
                                           </tr>
                                           <tr>
                                               <td colspan="6" class="hiddenRow">
                                                   <div class="accordian-body collapse" id="demo1">
                                                       <p>fjdsfjsd</p>
                                                       <p>djhsfkhds</p>
                                                   </div>
                                               </td>
                                           </tr>
    * */



    function tree_builder(division){
        $.ajax({
            type:"POST",
            url:"Backend/divisional_assignment_view.php",
            cache:false,
            data:{division:division},
            success:function(data){
                var convertedData=JSON.parse(data);
                var division='';

                if(convertedData[0]["division"].length>25){
                    //division=convertedData[0]["division"].substring(0,25)+"...";
                    division=convertedData[0]["division"];
                }else{
                    division=convertedData[0]["division"];
                }

                var it_laptops=0;
                var kbsl_laptops=0;
                var total_laptops=0;
                var it_desktops=0;
                var kbsl_desktops=0;
                var total_desktops=0;
                var thin_clients=0;
                var zero_clients=0;
                var divisional_total=0;
                var printer=0;
                var scanners=0;
                var tablets=0;
                var ip_phones=0;
                for(var i in convertedData){
                    if(convertedData[i]["category"]=="Laptop(IT)"){
                        it_laptops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Laptop(ULKBL)"){
                        kbsl_laptops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Desktop(IT)"){
                        it_desktops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Desktop(ULKBP)"){
                        kbsl_desktops=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Thin Client"){
                        thin_clients=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Zero Client"){
                        zero_clients=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Printer"){
                        printer=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Scanners"){
                        scanners=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="Tablet"){
                        tablets=convertedData[i]["count"];
                    }
                    if(convertedData[i]["category"]=="IP Phone"){
                        ip_phones=convertedData[i]["count"];
                    }


                }

                total_laptops=parseInt(it_laptops)+parseInt(kbsl_laptops);
                total_desktops=parseInt(it_desktops)+parseInt(kbsl_desktops);
                divisional_total=total_laptops+total_desktops+parseInt(zero_clients)+parseInt(thin_clients)+parseInt(ip_phones)+parseInt(scanners)+parseInt(tablets)+parseInt(printer);
                var treeChildrenMapping=[];

                /*----Mapping IP Phones------*/
                if(ip_phones!=0){
                    treeChildrenMapping.push({
                        text: { name: "IP Phones : "+ip_phones }
                    });
                }

                /*-----Mapping Tablets------*/
                if(tablets!=0){
                    treeChildrenMapping.push({
                        text: { name: "Tablets : "+tablets }
                    });
                }

                /*----Mapping Scanners-------*/
                if(scanners!=0){
                    treeChildrenMapping.push({
                        text: { name: "Scanners : "+scanners }
                    });
                }
                /*-----Mapping Printers-------*/
                if(printer!=0){
                    treeChildrenMapping.push({
                        text: { name: "Printers : "+printer }
                    });
                }

                /*------Mapping Zero Clients---*/
                if(zero_clients!=0){
                    treeChildrenMapping.push({
                        text: { name: "Zero Clients : "+zero_clients }
                    });
                }

                /*---Mapping Thin Clients----*/
                if(thin_clients!=0){
                    treeChildrenMapping.push({
                        text: { name: "Thin Clients : "+thin_clients}
                    });
                }

                /*------Mapping All Laptops-----*/

                if(total_laptops!=0 && it_laptops!=0 && kbsl_laptops!=0){
                    treeChildrenMapping.push( {
                            text: { name: "Laptops : "+total_laptops },
                            children:[
                                {
                                    text:{name:"Laptop(IT) : "+it_laptops}
                                },
                                {
                                    text:{name:"Laptop(ULKBL) : "+kbsl_laptops}
                                }
                            ]
                        });
                }

                if(total_laptops!=0 && it_laptops==0 && kbsl_laptops!=0){
                    treeChildrenMapping.push( {
                        text: { name: "Laptops : "+total_laptops },
                        children:[
                            {
                                text:{name:"Laptop(ULKBL) : "+kbsl_laptops}
                            }
                        ]
                    });
                }

                if(total_laptops!=0 && it_laptops!=0 && kbsl_laptops==0){
                    treeChildrenMapping.push( {
                        text: { name: "Laptops : "+total_laptops },
                        children:[
                            {
                                text:{name:"Laptop(IT) : "+it_laptops}
                            }
                        ]
                    });
                }

                /*---Map Desktops-------*/
                if(total_desktops!=0 && it_desktops!=0 && kbsl_desktops!=0){
                    treeChildrenMapping.push( {
                        text: { name: "Desktops : "+total_desktops},
                        children:[
                            {
                                text:{name:"Desktop(IT) : "+it_desktops}
                            },
                            {
                                text:{name:"Desktop(ULKBP) : "+kbsl_desktops}
                            }
                        ]
                    });
                }

                if(total_desktops!=0 && it_desktops==0 && kbsl_desktops!=0){
                    treeChildrenMapping.push( {
                        text: { name: "Desktops : "+total_desktops},
                        children:[
                            {
                                text:{name:"Desktop(ULKBP) : "+kbsl_desktops}
                            }
                        ]
                    });
                }

                if(total_desktops!=0 && it_desktops!=0 && kbsl_desktops==0){
                    treeChildrenMapping.push( {
                        text: { name: "Desktops : "+total_desktops},
                        children:[
                            {
                                text:{name:"Desktop(IT) : "+it_desktops}
                            }
                        ]
                    });
                }



                var simple_chart_config = {
                    chart: {
                        container: "#OrganiseChart-simple",
                        rootOrientation:"WEST",
                        levelSeparation:170,
                        animateOnInit: true,

                        node: {
                            collapsable: false
                        },
                        animation: {
                            nodeAnimation: "easeOutBounce",
                            nodeSpeed: 500,
                            connectorsAnimation: "bounce",
                            connectorsSpeed: 400
                        },
                        callback: {
                            onTreeLoaded: function() {
                                const $oNodes = $( '.chart .node' );
                                $oNodes.on('click', function (oEvent) {
                                        const $oNode = $(this).text();
                                        //console.log($oNode);
                                    get_current_tree_division($oNode)
                                    $('#tree-modal').modal("show");
                                    }
                                );
                            }
                        },
                    },
                    nodeStructure: {
                        text: {
                            name: ""+division+" : "+divisional_total,
                        },
                        children:treeChildrenMapping
                    }
                };
                new Treant( simple_chart_config );

            }
        })
    }





    /*-----Tree Modal Handle Section----*/
    var divisions = function () {
        var tmp =null;
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'url': "backend/get_divisions.php",
            'data': { },
            'success': function (data) {
                tmp = JSON.parse(data);

            }
        });
        return tmp;
    }();



    function get_current_tree_division($oNode){
        var selection_val=$('#select-division').val();
        //selected_modals(division);
        for(var i in divisions){
            if(divisions[i].includes(selection_val)){
                selected_modals(divisions[i],$oNode,selection_val);
            }
        }
    }


     function get_user_list(division,category){
        $.ajax({
            'type': "POST",
            'url': "backend/get_modal_user_list.php",
            'data': {division:division,
            category:category},
            'success': function (data) {

                var convertedData = JSON.parse(data);
                console.log(convertedData);
                $('.excel-user-values').val(JSON.stringify(convertedData));

            }
        });
    };





    function selected_modals(division,$oNode,selection_val){

        get_user_list(division,$oNode);

        $.ajax({
            type:"POST",
            url:"Backend/get_modal_category.php",
            data:{division:division},
            cache:false,
            success:function(data){
                var convertedData=JSON.parse(data);

                var categoryArr=[];

                for(var i in convertedData){
                    categoryArr.push(convertedData[i]["category"]);
                }
                var unique = categoryArr.filter((item, i, ar) => ar.indexOf(item) === i);
                console.log(convertedData);
                console.log(unique);
                console.log($oNode);
                var excel_get_arr=[];
                var template='';
                if($oNode.includes(selection_val)){
                    for(var a in unique){
                        template+='  <tr data-toggle="collapse" data-target="#demo'+a+'" class="accordion-toggle row-heading">\n' +
                            '                                            <td>'+unique[a]+'</td>\n' +
                            '                                            <td><img style="width:15px;height:15px" src="./imgs/icons8-drop-down-26.png" alt="dropdown"></td>\n' +
                            '                                        </tr>\n' +
                            '                                        <tr>\n' +
                            '                                            <td colspan="6" class="hiddenRow">\n' +
                            '                                                <div  class="accordian-body collapse mini-class" id="demo'+a+'">';
                        for(var b in convertedData){
                            if(convertedData[b]["category"]==unique[a]){
                                excel_get_arr.push({"category":convertedData[b]["category"],"modal":convertedData[b]["modal"],"count":convertedData[b]["count"]});
                                template+='<div style="display: flex;width:100%;">';
                                template+=' <p style="width:50%">'+convertedData[b]["modal"]+'</p>';
                                template+=' <p style="width:50%">'+convertedData[b]["count"]+'</p>';
                                template+='</div>';

                            }
                        }
                        template+=' </div>\n' +
                            '                                            </td>\n' +
                            '                                        </tr>';
                    }
                    $('#tree-modal-title').html("Division : "+toTitleCase(selection_val));
                    if($('.excel-values').val()!=""){
                        $('.excel-values').val("");
                    }
                    $('.excel-values').val(JSON.stringify(excel_get_arr));

                }else if($oNode.includes("Laptops")){


                    for(var a in unique){
                        if(unique[a]=="Laptop(ULKBL)" || unique[a]=="Laptop(IT)"){
                            template+='  <tr data-toggle="collapse" data-target="#demo'+a+'" class="accordion-toggle row-heading">\n' +
                                '                                            <td>'+unique[a]+'</td>\n' +
                                '                                            <td><img style="width:15px;height:15px" src="./imgs/icons8-drop-down-26.png" alt="dropdown"></td>\n' +
                                '                                        </tr>\n' +
                                '                                        <tr>\n' +
                                '                                            <td colspan="6" class="hiddenRow">\n' +
                                '                                                <div  class="accordian-body collapse mini-class" id="demo'+a+'">';
                            for(var b in convertedData){
                                if(convertedData[b]["category"]==unique[a]){
                                    excel_get_arr.push({"category":convertedData[b]["category"],"modal":convertedData[b]["modal"],"count":convertedData[b]["count"]});
                                    template+='<div style="display: flex;width:100%;">';
                                    template+=' <p style="width:50%">'+convertedData[b]["modal"]+'</p>';
                                    template+=' <p style="width:50%">'+convertedData[b]["count"]+'</p>';
                                    template+='</div>';

                                }
                            }
                            template+=' </div>\n' +
                                '                                            </td>\n' +
                                '                                        </tr>';
                        }
                        $('#tree-modal-title').html("Division : "+toTitleCase(selection_val)+"&nbsp;&nbsp;|&nbsp;&nbsp;Category : Laptops");
                        if($('.excel-values').val()!=""){
                            $('.excel-values').val("");
                        }
                        $('.excel-values').val(JSON.stringify(excel_get_arr));

                    }

                }else if($oNode.includes("Desktops")){

                    for(var a in unique){
                        if(unique[a]=="Desktop(ULKBP)" || unique[a]=="Desktop(IT)"){
                            template+='  <tr data-toggle="collapse" data-target="#demo'+a+'" class="accordion-toggle row-heading">\n' +
                                '                                            <td>'+unique[a]+'</td>\n' +
                                '                                            <td><img style="width:15px;height:15px" src="./imgs/icons8-drop-down-26.png" alt="dropdown"></td>\n' +
                                '                                        </tr>\n' +
                                '                                        <tr>\n' +
                                '                                            <td colspan="6" class="hiddenRow">\n' +
                                '                                                <div  class="accordian-body collapse mini-class" id="demo'+a+'">';
                            for(var b in convertedData){
                                if(convertedData[b]["category"]==unique[a]){
                                    excel_get_arr.push({"category":convertedData[b]["category"],"modal":convertedData[b]["modal"],"count":convertedData[b]["count"]});
                                    template+='<div style="display: flex;width:100%;">';
                                    template+=' <p style="width:50%">'+convertedData[b]["modal"]+'</p>';
                                    template+=' <p style="width:50%">'+convertedData[b]["count"]+'</p>';
                                    template+='</div>';

                                }
                            }
                            template+=' </div>\n' +
                                '                                            </td>\n' +
                                '                                        </tr>';
                        }
                        $('#tree-modal-title').html("Division : "+toTitleCase(selection_val)+"&nbsp;&nbsp;|&nbsp;&nbsp;Category : Desktops");
                        if($('.excel-values').val()!=""){
                            $('.excel-values').val("");
                        }
                        $('.excel-values').val(JSON.stringify(excel_get_arr));

                    }
                }else{
                    for(var a in unique){

                        if($oNode.includes(unique[a])){
                            template+='  <tr data-toggle="collapse" data-target="#demo'+a+'" class="accordion-toggle row-heading">\n' +
                                '                                            <td>'+unique[a]+'</td>\n' +
                                '                                            <td><img style="width:15px;height:15px" src="./imgs/icons8-drop-down-26.png" alt="dropdown"></td>\n' +
                                '                                        </tr>\n' +
                                '                                        <tr>\n' +
                                '                                            <td colspan="6" class="hiddenRow">\n' +
                                '                                                <div  class="accordian-body collapse mini-class" id="demo'+a+'">';
                            for(var b in convertedData){
                                if(convertedData[b]["category"]==unique[a]){
                                    excel_get_arr.push({"category":convertedData[b]["category"],"modal":convertedData[b]["modal"],"count":convertedData[b]["count"]});
                                    template+='<div style="display: flex;width:100%;">';
                                    template+=' <p style="width:50%">'+convertedData[b]["modal"]+'</p>';
                                    template+=' <p style="width:50%">'+convertedData[b]["count"]+'</p>';
                                    template+='</div>';

                                }
                            }
                            template+=' </div>\n' +
                                '                                            </td>\n' +
                                '                                        </tr>';
                            $('#tree-modal-title').html("Division : "+toTitleCase(selection_val)+"&nbsp;&nbsp;|&nbsp;&nbsp;Category : "+unique[a]);
                            if($('.excel-values').val()!=""){
                                $('.excel-values').val("");
                            }
                            $('.excel-values').val(JSON.stringify(excel_get_arr));
                        }

                    }
                }
                function toTitleCase(str) {
                    return str.replace(
                        /\w\S*/g,
                        function(txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }
                    );
                }


                $('.model-view-body').html(template);




            }
        })
    }


    /*------Excel Get Fire------*/





})
