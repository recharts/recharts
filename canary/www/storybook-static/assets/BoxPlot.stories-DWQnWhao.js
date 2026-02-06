import{e}from"./iframe-BD1KoWK2.js";import{C as u}from"./ComposedChart-CpHM8O-c.js";import{R as h}from"./arrayEqualityCheck-Cde7DPwP.js";import{C as k}from"./CartesianGrid-BcU30g3K.js";import{B as o}from"./Bar-UqBrJhnT.js";import{Z as x}from"./ZAxis-DNc4XemD.js";import{S as y}from"./Scatter--R2gxHG-.js";import{X as B}from"./XAxis-DnAqFIqk.js";import{Y as E}from"./YAxis-Ck4AhIst.js";import{R as f}from"./RechartsHookInspector-D7IHkHn9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./CartesianAxis-le_A4Q3P.js";import"./Layer-CRI4mTHm.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./Label-DKDP8eG9.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./types-CvLbK4WM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DR1TWxOU.js";import"./ReactUtils-Z9JD7jXO.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dqzy-26l.js";import"./useAnimationId-C52_k4XW.js";import"./Trapezoid-Ce1Zpmiv.js";import"./Sector-BVsQ6t1D.js";import"./Symbols-Cd74flzx.js";import"./Curve-CTi9DAae.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./ErrorBarContext-DDBG_BG0.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./getZIndexFromUnknown-l885V_di.js";import"./graphicalItemSelectors-dyKU1Amc.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
