import{e}from"./iframe-DTmqf-89.js";import{C as u}from"./ComposedChart-N22sluFG.js";import{R as h}from"./arrayEqualityCheck-B5lu4Lk9.js";import{C as k}from"./CartesianGrid-BWgS--Va.js";import{B as o}from"./Bar-CoyBKVvo.js";import{Z as x}from"./ZAxis-Dnxy_U5-.js";import{S as y}from"./Scatter-B235CjX1.js";import{X as B}from"./XAxis-FYHpftxu.js";import{Y as E}from"./YAxis-CBw5C5aG.js";import{R as f}from"./RechartsHookInspector-1827yCK6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-COXu3P-w.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./resolveDefaultProps-C00TVibV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./CartesianAxis-CyR9LutT.js";import"./Layer-BTS4uGxy.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./Label-egeGTsC3.js";import"./ZIndexLayer-DxJNdv8G.js";import"./types-B8nej2n0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DWeHrq8C.js";import"./ReactUtils-byYmdu0g.js";import"./ActiveShapeUtils-BRF5U1J5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-rgqUccDm.js";import"./useAnimationId-CwTw9zZj.js";import"./Trapezoid-jP0l7-Gz.js";import"./Sector-CGOePyQw.js";import"./Symbols-C_pVSGbd.js";import"./Curve-B7xWVUlS.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./ErrorBarContext-CQrouc6N.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./getZIndexFromUnknown-BCgZvKju.js";import"./graphicalItemSelectors-B4vCRplq.js";import"./index-Csnv4pYo.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
