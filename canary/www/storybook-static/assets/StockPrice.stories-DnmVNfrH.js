import{e}from"./iframe-D9q7UUmi.js";import{C as $}from"./ComposedChart-BrSXjugh.js";import{R as E}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{B as x}from"./BarChart-DyLo-HOX.js";import{X as f}from"./XAxis-Dxn9Zo0N.js";import{Y as M}from"./YAxis-Ds2QNT8w.js";import{L as k}from"./Legend-D31ymzRq.js";import{T as w}from"./Tooltip-BLBubyYz.js";import{B as b}from"./Bar-D2YzUuu3.js";import{C as y}from"./tooltipContext-DC7nW4sy.js";import{R as V}from"./RechartsHookInspector-Btgon49z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./zIndexSlice-CxekzBSL.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./CartesianAxis-DBnbCnpE.js";import"./Layer-CUKLQgPC.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./Label-CDSn628C.js";import"./ZIndexLayer-CtgCGO4x.js";import"./types-FPdAMXDy.js";import"./Symbols-B3oT9PiF.js";import"./Curve-DEESCjbc.js";import"./useElementOffset-D1mKrQqH.js";import"./iteratee-JJOOie1Z.js";import"./Cross-Cb3_Opci.js";import"./Rectangle-aQPjrzEG.js";import"./useAnimationId-DeN0uxUI.js";import"./Sector-BIUbLnT5.js";import"./ReactUtils-CfRgqXT5.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CrYCphId.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./ErrorBarContext-D_fOmF9j.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./getZIndexFromUnknown-BjPB6BUC.js";import"./graphicalItemSelectors-BoZBMBth.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const v=[{date:"2023-02-01",openClose:[22.86,24.39],high:24.95,low:22.36},{date:"2023-02-02",openClose:[25.96,26.91],high:27.45,low:25.75},{date:"2023-02-03",openClose:[25.21,25.52],high:27.14,low:25.11},{date:"2023-02-06",openClose:[24.85,24.87],high:25.45,low:24.52},{date:"2023-02-07",openClose:[24.83,26.41],high:26.69,low:24.54},{date:"2023-02-08",openClose:[26.05,24.99],high:26.3,low:24.81}],Ve={component:$},B=i=>{const{x:t,y:r,width:a,height:o,low:m,high:s,openClose:[l,n]}=i,d=l<n,g=d?"blue":"red",p=Math.abs(o/(l-n));return e.createElement("g",{stroke:g,fill:"none",strokeWidth:"2"},e.createElement("path",{d:`
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
