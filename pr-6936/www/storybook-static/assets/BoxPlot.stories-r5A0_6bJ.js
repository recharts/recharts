import{e}from"./iframe-BRGG-JoH.js";import{C as u}from"./ComposedChart-EtXkgG2p.js";import{R as h}from"./arrayEqualityCheck-mIQ5hzOq.js";import{C as k}from"./CartesianGrid-CAZWUUAM.js";import{B as o}from"./Bar-Cqvo0cE_.js";import{Z as x}from"./ZAxis-JFOw9m6t.js";import{S as y}from"./Scatter-kuBqxFBB.js";import{X as B}from"./XAxis-Cdr81EpX.js";import{Y as E}from"./YAxis-Dr8aURmX.js";import{R as f}from"./RechartsHookInspector-Ctx1w3em.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9pcaaxwh.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./CartesianAxis-BoArf1fz.js";import"./Layer-Da-YNOyz.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./Label-cR9E2h9U.js";import"./ZIndexLayer-D0IJam7I.js";import"./types-BKK4rjEh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BgeYg4JW.js";import"./ReactUtils-Dc8DAnTF.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./useAnimationId-CqPKjgNu.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./Symbols-Bp7HaOpu.js";import"./Curve-D65O9kIu.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./ErrorBarContext-v-g5O0yz.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./getZIndexFromUnknown-DkUvDB3y.js";import"./graphicalItemSelectors-Bw2zOLDM.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
