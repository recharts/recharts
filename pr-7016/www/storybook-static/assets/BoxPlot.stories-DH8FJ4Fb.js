import{e}from"./iframe-Ch6AeBvd.js";import{C as u}from"./ComposedChart-CZ_B4iUN.js";import{R as h}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as k}from"./CartesianGrid-Ca-CvEI5.js";import{B as o}from"./Bar-nlGAf4mV.js";import{Z as x}from"./ZAxis-BDM_D7XU.js";import{S as y}from"./Scatter-CnxZ5tnk.js";import{X as B}from"./XAxis-Ct6CHpvF.js";import{Y as E}from"./YAxis-CBFbjxfR.js";import{R as f}from"./RechartsHookInspector-B8QYXaP3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrY4pfOn.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./CartesianAxis-DGiGQ4zb.js";import"./Layer-4QzHj9sV.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./Label-BhgECJNB.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./types-Do_qsLRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DgLUObry.js";import"./ReactUtils-DkszlIgF.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./useAnimationId-YtLKjIEe.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./Symbols-WE9lD8Kq.js";import"./Curve-Bln8u_qs.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./ErrorBarContext-mxMpkgJh.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./getZIndexFromUnknown-CxHu1T5X.js";import"./graphicalItemSelectors-CqQUOiKD.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],Be={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
