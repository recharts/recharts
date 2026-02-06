import{e}from"./iframe-C-p_RB-q.js";import{C as u}from"./ComposedChart-Bt7ixjRo.js";import{R as h}from"./arrayEqualityCheck-B-MvrmN7.js";import{C as k}from"./CartesianGrid-BwIpVtPi.js";import{B as o}from"./Bar-CCGt7CJj.js";import{Z as x}from"./ZAxis-D1WVjyUL.js";import{S as y}from"./Scatter-Cdl0Wr1p.js";import{X as B}from"./XAxis-C08WqI39.js";import{Y as E}from"./YAxis-D8H0bjJG.js";import{R as f}from"./RechartsHookInspector-A7vZopTv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./CartesianAxis-B6zbzI9s.js";import"./Layer-C7f6suDu.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./Label-C5MK-SLm.js";import"./ZIndexLayer-DCWgaX-H.js";import"./types-GK0667Eh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-hEh8YB2b.js";import"./ReactUtils-Dp-34n25.js";import"./ActiveShapeUtils-CQt1QMv8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3AEn-NX.js";import"./useAnimationId-DU1HvgwT.js";import"./Trapezoid-3HlUouXc.js";import"./Sector-Dx36qTvv.js";import"./Symbols-pu40Z5kC.js";import"./Curve-p-GL7vDw.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./ErrorBarContext-DqfvC5Ba.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./getZIndexFromUnknown-Buov4m2N.js";import"./graphicalItemSelectors-DyirJX-o.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
