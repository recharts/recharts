import{e}from"./iframe-Bg6hY-Lh.js";import{C as u}from"./ComposedChart-BrWT8Xtr.js";import{R as h}from"./arrayEqualityCheck-BDis9FaH.js";import{C as k}from"./CartesianGrid-CjQk98d1.js";import{B as o}from"./Bar-DtyA6pTc.js";import{Z as x}from"./ZAxis-B5x4T93y.js";import{S as y}from"./Scatter-x5lWlhIS.js";import{X as B}from"./XAxis-CuwyE-Aw.js";import{Y as E}from"./YAxis-D_u72_vn.js";import{R as f}from"./RechartsHookInspector-C0SDsqLX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkqFGzuB.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./CartesianAxis-vJmkqZaZ.js";import"./Layer-CbLnIqdO.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./Label-XrRQ-MXs.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./types-CCzU0McW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BBinbNZ7.js";import"./ReactUtils-CFjZLDuN.js";import"./ActiveShapeUtils-YlmjpsSF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cIsPACi8.js";import"./useAnimationId-9L0wWVYf.js";import"./Trapezoid-BJ7F2nGX.js";import"./Sector-CEFw5FZM.js";import"./Symbols-CxwFL1-B.js";import"./Curve-J_xBTbd1.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./ErrorBarContext-BJIGtpIX.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./getZIndexFromUnknown-CHejBvQo.js";import"./graphicalItemSelectors-BNuWLpIf.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
