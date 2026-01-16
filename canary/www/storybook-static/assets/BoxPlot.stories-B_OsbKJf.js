import{e}from"./iframe-Daa7gVLq.js";import{C as u}from"./ComposedChart-CYLKALlp.js";import{R as h}from"./arrayEqualityCheck-DHiMbEr4.js";import{C as k}from"./CartesianGrid-75effBkS.js";import{B as o}from"./Bar-D77gMqFw.js";import{Z as x}from"./ZAxis-CgHxhDOx.js";import{S as y}from"./Scatter-CO0mO3bv.js";import{X as B}from"./XAxis-9jKN-_DJ.js";import{Y as E}from"./YAxis-BnejCEyC.js";import{R as f}from"./RechartsHookInspector-5CuZ5Ttw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./PolarUtils-BgeQKPj6.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./CartesianAxis-BVtnbRV6.js";import"./Layer-CGvX8Aev.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./Label-Czm8SDG7.js";import"./ZIndexLayer-BpC0cLWO.js";import"./types-C4ZPTuLr.js";import"./tooltipContext-CiX2yvNE.js";import"./ReactUtils-DBjM8e5X.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./useAnimationId-ahZSEp8i.js";import"./Trapezoid-BpmoHtq5.js";import"./Sector-BNry3-1y.js";import"./Symbols-Ct_d7yT0.js";import"./Curve-CWMRaKtl.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./ErrorBarContext-C3qObGNC.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./getZIndexFromUnknown-pdGaxcfG.js";import"./graphicalItemSelectors-DKJfWVrJ.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
