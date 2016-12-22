(function(){
  // environmentContainer
  var enviro_chart = new CanvasJS.Chart("enviroContainer",
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

    // compare
    var TSUYAMA=506000000,TAKUCHI=130170,TABATA=640387,YAMABAYASHI=47795500,HARANO=50716,ZASSHUCHI=164937,BOCHI=10154,CHISHOU=211715;
    var JAPAN=380000,OKAYAMAKEN=7112,OKAYAMASHI=790,KURASHIKISHI=355,BIWAKO=670;
    var TOKYODOOM=0.047,TNCT=29144;
    var m;

    var compare_chart = new CanvasJS.Chart("compareContainer", {
      data: [{
        type: 'column',
      }]
    });

    $('#resetbutton').click(function (){
      $('#areaid').val('');
    });
    $('#japanarea').click(function () {
      $('#areaid').val(JAPAN);
      $('#tani').val("km2");
    });
    $('#okayamakenarea').click(function () {
      $('#areaid').val(OKAYAMAKEN);
      $('#tani').val("km2");
    });
    $('#okayamashiarea').click(function () {
      $('#areaid').val(OKAYAMASHI);
      $('#tani').val("km2");
    });
    $('#kurashikishiarea').click(function () {
      $('#areaid').val(KURASHIKISHI);
      $('#tani').val("km2");
    });
    $('#biwakoarea').click(function () {
      $('#areaid').val(BIWAKO);
      $('#tani').val("km2");
    });
    $('#hikaku').click(function () {

      if($('#tani').val()=="km2"){
      m=1000000;
    }else if($('#tani').val()=="m2"){
      m=1;
    }

      var AREAint = parseInt($('#areaid').val());
      var a,b,c,d,e,f,g,h;
      a=parseInt(AREAint/TSUYAMA*m);
      b=parseInt(AREAint/TAKUCHI*m);
      c=parseInt(AREAint/TABATA*m);
      d=parseInt(AREAint/YAMABAYASHI*m);
      e=parseInt(AREAint/HARANO*m);
      f=parseInt(AREAint/ZASSHUCHI*m);
      g=parseInt(AREAint/BOCHI*m);
      h=parseInt(AREAint/CHISHOU*m);

      $('#tsuyamaarea').val(a);
      $('#takuchiarea').val(b);
      $('#tabataarea').val(c);
      $('#yamabayashiarea').val(d);
      $('#haranoarea').val(e);
      $('#zasshuchiarea').val(f);
      $('#bochiarea').val(g);
      $('#chishouarea').val(h);


    var comparePlot = [
      { label: "津山市",   y: a },
      { label: "宅地建物", y: b },
      { label: "田畑",   y: c },
      { label: "山林", y: d },
      { label: "原野", y: e },
      { label: "雑種地", y: f },
      { label: "墓地", y: g },
      { label: "池沼", y: h }

    ];
    //========================================

    //チャートの生成
    compare_chart.options.data[0].dataPoints = comparePlot;
    compare_chart.render();
  });

  compare_chart.render();
})();
