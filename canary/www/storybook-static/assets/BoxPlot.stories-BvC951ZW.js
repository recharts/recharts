import{e}from"./iframe-Caz6nZ2I.js";import{C as u}from"./ComposedChart-ig2jlZKJ.js";import{R as h}from"./arrayEqualityCheck-CcFxY-Xq.js";import{C as k}from"./CartesianGrid-DoN3UDrT.js";import{B as o}from"./Bar-B_D8PtEz.js";import{Z as x}from"./ZAxis-DMBAimj9.js";import{S as y}from"./Scatter-BGxpAyR_.js";import{X as B}from"./XAxis-Dd-oJpip.js";import{Y as E}from"./YAxis-BRCgxqg5.js";import{R as f}from"./RechartsHookInspector-DDSzpp5A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./resolveDefaultProps-DAfTexXm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./CartesianAxis-DlMujoQ4.js";import"./Layer-B1GIAb1E.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./Label-Ek7Phs8Z.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./types-8IoGCZ4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C6PSabt-.js";import"./ReactUtils-R8D9NurX.js";import"./ActiveShapeUtils-D4vAh-I1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DOnXuvZA.js";import"./useAnimationId-DFkOU0Go.js";import"./Trapezoid-z6JJWRCw.js";import"./Sector-0pp4XTlb.js";import"./Symbols-C3i96Wdn.js";import"./Curve-B5Ob5vne.js";import"./RegisterGraphicalItemId-t2v7UQtx.js";import"./ErrorBarContext-BJza0ZIr.js";import"./GraphicalItemClipPath-Cv5KZpMj.js";import"./SetGraphicalItem-DOmEhcN0.js";import"./getZIndexFromUnknown-BU9HkiDM.js";import"./graphicalItemSelectors-DqH5lpX8.js";import"./index-BX6q2UKF.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],Be={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ee=["BoxPlotChart"];export{m as BoxPlotChart,Ee as __namedExportsOrder,Be as default};
