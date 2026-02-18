import{e}from"./iframe-BbZhTIjX.js";import{C as u}from"./ComposedChart-DswvV8lx.js";import{R as h}from"./arrayEqualityCheck-DkKqnDzt.js";import{C as k}from"./CartesianGrid-BPBxIaVq.js";import{B as o}from"./Bar-BC6CLava.js";import{Z as x}from"./ZAxis-Bo2D5A72.js";import{S as y}from"./Scatter-bDhT2FVk.js";import{X as B}from"./XAxis-C9xRC5JP.js";import{Y as E}from"./YAxis-ktUi3e4g.js";import{R as f}from"./RechartsHookInspector-BEtvb3d9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./CartesianAxis-TJWR5-DY.js";import"./Layer-BRjxkTBT.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./Label-Be7TSIhI.js";import"./ZIndexLayer-C9gNEIfS.js";import"./types-BKBSpGfD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BdFofWLl.js";import"./ReactUtils-B2BAtUcS.js";import"./ActiveShapeUtils-cpKe4lwt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-E9CHGVoE.js";import"./useAnimationId-DVyCRxxH.js";import"./Trapezoid-abIioDDU.js";import"./Sector-yd-JjZP_.js";import"./Symbols-CAuboXnu.js";import"./Curve-DGXqFy3O.js";import"./RegisterGraphicalItemId-NnVsob8d.js";import"./ErrorBarContext-DomgNI41.js";import"./GraphicalItemClipPath-DCNpup2d.js";import"./SetGraphicalItem-yYMMJ8ci.js";import"./getZIndexFromUnknown-CcZQ9gqA.js";import"./graphicalItemSelectors-m4p6KSQc.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],Be={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
