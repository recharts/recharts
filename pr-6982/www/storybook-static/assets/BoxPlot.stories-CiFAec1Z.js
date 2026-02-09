import{e}from"./iframe-xqabyeMj.js";import{C as u}from"./ComposedChart-0LqFksIP.js";import{R as h}from"./arrayEqualityCheck-8L6pkBib.js";import{C as k}from"./CartesianGrid-BBOEzBe7.js";import{B as o}from"./Bar-CsLsjSaC.js";import{Z as x}from"./ZAxis-BCzbXpoA.js";import{S as y}from"./Scatter-CmgWSqGz.js";import{X as B}from"./XAxis-DCnicXeQ.js";import{Y as E}from"./YAxis-DVjLQwct.js";import{R as f}from"./RechartsHookInspector-CFJUwZ9y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BiqM6SLb.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./ZIndexLayer-DT_FpcHY.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-vrzPBdCH.js";import"./ReactUtils-bWGvhqKE.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnLG2ZKC.js";import"./useAnimationId-Cs8mC2Bw.js";import"./Trapezoid-CzCZCQIg.js";import"./Sector-BI2kwOQX.js";import"./Symbols-Co2bCSmq.js";import"./Curve-DXgolxSe.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./ErrorBarContext-BxBXv2QU.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./getZIndexFromUnknown-B6S0NDKc.js";import"./graphicalItemSelectors-D41rnoki.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
