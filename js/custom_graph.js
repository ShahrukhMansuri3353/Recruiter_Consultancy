$(document).ready(function(){

/**********|| Client Conversation Chart js Start ||**********/
$(function () { 
    Highcharts.chart('clientConversation', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28

            }
        },
        series: [{
            showInLegend: false,
            data: [45, 60, 48, 55, 65, 90],
            color: '#2264E6',
            borderColor: '#2264E6',
            borderRadius: 8 + 'px',
    
            states: {
                    hover: {
                        color: '#2B4EBE',
                        borderColor: '#2B4EBE'
                    },

                }
        }],
        legend: {
        showInLegend: false
        }
        
     });
   });

/**********|| Client Conversation Chart js End ||**********/

/**********|| clientLeads Chart js Start ||**********/
$(function () { 
    Highcharts.chart('clientLeads', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28
            },
            column: {
                stacking: 'normal',
                groupPadding: 0.1,
                pointPadding: 0,
                //pointWidth: 20,
              }
        },
        
        // series: [{
        //     showInLegend: false,
        //     data: [45, 40, 48, 35, 25, 80],
        //     data: [10, 20, 48, 35, 35, 10],
        //     color: '#2264E6',
        //     borderColor: '#2264E6',
        //     borderRadius: 8 + 'px',
    
        //     states: {
        //             hover: {
        //                 color: '#2B4EBE',
        //                 borderColor: '#2B4EBE'
        //             },

        //         }
        // }],
        series: [{
            showInLegend: false,
            data: [5, 3, 0,3,2,6],
            color: '#0AA807',
            borderColor: '#0AA807',
            borderRadius: 8 + 'px',
            zIndex: 2,
            states: {
                hover: {
                    color: '#047a02',
                    borderColor: '#047a02'
                },
            }
          }, {
            showInLegend: false,
            data: [2, 2, 5,4,3,1],
            color: '#2264E6',
            borderColor: '#2264E6',
            borderRadius: 8 + 'px',
            zIndex: 1,
            states: {
                            hover: {
                                color: '#2B4EBE',
                                borderColor: '#2B4EBE'
                            },
                        }
          }],
        
        
     });
   });

/**********|| clientLeads Chart js End ||**********/

/**********|| jdBased_Client Chart js Start ||**********/
$(function () { 
    Highcharts.chart('jdBased_Client', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28

            }
        },
        series: [{
            showInLegend: false,
            data: [20, 30, 70, 55, 65, 90],
            color: '#F454C7',
            borderColor: '#F454C7',
            borderRadius: 8 + 'px',
    
            states: {
                    hover: {
                        color: '#fd19bd',
                        borderColor: '#fd19bd'
                    },

                }
        }],
        legend: {
        showInLegend: false
        }
        
     });
   });

/**********|| jdBased_Client Chart js End ||**********/

/**********|| NoSourcing Chart js Start ||**********/
$(function () { 
    Highcharts.chart('NoSourcing', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28

            }
        },
        series: [{
            showInLegend: false,
            data: [60, 40, 48, 55, 20, 90],
            color: '#FFA048',
            borderColor: '#FFA048',
            borderRadius: 8 + 'px',
    
            states: {
                    hover: {
                        color: '#ff830f',
                        borderColor: '#ff830f'
                    },

                }
        }],
        legend: {
        showInLegend: false
        }
        
     });
   });

/**********|| NoSourcing Chart js End ||**********/
/**********|| Interview / Selection Chart js Start ||**********/
$(function () { 
    Highcharts.chart('inverviewSelection', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28
            },
            column: {
                stacking: 'normal',
                groupPadding: 0.1,
                pointPadding: 0,
                //pointWidth: 20,
              }
        },
    
        series: [{
            // showInLegend: false,
            name: 'Selection',
            data: [5, 3, 0,3,2,6],
            color: '#0AA807',
            borderColor: '#0AA807',
            borderRadius: 8 + 'px',
            zIndex: 2,
            states: {
                hover: {
                    color: '#047a02',
                    borderColor: '#047a02'
                },
            }
          }, {
            // showInLegend: false,
            name: 'Interview',
            data: [2, 2, 5,4,3,1],
            color: '#2264E6',
            borderColor: '#2264E6',
            borderRadius: 8 + 'px',
            zIndex: 1,
            states: {
                            hover: {
                                color: '#2B4EBE',
                                borderColor: '#2B4EBE'
                            },
                        }
          }],
          legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        
        
     });
   });

/**********|| Interview / Selection Chart js End ||**********/
/**********|| sorcingSelection Chart js Start ||**********/
$(function () { 
    Highcharts.chart('sorcingSelection', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28
            },
            column: {
                stacking: 'normal',
                groupPadding: 0.1,
                pointPadding: 0,
                //pointWidth: 20,
              }
        },
    
        series: [{
            // showInLegend: false,
            name: 'Selection',
            data: [5, 3, 0,3,2,6],
            color: '#FFA048',
            borderColor: '#FFA048',
            borderRadius: 8 + 'px',
            zIndex: 2,
            states: {
                hover: {
                    color: '#FFA048',
                    borderColor: '#FFA048'
                },
            }
          }, {
            // showInLegend: false,
            name: 'Interview',
            data: [2, 2, 5,4,3,1],
            color: '#2264E5',
            borderColor: '#2264E5',
            borderRadius: 8 + 'px',
            zIndex: 1,
            states: {
                            hover: {
                                color: '#2B4EBE',
                                borderColor: '#2B4EBE'
                            },
                        }
          }],
          legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        
        
     });
   });

/**********|| sorcingSelection Chart js End ||**********/

/**********|| interviewSelection Chart js Start ||**********/
$(function () { 
    Highcharts.chart('interviewSelection', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28
            },
            column: {
                stacking: 'normal',
                groupPadding: 0.1,
                pointPadding: 0,
                //pointWidth: 20,
              }
        },
    
        series: [{
            // showInLegend: false,
            name: 'Selection',
            data: [5, 3, 0,3,2,6],
            color: '#4B85FA',
            borderColor: '#4B85FA',
            borderRadius: 8 + 'px',
            zIndex: 2,
            states: {
                hover: {
                    color: '#4B85FA',
                    borderColor: '#4B85FA'
                },
            }
          }, {
            // showInLegend: false,
            name: 'Interview',
            data: [2, 2, 5,4,3,1],
            color: '#F454C7',
            borderColor: '#F454C7',
            borderRadius: 8 + 'px',
            zIndex: 1,
            states: {
                            hover: {
                                color: '#F454C7',
                                borderColor: '#F454C7'
                            },
                        }
          }],
          legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        
        
     });
   });

/**********|| interviewSelection Chart js End ||**********/

/**********|| selectionJoining Chart js Start ||**********/
$(function () { 
    Highcharts.chart('selectionJoining', {
        chart: {
            type: 'column',
            height: 300 + 'px',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',"Client 6"],
            // crosshair: true,
            labels: {
                rotation: -45
            },
            gridLineColor: '#464e5f0d',
            tickWidth: 0,
            tickLength: 0,
            tickPixelInterval: 21,
            lineColor: '#464e5f0d'	
        }],
        yAxis:[{
            tickPixelInterval: 61,
            gridLineColor: '#464e5f0d',
            title: {
                text: null
            },
            lineColor: '#464e5f0d',
            lineWidth: 1
            
            // crosshair: true
        }],
        
        plotOptions: {
            series: {
                borderRadius: 8,
                pointWidth: 28
            },
            column: {
                stacking: 'normal',
                groupPadding: 0.1,
                pointPadding: 0,
                //pointWidth: 20,
              }
        },
    
        series: [{
            // showInLegend: false,
            name: 'Selection',
            data: [5, 3, 0,3,2,6],
            color: '#FFA048',
            borderColor: '#FFA048',
            borderRadius: 8 + 'px',
            zIndex: 2,
            states: {
                hover: {
                    color: '#FFA048',
                    borderColor: '#FFA048'
                },
            }
          }, {
            // showInLegend: false,
            name: 'Interview',
            data: [2, 2, 5,4,3,1],
            color: '#4B85FA',
            borderColor: '#4B85FA',
            borderRadius: 8 + 'px',
            zIndex: 1,
            states: {
                            hover: {
                                color: '#4B85FA',
                                borderColor: '#4B85FA'
                            },
                        }
          }],
          legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        
        
     });
   });

/**********|| selectionJoining Chart js End ||**********/

});
