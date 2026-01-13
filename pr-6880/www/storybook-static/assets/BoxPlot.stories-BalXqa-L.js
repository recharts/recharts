import{e}from"./iframe-Cwpfa-aU.js";import{C as u}from"./ComposedChart-Bjflq6a1.js";import{R as h}from"./arrayEqualityCheck-4s7O9CHw.js";import{C as k}from"./CartesianGrid-CRtA0NQM.js";import{B as o}from"./Bar-RerBpz0k.js";import{Z as x}from"./ZAxis-BqhADjLq.js";import{S as y}from"./Scatter-C1bWWnld.js";import{X as B}from"./XAxis-UZUbrGY6.js";import{Y as E}from"./YAxis-BUkK3ftj.js";import{R as f}from"./RechartsHookInspector-RngvJaov.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./zIndexSlice-IilHGL9E.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./CartesianAxis-BJ_Cxbna.js";import"./Layer-C5Up6lye.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./Label-BkH8bmvn.js";import"./ZIndexLayer-MboeMBT5.js";import"./types-C0n05tvQ.js";import"./tooltipContext-Bd7ebjWJ.js";import"./ReactUtils-DiD0pNfa.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpUAVjZ.js";import"./useAnimationId-BNxZGCVU.js";import"./Trapezoid-DIkxpdcS.js";import"./Sector-DE839nPA.js";import"./Symbols-4LuKRow4.js";import"./Curve-Bv3AqiO6.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./ErrorBarContext-BLvMse44.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./getZIndexFromUnknown-DDcD80js.js";import"./graphicalItemSelectors-C_fj_LyG.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
