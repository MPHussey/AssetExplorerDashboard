$(document).ready(function(){
    var division_count = function () {
        var tmp =null;
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'url': "backend/get_total_division_assignments.php",
            'data': { },
            'success': function (data) {
                tmp = data;

            }
        });
        return tmp;
    }();

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var randomColor=[
        '#c12409',
        '#6c3474',
        '#40c04c',
        '#d9840f',
        '#08bc80',
        '#ddb811',
        '#3ae374',
        '#ff5252',
        '#26D7AE',
        '#2c3e50',
        '#5FB7D4',
        '#fff200',
        '#007ED6',
        '#8399EB',
        '#8E6CEF'
    ];


    var convertedData=JSON.parse(division_count);
    var labels=[];
    var counts=[];

    for(var i in convertedData){

            labels.push(convertedData[i].division);


        counts.push(convertedData[i].count);
    }

    var data = {
        datasets: [{
            data:counts,
            backgroundColor:randomColor
        }],
        labels:labels
    };
    /*-------Main Pie Chart----------*/
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myNewChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options:{
            plugins:{
                legend:{
                    position:"right",
                    labels:{
                        generateLabels: (chart) => {
                            const datasets = chart.data.datasets;
                            return datasets[0].data.map((data, i) => ({

                                text: `${chart.data.labels[i].length>18?chart.data.labels[i].substring(0,15)+"...":chart.data.labels[i]} (${data}) `,
                                fillStyle: datasets[0].backgroundColor[i],
                            }))
                        }
                    }
                },
                title:{
                    display:true,
                    text:"Divisional Total Assignment",
                    padding:{
                        top:20,
                    },
                    font:{
                        size:20
                    }
                }
            }
        }
    });


    function clickHandler(click){

        const points=myNewChart.getElementsAtEventForMode(click,'nearest',{intersect:true},true);
        if(points[0]){
            const dataset=points[0].datasetIndex;
            const index=points[0].index;
            const labels=myNewChart.data.labels[index];
            const value=myNewChart.data.datasets[dataset].data[index];

            $.ajax({
                'async': false,
                'type': "POST",
                'global': false,
                url:"backend/divisional_assignment_view.php",
                data:{division:labels},
                cache:false,
                success:function(data){
                    var convertedData=JSON.parse(data);
                    console.log(convertedData);
                   $('#myChart-1').remove();
                   $('#donut-outer-frame').append('<canvas id="myChart-1"></canvas>');
                    var color_palette=[
                        '#FFCE56',
                        '#FE7090',
                        '#36A2AB',
                        '#ff3838',
                        '#d35400',
                        '#36A2EB',
                        '#004C4C',
                        '#3ae374',
                        '#fff200',
                        '#7158e2'

                    ]
                    var backgrounds=[];
                    var count=[];
                    var category=[];
                    var division=convertedData[0]["division"];
                    for(var i in convertedData){
                        count.push(convertedData[i]["count"]);
                        category.push(convertedData[i]["category"]);
                        backgrounds.push(color_palette[i]);
                    }
                    console.log(category);
                    console.log(count);

                    //setup block
                    const data_nut = {
                        labels:category,
                        datasets: [{
                            label: 'My First Dataset',
                            data:count,
                            backgroundColor:backgrounds,
                            hoverOffset: 4,
                            cutout:'70%'
                        }]
                    };

                    //counter plugin
                    const centerText={
                        id:'centerText',
                        afterDatasetsDraw(chart,args,options){
                            var edited_division='';
                            if(division.length>15){
                                edited_division=division.substring(0,12)+"...";
                            }else{
                                edited_division=division;
                            }
                            const {ctx,chartArea:{left,right,top,bottom,width,height}}=chart;
                            ctx.save();

                            ctx.font='bolder 12px Arial';
                            ctx.fillStyle= '#2d3436';
                            ctx.textAlign='center';
                            ctx.fillText(edited_division,width/2,height/2+top);
                        }
                    };


                    //config block
                    const config={
                        type: 'doughnut',
                        data: data_nut,
                        options:{
                            plugins:{
                                legend:{
                                    position:"right",
                                    labels:{
                                        generateLabels: (chart) => {
                                            const datasets = chart.data.datasets;
                                            return datasets[0].data.map((data, i) => ({
                                                text: `${chart.data.labels[i]}  (${data})`,
                                                fillStyle: datasets[0].backgroundColor[i],
                                            }))
                                        }
                                    }
                                },
                                title:{
                                    display:true,
                                    text:'Division wise categories',
                                    padding:{
                                        top:20,
                                        bottom:160,
                                    },
                                    font:{
                                        size:20
                                    }
                                },
                            }
                        },
                        plugins:[centerText]
                    };


                    const myNewChart_1=new Chart(
                        document.getElementById("myChart-1"),config
                    );

                    //console.log(count);
                    //console.log(category);
                    console.log(backgrounds);




                   /* var myNewChart_1 = new Chart(ctx_1, {
                        type: 'doughnut',
                        data: data_nut,
                        options:{
                            plugins:{
                                legend:{
                                    position:"right"
                                },
                                title:{
                                    display:true,
                                    text:'Division wise categories('+division+')',
                                    padding:{
                                        top:20,
                                        bottom:160,
                                    }
                                }
                            }
                        }
                    });*/

                }
            })
        }
    }

    myNewChart.canvas.onclick=clickHandler;


    /*-----Donut Chart-----*/


    var onload_donut_data=function(){
        var temp=null;
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            url:"backend/divisional_assignment_view.php",
            data:{division:'CARGO'},
            cache:false,
            success:function(data){
                var convertedData=JSON.parse(data);
                temp=convertedData;
            }
        })
        return temp;
    }();


    create_dougnutChart(onload_donut_data);
    function create_dougnutChart(onload_donut_data){

        var color_palette=[
            '#FFCE56',
            '#FE7090',
            '#36A2AB',
            '#ff3838',
            '#d35400',
            '#36A2EB',
            '#004C4C',
            '#3ae374',
            '#fff200',
            '#7158e2'
        ]
        var backgrounds=[];
        var count=[];
        var category=[];
        var division=onload_donut_data[0]["division"];
        for(var i in onload_donut_data){
            count.push(onload_donut_data[i]["count"]);
            category.push(onload_donut_data[i]["category"]);
            backgrounds.push(color_palette[i]);
        }

        //setup block
        const data_nut = {
            labels:category,
            datasets: [{
                label: 'My First Dataset',
                data:count,
                backgroundColor:backgrounds,
                hoverOffset: 4,
                cutout:'70%'
            }]
        };

        //counter plugin
        const centerText={
            id:'centerText',
            afterDatasetsDraw(chart,args,options){
                var edited_division='';
                if(division.length>15){
                    edited_division=division.substring(0,12)+"...";
                }else{
                    edited_division=division;
                }
                const {ctx,chartArea:{left,right,top,bottom,width,height}}=chart;
                ctx.save();

                ctx.font='bolder 12px Arial';
                ctx.fillStyle= '#2d3436';
                ctx.textAlign='center';
                ctx.fillText(edited_division,width/2,height/2+top);
            }
        };


        //config block
        const config={
            type: 'doughnut',
            data: data_nut,
            options:{
                plugins:{
                    legend:{
                        position:"right",
                        labels:{
                            generateLabels: (chart) => {
                                const datasets = chart.data.datasets;
                                return datasets[0].data.map((data, i) => ({
                                    text: `${chart.data.labels[i]}  (${data})`,
                                    fillStyle: datasets[0].backgroundColor[i],
                                }))
                            }
                        }

                    },
                    title:{
                        display:true,
                        text:'Division wise categories',
                        padding:{
                            top:20,
                            bottom:160,
                        },
                        font:{
                            size:20
                        }
                    },
                }
            },
            plugins:[centerText]
        };

        //render block
        const myNewChart_1=new Chart(
            document.getElementById("myChart-1"),config
        );



    }






})
