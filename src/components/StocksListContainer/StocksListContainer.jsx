import { useSotcks } from "../../hooks/useStocks";
import { StocksList } from "../StocksList/StocksList";

export const StocksListContainer = () => {
  const data = [
    {
      symbol: "000001",
      name: "Ping An Bank Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000002",
      name: "China Vanke Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000004",
      name: "Shenzhen GuoHua Network Security Technology Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000005",
      name: "Shenzhen Fountain Corporation",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000006",
      name: "Shenzhen Zhenye ",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000007",
      name: "Shenzhen Quanxinhao Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000008",
      name: "China High-Speed Railway Technology Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000009",
      name: "China Baoan Group Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000010",
      name: "Shenzhen Ecobeauty Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000011",
      name: "Shenzhen Properties & Resources Development ",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000012",
      name: "CSG Holding Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000014",
      name: "Shahe Industrial Co., Ltd",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000016",
      name: "Konka Group Co., Ltd.",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
    {
      symbol: "000017",
      name: "Shenzhen China Bicycle Company ",
      currency: "CNY",
      exchange: "SZSE",
      mic_code: "XSHE",
      country: "China",
      type: "Common Stock",
    },
  ];

  return <StocksList stocks={data} />;
};
