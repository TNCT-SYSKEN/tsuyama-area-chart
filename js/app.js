(function(){
  // environmentContainer
  var enviro_chart = new CanvasJS.Chart("environmentContainer",
  {
    title: {
    text: "二酸化炭素増加比"
    },
    data: [{
      type: "column",
      dataPoints: [
        {label: "津山市", y: 5.27},
        {label: "岡山県", y: 73.91751132}
      ]}
    ]
  });
  enviro_chart.render();

  // percentage
  var all_Property = 55677318.8*100;

  var proprietary_Property = [
     { label: "本庁舎",  y: 21238.57  },
     { label: "その他の行政機関", y: 27962.47  },
     { label: "学校", y: 728109.17  },
     { label: "公営住宅",  y: 182275.41  },
     { label: "公園",  y: 3452579.57  },
     { label: "その他の施設",  y: 2261573.55  },
     { label: "宅地建物",  y: 130170.16  },
     { label: "田畑",  y: 640387.13  },
     { label: "山林",  y: 47795499.99  },
     { label: "原野",  y: 50716.63  },
     { label: "雑種地",  y: 164936.99  },
     { label: "墓地",  y:  10154.16 },
     { label: "池沼",  y: 211715  }
   ];
   for(var i = 0; i < proprietary_Property.length; i++){
     proprietary_Property[i].y = proprietary_Property[i].y / all_Property;
   }
    var percent_chart = new CanvasJS.Chart("percentContainer", {
      title:{
        text: "津山市私有財産割合"
      },
      animationEnabled: false,
       data : [{
        type: "pie",
        dataPoints: proprietary_Property
      }]
    });

    percent_chart.render();

    // Tsuyama vs Japan
    var vs_chart = new CanvasJS.Chart("vsContainer",
    {
      title:{
      text: "Tsuyama VS Japan"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "人口", y : 1200 },
          { label: "面積", y : 747 },
          { label: "借金", y : 14043 },
        ]}
      ]
    });

    vs_chart.render();
})();
