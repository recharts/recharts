import{e}from"./iframe-DZKc3wlS.js";import{C as u}from"./ComposedChart-B72QYvLv.js";import{R as h}from"./arrayEqualityCheck-DjWYx_fN.js";import{C as k}from"./CartesianGrid-CHpJW8RT.js";import{B as o}from"./Bar-B4QE6OL-.js";import{Z as x}from"./ZAxis--o7pxxiW.js";import{S as y}from"./Scatter-Dl6wE1hf.js";import{X as B}from"./XAxis-kwyNZCQz.js";import{Y as E}from"./YAxis-BIjjeUdJ.js";import{R as f}from"./RechartsHookInspector-Co_Fh5Fl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFmROmVB.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./zIndexSlice-B0ARFS3L.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Layer-DH-WpK_h.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./ZIndexLayer-DokrlvR2.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bvo5mwDL.js";import"./ReactUtils-rr4vsGZe.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./useAnimationId-NX8Gitos.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./Symbols-CqfdXGpW.js";import"./Curve-gwVQ8PMT.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./ErrorBarContext-DvKtKMAK.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./getZIndexFromUnknown-BBKWE2ig.js";import"./graphicalItemSelectors-MTx4Krmh.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
