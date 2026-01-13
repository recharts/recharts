import{e}from"./iframe-ZneQOoj5.js";import{C as u}from"./ComposedChart-BAOyItJh.js";import{R as h}from"./arrayEqualityCheck-BNajb9_C.js";import{C as k}from"./CartesianGrid-9pcoHFJE.js";import{B as o}from"./Bar-C4Zk6jFu.js";import{Z as x}from"./ZAxis-D4wZ8I2g.js";import{S as y}from"./Scatter-BzAhewyV.js";import{X as B}from"./XAxis-iiI74VtB.js";import{Y as E}from"./YAxis-B0TStWJD.js";import{R as f}from"./RechartsHookInspector-o16may3G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./PolarUtils-kb3Ynomj.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./CartesianAxis-ZVfszaWr.js";import"./Layer-CxIF_InE.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./Label-s2gAZUId.js";import"./ZIndexLayer-DbAXPfU_.js";import"./types-D_7qF1fe.js";import"./tooltipContext-8ILqyGXc.js";import"./ReactUtils-Bw9y5ciT.js";import"./ActiveShapeUtils-DknnfoXI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-gyHsx_3Q.js";import"./useAnimationId-qX2h62Hn.js";import"./Trapezoid-aiu3Rixu.js";import"./Sector-CIuTmDEF.js";import"./Symbols-DOSg8I_W.js";import"./Curve-D5OcxVms.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./ErrorBarContext-ZUCqOgTN.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./getZIndexFromUnknown-DCgq52_L.js";import"./graphicalItemSelectors-Cd6CAvac.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
