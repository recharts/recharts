import{e}from"./iframe-BJE3gYiz.js";import{C as u}from"./ComposedChart-CjmpYIzW.js";import{R as h}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as k}from"./CartesianGrid-IzZGbxwv.js";import{B as o}from"./Bar-DelEJCyZ.js";import{Z as x}from"./ZAxis-BXWdMtpy.js";import{S as y}from"./Scatter-CKEMHsdC.js";import{X as B}from"./XAxis-CiUlidyy.js";import{Y as E}from"./YAxis-DFb5sVBj.js";import{R as f}from"./RechartsHookInspector-CmJjyPOL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Layer-BpHZQDe5.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./ZIndexLayer-PGry8EqE.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CEFht0ON.js";import"./ReactUtils-DpOzmnGs.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./useAnimationId-xUHk75MJ.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./Symbols-CA9SXzw3.js";import"./Curve-9wsGsorR.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./ErrorBarContext-CmxXk9PG.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./getZIndexFromUnknown-BhNn_Mt_.js";import"./graphicalItemSelectors-SX_V_YVq.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
