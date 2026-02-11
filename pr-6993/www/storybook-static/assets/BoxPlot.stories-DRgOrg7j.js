import{e}from"./iframe-B-Dp18cD.js";import{C as u}from"./ComposedChart-D9f0fHzi.js";import{R as h}from"./arrayEqualityCheck-n6VvjF1v.js";import{C as k}from"./CartesianGrid-26YaUCM_.js";import{B as o}from"./Bar-D-as0yxI.js";import{Z as x}from"./ZAxis-DtfYoPdy.js";import{S as y}from"./Scatter-btT_FXYF.js";import{X as B}from"./XAxis-BEv3sJL0.js";import{Y as E}from"./YAxis-B-v6qizp.js";import{R as f}from"./RechartsHookInspector-CHTp98JP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uJ7UoaAC.js";import"./hooks-BBxeeore.js";import"./axisSelectors-OuIDnENT.js";import"./zIndexSlice-BzpbxKTs.js";import"./resolveDefaultProps-ClUavgcZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJ47btSF.js";import"./chartDataContext-zsQASXZN.js";import"./CategoricalChart-BJqjUyur.js";import"./CartesianAxis-Btb51IPQ.js";import"./Layer-sRK8yL2I.js";import"./Text-B2w_0Ecu.js";import"./DOMUtils-3l5WS7n1.js";import"./Label-GlXCPztW.js";import"./ZIndexLayer-DZaorHCJ.js";import"./types-D_31He_k.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-HGf7dTk3.js";import"./ReactUtils-CS1JgmNI.js";import"./ActiveShapeUtils-m1wJj2Q4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B651D3DK.js";import"./useAnimationId-BP7QGUYe.js";import"./Trapezoid-BORovwBS.js";import"./Sector-ByD9psuI.js";import"./Symbols-CnYaDh9V.js";import"./Curve-B9DUpoMg.js";import"./RegisterGraphicalItemId-CxTaZDZc.js";import"./ErrorBarContext-BVXjh-mB.js";import"./GraphicalItemClipPath-C0nz93m4.js";import"./SetGraphicalItem-Dgsvv4_3.js";import"./getZIndexFromUnknown-BEmom1nm.js";import"./graphicalItemSelectors-kKLZsU_A.js";import"./index-GlpghtR4.js";import"./ChartSizeDimensions-DKPKgNfh.js";import"./OffsetShower-vf47GvB5.js";import"./PlotAreaShower-oIrFVBlc.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
