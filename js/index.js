// 折线图
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      top: "5%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10,
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "20",
      top: "60",
      right: "20",
      bottom: "8",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28"],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "总新增确诊",
        type: "line",
        smooth: true,
        areaStyle: {},
        lineStyle: {
          color: "#0184d5",
          width: 2,
        },
        // data: [1005, 959, 915, 838, 801, 723, 648],
        data: [37, 15, 9, 13, 14, 3, 6, 22],
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 设置拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 8,
        },
        // 开始不显示拐点，鼠标经过显示
        showSymbol: false,
      },
      {
        name: "新增境外输入",
        type: "line",
        smooth: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2,
          },
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 8,
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // data: [78, 63, 57, 49, 51, 52, 50]
        data: [23, 6, 2, 11, 5, 2, 3, 21],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图
function B(Seven) {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      bottom: "0%",
      itemWidth: 5,
      itemHeight: 5,
      left: "center",
      top: "bottom",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10,
      },
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "现有确诊人数",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "area",
        // 图形文字标签
        label: {
          fontSize: 12,
        },
        labelLine: {
          length: 6, //链接扇形线长
          length2: 8, //连接文字线长
        },
        data: Seven,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

// 画地图
(function () {
  function A(dataList) {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    option = {
      tooltip: {
        triggerOn: "click",
        formatter: function (e) {
          return 0.5 == e.value
            ? e.name + "：有疑似病例"
            : e.seriesName + "<br />" + e.name + "：" + e.value;
        },
      },
      visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        textStyle: {
          color: "#fff",
        },
        pieces: [
          {
            gt: 500,
            label: "> 500 人",
            color: "#000080",
          },
          {
            gte: 100,
            lte: 500,
            label: "100 - 499 人",
            color: "#0000CD",
          },
          {
            gte: 10,
            lt: 99,
            label: "10 - 99 人",
            color: "#4169E1",
          },
          {
            gte: 1,
            lt: 10,
            label: "1 - 9 人",
            color: "#1E90FF",
          },
          {
            value: 0,
            color: "#6495ED",
          },
        ],
        show: !0,
      },
      geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
          min: 1,
          max: 2,
        },
        zoom: 1.0,
        top: 40,
        left: 140,
        label: {
          normal: {
            show: !0,
            fontSize: "8",
            width: 2,
            color: "#fff",
          },
        },
        itemStyle: {
          normal: {
            //shadowBlur: 50,
            // shadowColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          emphasis: {
            areaColor: "#99CCFF",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0,
          },
        },
      },
      series: [
        {
          name: "确诊病例",
          type: "map",
          geoIndex: 0,
          data: dataList,
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  setInterval(() => {
    $.ajax({
      type: "get",
      url: "/api/data",
      success: function (data) {
        var data = JSON.parse(data);
        var getAreaStat = data.getAreaStat;
        var dataList = [];
        // console.log(JSON.parse(data));
        dataList.push({
          name: "南海诸岛",
          value: 0,
        });
        var Seven = []; //扇形图
        var ans = 0;
        var currentConfirmedCountAns = 0; //现有确诊人数
        var confirmedCountAns = 0; // 累计确诊人数
        getAreaStat.forEach((element) => {
          currentConfirmedCountAns += element.currentConfirmedCount;
          confirmedCountAns += element.confirmedCount;
          dataList.push({
            name: element.provinceShortName,
            value: element.currentConfirmedCount,
          });
          if (ans < 7)
            Seven.push({
              name: element.provinceShortName,
              value: element.currentConfirmedCount,
            });
          ans++;
        });
        Seven.reverse();
        $(".no-hd ul li").eq(0).html(confirmedCountAns);
        $(".no-hd ul li").eq(1).html(currentConfirmedCountAns);
        A(dataList);
        B(Seven);
      },
    });
  }, 5000);
})();
// var ary = document.querySelectorAll(".no-hd ul li");
// ary[1].innerHTML = 1312320;
// console.log(ary);
