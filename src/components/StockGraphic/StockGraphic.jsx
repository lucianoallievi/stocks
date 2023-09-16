import Highcharts from "highcharts";

export const StockGraphic = ({ stock, data }) => {
  const close = [];
  const high = [];
  const low = [];
  const open = [];
  const time = [];

  if (data.status == "ok") {
    data.values.forEach((value) => {
      //console.log(value.close);
      close.push(Number.parseFloat(value.close));
      high.push(Number.parseFloat(value.high));
      low.push(Number.parseFloat(value.low));
      open.push(Number.parseFloat(value.open));
      //time.push(Date.parse(value.datetime));
      time.push(value.datetime);
    });

    console.log(close);

    try {
      Highcharts.chart("grafico_lineas", {
        title: {
          text: stock.symbol,
          align: "left",
        },

        subtitle: {
          text: stock.name,
          align: "left",
        },

        yAxis: {
          title: {
            //text: "Number of Employees",
            text: stock.currency,
          },
        },

        xAxis: {
          categories: time.reverse(),

          accessibility: {
            //rangeDescription: "Range: 2010 to 2020",
            rangeDescription: "Range",
          },
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            //            pointStart: 2010,
          },
        },

        series: [
          {
            //name: "Installation & Developers",
            name: "Open Value",
            data: open.reverse(),
          },
          {
            //name: "Installation & Developers",
            name: "High Value",
            data: high.reverse(),
          },
          {
            //name: "Installation & Developers",
            name: "Low Value",
            data: low.reverse(),
          },
          {
            //name: "Installation & Developers",
            name: "Close Value",
            data: close.reverse(),
          },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return <div id="grafico_lineas"></div>;
};
