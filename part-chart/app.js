var TSUYAMA=506000000,TAKUCHI=130170,TABATA=640387,YAMABAYASHI=47795500,HARANO=50716,ZASSHUCHI=164937,BOCHI=10154,CHISHOU=211715;
var JAPAN=380000,OKAYAMAKEN=7112,OKAYAMASHI=790,KURASHIKISHI=355,BIWAKO=670;
var TOKYODOOM=0.047,TNCT=29144;
var m;

(function () {
  $('#resetbutton').click(function () {
    console.log($('#areaid').val());
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


  var dataPlot = [
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
  var chart = new CanvasJS.Chart("chartContainer", {
    data: [{
      type: 'column',
      dataPoints: dataPlot
    }]
  });
  chart.render();
});

})();
