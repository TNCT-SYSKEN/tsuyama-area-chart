(function(){
  // environmentContainer
  var enviro_chart = new CanvasJS.Chart("enviroContainer",
  {
    data: [{
      type: "column",
      dataPoints: [
        {label: "津山市", y: 5.27},
        {label: "岡山県", y: 73.91751132}
      ]}
    ],
    backgroundColor: null
  });
  enviro_chart.render();

  // percentage
  var all_Property = 55677318.8;

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
     proprietary_Property[i].y = proprietary_Property[i].y / all_Property * 100;
   }
    var percent_chart = new CanvasJS.Chart("percentContainer", {
      animationEnabled: false,
       data : [{
        type: "pie",
        dataPoints: proprietary_Property
      }],
      backgroundColor: null
    });

    percent_chart.render();

    // Tsuyama vs Japan
    var vs_chart = new CanvasJS.Chart("vsContainer",
    {
      data: [{
        type: "column",
        dataPoints: [
          { label: "人口", y : 1200 },
          { label: "面積", y : 747 },
          { label: "借金", y : 14043 },
        ]}
      ],
      backgroundColor: null
    });

    vs_chart.render();

    // compare
    var TSUYAMA=506000000,ESTATE=130170,FIELD=640387,FOREST=47795500,WILD=50716,HYBRID=164937,CEMETERY=10154,SWAMP=211715;
    var JAPAN=380000,OKAYAMAPREF=7112,OKAYAMACITY=790,KURASHIKICITY=355,LAKEBIWA=670;
    var squareunit;

    var compare_chart = new CanvasJS.Chart("compareContainer", {
      data: [{
        type: 'column',
      }],
      backgroundColor: null
    });

    $('#japanarea').click(function () {
      $('#areaid').val(JAPAN);
      $('#unitSelector').val("km2");
    });
    $('#okayamaprefarea').click(function () {
      $('#areaid').val(OKAYAMAPREF);
      $('#unitSelector').val("km2");
    });
    $('#okayamacityarea').click(function () {
      $('#areaid').val(OKAYAMACITY);
      $('#unitSelector').val("km2");
    });
    $('#kurashikicityarea').click(function () {
      $('#areaid').val(KURASHIKICITY);
      $('#unitSelector').val("km2");
    });
    $('#lakebiwaarea').click(function () {
      $('#areaid').val(LAKEBIWA);
      $('#unitSelector').val("km2");
    });
    $('#comparebtn').click(function () {

    if($('#unitSelector').val()=="km2"){
      squareunit = 1000000;
    }
    else if($('#unitSelector').val()=="m2"){
      squareunit = 1;
    }

    $('#resetbtn').click(function (){
      $('#areaid').val('');

      unitClear();
    });

      var AREAint = parseInt($('#areaid').val());
      var tsuyamanum=parseInt(AREAint/TSUYAMA* squareunit);
      var estatenum=parseInt(AREAint/ESTATE* squareunit);
      var fieldnum=parseInt(AREAint/FIELD* squareunit);
      var forestnum=parseInt(AREAint/FOREST* squareunit);
      var wildnum=parseInt(AREAint/WILD* squareunit);
      var hybridnum=parseInt(AREAint/HYBRID* squareunit);
      var cemeterynum=parseInt(AREAint/CEMETERY* squareunit);
      var swampnum=parseInt(AREAint/SWAMP* squareunit);

      unitClear();

      $('#tsuyamaarea').append(tsuyamanum);
      $('#estatearea').append(estatenum);
      $('#fieldarea').append(fieldnum);
      $('#forestarea').append(forestnum);
      $('#wildarea').append(wildnum);
      $('#hybridarea').append(hybridnum);
      $('#cemeteryarea').append(cemeterynum);
      $('#swamparea').append(swampnum);


    var comparePlot = [
      { label: "津山市",   y: tsuyamanum },
      { label: "宅地建物", y: estatenum },
      { label: "田畑",   y: fieldnum },
      { label: "山林", y: forestnum },
      { label: "原野", y: wildnum },
      { label: "雑種地", y: hybridnum },
      { label: "墓地", y: cemeterynum },
      { label: "池沼", y: swampnum }

    ];
    //========================================

    //チャートの生成
    compare_chart.options.data[0].dataPoints = comparePlot;
    compare_chart.render();
  });

  compare_chart.render();
})();

function unitClear(){
  $('#tsuyamaarea').empty();
  $('#estatearea').empty();
  $('#fieldarea').empty();
  $('#forestarea').empty();
  $('#wildarea').empty();
  $('#hybridarea').empty();
  $('#cemeteryarea').empty();
  $('#swamparea').empty();
}
