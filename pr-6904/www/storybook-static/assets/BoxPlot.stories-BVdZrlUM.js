import{e}from"./iframe-BLLNbNku.js";import{C as u}from"./ComposedChart-BPKhM1pc.js";import{R as h}from"./arrayEqualityCheck-Co8h5dnX.js";import{C as k}from"./CartesianGrid-NLii9Zxh.js";import{B as o}from"./Bar-h88FZy8Q.js";import{Z as x}from"./ZAxis-DmBYoEVS.js";import{S as y}from"./Scatter-kK2e_zE_.js";import{X as B}from"./XAxis-raVyKb45.js";import{Y as E}from"./YAxis-DzinWbKB.js";import{R as f}from"./RechartsHookInspector-0ZdSIZYh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./PolarUtils-DXjI68e5.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./CartesianAxis-ol8Jf5am.js";import"./Layer-BCxNAEKV.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./Label-BoL4zXeM.js";import"./ZIndexLayer-rdL7qpG4.js";import"./types-C2V5y-Kb.js";import"./tooltipContext-Di8nQB5E.js";import"./ReactUtils-DqoF2LGV.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./useAnimationId-Brx318jV.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./Symbols-Uq5NG2Xk.js";import"./Curve-k7SSPeeE.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./ErrorBarContext-HC4TQGzt.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./getZIndexFromUnknown-DPicAPHm.js";import"./graphicalItemSelectors-C0tmLhQc.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
