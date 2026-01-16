import{e}from"./iframe-BMuWxLAr.js";import{C as u}from"./ComposedChart-BCldfKHH.js";import{R as h}from"./arrayEqualityCheck-CqiNO7U9.js";import{C as k}from"./CartesianGrid-BGa4GjxM.js";import{B as o}from"./Bar-DzD9oIlk.js";import{Z as x}from"./ZAxis-BkXZBltr.js";import{S as y}from"./Scatter-DL_We7HK.js";import{X as B}from"./XAxis-WAtQ1axi.js";import{Y as E}from"./YAxis-Ce7Q5R0b.js";import{R as f}from"./RechartsHookInspector-zXV2QGE7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./PolarUtils-TfsB6rvw.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Layer-B3GdCeOT.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./Label-BDcobJj_.js";import"./ZIndexLayer-5mbugvqo.js";import"./types-DTEjZcuz.js";import"./tooltipContext-D5xQ3oqk.js";import"./ReactUtils-CnoqxUjn.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-TwJi8_LR.js";import"./useAnimationId-CV7m1u0T.js";import"./Trapezoid-CkjHCqiS.js";import"./Sector-BljMkyic.js";import"./Symbols-BPsutJwu.js";import"./Curve-vG_gbHgm.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./ErrorBarContext-DEke2_6E.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./getZIndexFromUnknown-CfIxMuSS.js";import"./graphicalItemSelectors-CJs3TUGh.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const data = useBoxPlot(boxPlots);
    return <ResponsiveContainer minHeight={600}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar stackId="a" dataKey="min" fill="none" />
          <Bar stackId="a" dataKey="bar-min" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="bottomWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bottomBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="bar-avg" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="topBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="topWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bar-max" shape={<HorizonBar />} />
          <ZAxis type="number" dataKey="size" range={[0, 250]} />

          <Scatter dataKey="average" fill="red" stroke="#FFF" />
          <XAxis />
          <YAxis />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {}
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ye=["BoxPlotChart"];export{m as BoxPlotChart,ye as __namedExportsOrder,xe as default};
