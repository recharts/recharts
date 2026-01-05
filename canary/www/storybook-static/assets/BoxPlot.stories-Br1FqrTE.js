import{e}from"./iframe-Dh_IuGPW.js";import{C as u}from"./ComposedChart-BT1Cqczr.js";import{R as h}from"./arrayEqualityCheck-7YZsQ9Yt.js";import{C as k}from"./CartesianGrid-BjJCRgc8.js";import{B as o}from"./Bar-CUQ38gs9.js";import{Z as x}from"./ZAxis-CTDHCYND.js";import{S as y}from"./Scatter-BDFciFB9.js";import{X as B}from"./XAxis-BVn7zGv-.js";import{Y as E}from"./YAxis-FBaKUNO9.js";import{R as f}from"./RechartsHookInspector--VVdTSeU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./zIndexSlice-Bln6WQdm.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./PolarUtils-ByAhdJKw.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./CartesianAxis-LyuwKeVQ.js";import"./Layer-0hKCd9Go.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./Label-CwPC6lqR.js";import"./ZIndexLayer-DgCIyG2A.js";import"./types-C1SnlukV.js";import"./tooltipContext-17lE_Hlo.js";import"./ReactUtils-CN6AvFkh.js";import"./ActiveShapeUtils-DNzZoZ6X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAYNTDZ7.js";import"./useAnimationId-DFnSrzQe.js";import"./Trapezoid-Dv67nGF9.js";import"./Sector-D9tond7R.js";import"./Symbols-JLtyUHl6.js";import"./Curve-et2ZIOkM.js";import"./RegisterGraphicalItemId-C5qI6NMo.js";import"./ErrorBarContext-8rW3rtTK.js";import"./GraphicalItemClipPath-DVZrGS-c.js";import"./SetGraphicalItem-l88fIsgf.js";import"./getZIndexFromUnknown-DOBPS2hI.js";import"./graphicalItemSelectors-DeRV2J7H.js";import"./index-DsFYMPMW.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./OffsetShower-DaKIwyBr.js";import"./PlotAreaShower-xnDTqs4e.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
