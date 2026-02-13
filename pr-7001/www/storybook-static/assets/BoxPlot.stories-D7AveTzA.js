import{e}from"./iframe-7yPApSvt.js";import{C as u}from"./ComposedChart-CAq2_OWg.js";import{R as h}from"./arrayEqualityCheck-BRhf3SEW.js";import{C as k}from"./CartesianGrid-Csd8Dh3x.js";import{B as o}from"./Bar-BFbk4eBt.js";import{Z as x}from"./ZAxis-Dkat0fcw.js";import{S as y}from"./Scatter-2npMskTX.js";import{X as B}from"./XAxis-D9IId5KY.js";import{Y as E}from"./YAxis-p892jm1t.js";import{R as f}from"./RechartsHookInspector-BsW7gU1Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuUb30Xi.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./CartesianAxis-bgrWTzp1.js";import"./Layer-uYiMe6t4.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./Label-DRJZdylN.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./types-OVAUyZ3J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C-rSDLYt.js";import"./ReactUtils-C9q2a11f.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-VDS0PGUg.js";import"./useAnimationId-DZFmgCE1.js";import"./Trapezoid-CDa1-n6T.js";import"./Sector-B6puIsbo.js";import"./Symbols-Cj90JcMH.js";import"./Curve-DU3LHYbT.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./ErrorBarContext-DG4gMx-N.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./getZIndexFromUnknown-B0neOpiM.js";import"./graphicalItemSelectors-hiRSllRr.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Be=["BoxPlotChart"];export{m as BoxPlotChart,Be as __namedExportsOrder,ye as default};
