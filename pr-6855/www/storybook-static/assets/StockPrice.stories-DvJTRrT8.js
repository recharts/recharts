import{e}from"./iframe-Da-M2bw_.js";import{C as $}from"./ComposedChart-BwnVRCzC.js";import{R as E}from"./arrayEqualityCheck-Bu1fao9w.js";import{B as x}from"./BarChart-BdABTQcb.js";import{X as f}from"./XAxis-CFyYvsY3.js";import{Y as M}from"./YAxis-u8ljMyRk.js";import{L as k}from"./Legend-BtpSwi4J.js";import{T as w}from"./Tooltip-BswLKPO9.js";import{B as b}from"./Bar-DQM-NDy1.js";import{C as y}from"./tooltipContext-BHXKmJz9.js";import{R as V}from"./RechartsHookInspector-DN6fpuiF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUepfen4.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./zIndexSlice-CMfC5ktf.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./CartesianAxis-CVwu7qOc.js";import"./Layer-DzGabtm5.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./Label-C4t1wGEU.js";import"./ZIndexLayer-C6AjQfxY.js";import"./types-D0tWu2Rj.js";import"./Symbols-0qrr4MxV.js";import"./Curve-D038hXOJ.js";import"./useElementOffset-CJciGcgD.js";import"./iteratee-BEvwa0tL.js";import"./Cross-O6OvgL9I.js";import"./Rectangle-BDQYy-QO.js";import"./useAnimationId-DW2lwLzx.js";import"./Sector-CemvM92K.js";import"./ReactUtils-y3IAuRLl.js";import"./ActiveShapeUtils-Dg-wD9Xs.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Dm562TU6.js";import"./RegisterGraphicalItemId-Bh4GNlAN.js";import"./ErrorBarContext-CgzPxaLF.js";import"./GraphicalItemClipPath-qobx4hps.js";import"./SetGraphicalItem-BUDso82t.js";import"./getZIndexFromUnknown-CFzkI7o1.js";import"./graphicalItemSelectors-CZita_ka.js";import"./index-CVXS9YKr.js";import"./ChartSizeDimensions-BESje7nE.js";import"./OffsetShower-OU7b25r_.js";import"./PlotAreaShower--pkErmR4.js";const v=[{date:"2023-02-01",openClose:[22.86,24.39],high:24.95,low:22.36},{date:"2023-02-02",openClose:[25.96,26.91],high:27.45,low:25.75},{date:"2023-02-03",openClose:[25.21,25.52],high:27.14,low:25.11},{date:"2023-02-06",openClose:[24.85,24.87],high:25.45,low:24.52},{date:"2023-02-07",openClose:[24.83,26.41],high:26.69,low:24.54},{date:"2023-02-08",openClose:[26.05,24.99],high:26.3,low:24.81}],Ve={component:$},B=i=>{const{x:t,y:r,width:a,height:o,low:m,high:s,openClose:[l,n]}=i,d=l<n,g=d?"blue":"red",p=Math.abs(o/(l-n));return e.createElement("g",{stroke:g,fill:"none",strokeWidth:"2"},e.createElement("path",{d:`
          M ${t},${r}
          L ${t},${r+o}
          L ${t+a},${r+o}
          L ${t+a},${r}
          L ${t},${r}
        `}),d?e.createElement("path",{d:`
            M ${t+a/2}, ${r+o}
            v ${(l-m)*p}
          `}):e.createElement("path",{d:`
            M ${t+a/2}, ${r}
            v ${(n-m)*p}
          `}),d?e.createElement("path",{d:`
            M ${t+a/2}, ${r}
            v ${(n-s)*p}
          `}):e.createElement("path",{d:`
            M ${t+a/2}, ${r+o}
            v ${(l-s)*p}
          `}))},R=({active:i,payload:t})=>i&&t&&t.length?e.createElement("div",{className:"custom-tooltip",style:{backgroundColor:"#fff",padding:"5px 10px",borderRadius:"10px",border:"1px solid black"}},e.createElement("p",{className:"label"},t[0].payload.date),e.createElement("p",{className:"label"},`high : ${t[0].payload.high}`),e.createElement("p",{className:"label"},`low : ${t[0].payload.low}`),e.createElement("p",{className:"label"},`open : ${t[0].payload.openClose[0]}`),e.createElement("p",{className:"label"},`close : ${t[0].payload.openClose[1]}`)):null,c={render:i=>{const{data:t}=i,r=t.reduce((o,{low:m,openClose:[s,l]})=>{const n=Math.min(m,s,l);return o===null||n<o?n:o},null),a=t.reduce((o,{high:m,openClose:[s,l]})=>{const n=Math.max(m,s,l);return n>o?n:o},r);return e.createElement(E,{width:"100%",height:400},e.createElement(x,{data:t},e.createElement(f,{dataKey:"date"}),e.createElement(M,{domain:[r,a]}),e.createElement(k,null),e.createElement(w,{content:o=>e.createElement(R,{...o})}),e.createElement(b,{dataKey:"openClose",fill:"#8884d8",shape:e.createElement(B,null)},t.map(({date:o})=>e.createElement(y,{key:`cell-${o}`}))),e.createElement(V,null)))},args:{data:v}};var h,u,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => {
    const {
      data
    } = args;
    const minValue = data.reduce((minValue: number, {
      low,
      openClose: [open, close]
    }: any) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    }, null);
    const maxValue = data.reduce((maxValue: number, {
      high,
      openClose: [open, close]
    }: any) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    }, minValue);
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[minValue, maxValue]} />
          <Legend />
          <Tooltip content={props => <CustomTooltip {...props} />} />
          {/* @ts-expect-error custom components do not have a good type support */}
          <Bar dataKey="openClose" fill="#8884d8" shape={<Candlestick />}>
            {data.map(({
            date
          }: any) => <Cell key={\`cell-\${date}\`} />)}
          </Bar>
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    data: stockData
  }
}`,...(C=(u=c.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const ve=["StockPriceChart"];export{c as StockPriceChart,ve as __namedExportsOrder,Ve as default};
