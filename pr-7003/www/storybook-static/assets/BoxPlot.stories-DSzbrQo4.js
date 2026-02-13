import{e}from"./iframe-Cy8G_j66.js";import{C as u}from"./ComposedChart-BxEcgcZi.js";import{R as h}from"./arrayEqualityCheck-dp8dfL7u.js";import{C as k}from"./CartesianGrid-DLAikBSQ.js";import{B as o}from"./Bar-CQS_kTvV.js";import{Z as x}from"./ZAxis-Bel0ofkS.js";import{S as y}from"./Scatter-BLrgSO1O.js";import{X as B}from"./XAxis-sHLPbu1e.js";import{Y as E}from"./YAxis-DfWkuEr-.js";import{R as f}from"./RechartsHookInspector-lSqxoQlZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtX23pZ_.js";import"./hooks-Dh2IuVAR.js";import"./axisSelectors-Dnswsufb.js";import"./zIndexSlice-BDvzw6V8.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./CartesianAxis-mJhpe0_9.js";import"./Layer-D4d1YeMH.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./Label-r4OEA6Zh.js";import"./ZIndexLayer-DYA27QSR.js";import"./types-BSABi_Hc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bnl8clU0.js";import"./ReactUtils-CPeEyyol.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./useAnimationId-YkjhaILr.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./getZIndexFromUnknown-BfgfushY.js";import"./graphicalItemSelectors-CIm9mjqa.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
