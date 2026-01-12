import{e}from"./iframe-BlK4-FEU.js";import{C as u}from"./ComposedChart-B-MlCPo2.js";import{R as h}from"./arrayEqualityCheck-D3CpbvMw.js";import{C as k}from"./CartesianGrid-CMvJe24R.js";import{B as o}from"./Bar-DTEMCZ-O.js";import{Z as x}from"./ZAxis-DsgamVvp.js";import{S as y}from"./Scatter-Bck_lcI3.js";import{X as B}from"./XAxis-XTRCC8r6.js";import{Y as E}from"./YAxis-Bo0KVWV0.js";import{R as f}from"./RechartsHookInspector-C2emUIYz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CfP2CNrR.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./zIndexSlice-BTFlkBrM.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./PolarUtils-Bw67yi1j.js";import"./CartesianChart-BYkRfU90.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./CartesianAxis-D9Vnd4ZX.js";import"./Layer-1XFlzVag.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./Label-B5t3anSs.js";import"./ZIndexLayer-BXfqJV7n.js";import"./types-nGVhtMBW.js";import"./tooltipContext-BXQ2EYh_.js";import"./ReactUtils-CLW_TYB_.js";import"./ActiveShapeUtils-BFViKF1F.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9j2f9q.js";import"./useAnimationId-H0jghrnG.js";import"./Trapezoid-DhJdPhvd.js";import"./Sector-6gruqe2O.js";import"./Symbols-7-jwnY-l.js";import"./Curve-CwI3FqjW.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./ErrorBarContext-Kty8e015.js";import"./GraphicalItemClipPath-P9ZnzsFU.js";import"./SetGraphicalItem-DuRVqxef.js";import"./getZIndexFromUnknown-C_7hVWrg.js";import"./graphicalItemSelectors-BArIi9is.js";import"./index-B4rQ1OLH.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./OffsetShower-DbODKAvT.js";import"./PlotAreaShower-C8cqHodv.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
