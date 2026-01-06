import{e}from"./iframe-DLhPWxyK.js";import{C as $}from"./ComposedChart-DNdReU5t.js";import{R as E}from"./arrayEqualityCheck-m1RhjOmx.js";import{B as x}from"./BarChart-Dut1BnlH.js";import{X as f}from"./XAxis-sgPLB-rr.js";import{Y as M}from"./YAxis-BkUnmSc2.js";import{L as k}from"./Legend-dB7LAjtZ.js";import{T as w}from"./Tooltip-DUsq4-kv.js";import{B as b}from"./Bar-DdI9BB9r.js";import{C as y}from"./tooltipContext-YFR452HV.js";import{R as V}from"./RechartsHookInspector-HNjcmSsy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./CartesianAxis-DsXxqkAo.js";import"./Layer-T-_zDyRj.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./Label-Cfm9uiYS.js";import"./ZIndexLayer-CE4rF1P8.js";import"./types-DGdi1KYp.js";import"./Symbols-CNkEhL1u.js";import"./Curve-DeIwtCC2.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./Cross-B3vZI2Mu.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Sector-tN30gQok.js";import"./ReactUtils-CkbQi9iw.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C-EY4dJQ.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./getZIndexFromUnknown-D663qf7E.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const v=[{date:"2023-02-01",openClose:[22.86,24.39],high:24.95,low:22.36},{date:"2023-02-02",openClose:[25.96,26.91],high:27.45,low:25.75},{date:"2023-02-03",openClose:[25.21,25.52],high:27.14,low:25.11},{date:"2023-02-06",openClose:[24.85,24.87],high:25.45,low:24.52},{date:"2023-02-07",openClose:[24.83,26.41],high:26.69,low:24.54},{date:"2023-02-08",openClose:[26.05,24.99],high:26.3,low:24.81}],Ve={component:$},B=i=>{const{x:t,y:r,width:a,height:o,low:m,high:s,openClose:[l,n]}=i,d=l<n,g=d?"blue":"red",p=Math.abs(o/(l-n));return e.createElement("g",{stroke:g,fill:"none",strokeWidth:"2"},e.createElement("path",{d:`
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
