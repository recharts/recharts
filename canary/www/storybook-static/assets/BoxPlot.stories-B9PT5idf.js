import{e}from"./iframe-DG5XGAD6.js";import{C as u}from"./ComposedChart-CB1EKJXL.js";import{R as h}from"./arrayEqualityCheck-j51cHR5x.js";import{C as k}from"./CartesianGrid-Cc33JTQ2.js";import{B as o}from"./Bar-B2mtbp_1.js";import{Z as x}from"./ZAxis-CoQmGq5L.js";import{S as y}from"./Scatter-CN5ZE7w2.js";import{X as B}from"./XAxis-oYzB5LXw.js";import{Y as E}from"./YAxis-CCH0cAJm.js";import{R as f}from"./RechartsHookInspector-YgQTDZfw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwgBVkto.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./zIndexSlice-DIZTBSXC.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./CartesianAxis-a2JFC2mr.js";import"./Layer-CzlbLnCA.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./Label-bn2tJ_cj.js";import"./ZIndexLayer-CKRqVJn0.js";import"./types-D0CjTngR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D-6MSdau.js";import"./ReactUtils-Vfgvf3cC.js";import"./ActiveShapeUtils-Cyi76-oO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-xQMUTm.js";import"./useAnimationId-NyrgIauS.js";import"./Trapezoid-C7Z3OQT2.js";import"./Sector-B5if7fUR.js";import"./Symbols-C5H0HNIV.js";import"./Curve-BnD4_LTQ.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./ErrorBarContext-DyIY829R.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./getZIndexFromUnknown-BzwNJ41L.js";import"./graphicalItemSelectors-BzUP1jgi.js";import"./index-ZiVRns4Q.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
