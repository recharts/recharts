import{e}from"./iframe-ByhUx3i5.js";import{C as u}from"./ComposedChart-BqdUV1Sk.js";import{R as h}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as k}from"./CartesianGrid-cSH_-Fn1.js";import{B as o}from"./Bar-zWPLBl_Q.js";import{Z as x}from"./ZAxis-DMjMtw_g.js";import{S as y}from"./Scatter-DZCgZeQG.js";import{X as B}from"./XAxis-BI5mxokc.js";import{Y as E}from"./YAxis-D42CMzIK.js";import{R as f}from"./RechartsHookInspector-7ObrtXBg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CIwNTWTh.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./ZIndexLayer-ktHWf7_5.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-7NlN6gcD.js";import"./ReactUtils-BmZRR5An.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./useAnimationId-aMq0pZgy.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./Symbols-C3LGHQVt.js";import"./Curve-CS0P1hcX.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./getZIndexFromUnknown-rrrHiWL0.js";import"./graphicalItemSelectors-CD7_eHaQ.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
