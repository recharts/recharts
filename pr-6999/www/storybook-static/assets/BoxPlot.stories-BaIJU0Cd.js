import{e}from"./iframe-CMiM_Qgn.js";import{C as u}from"./ComposedChart-DsrHqkWw.js";import{R as h}from"./arrayEqualityCheck-_vyoivmV.js";import{C as k}from"./CartesianGrid-fLuhqndc.js";import{B as o}from"./Bar-bZFYVcwh.js";import{Z as x}from"./ZAxis-DSR3WfIP.js";import{S as y}from"./Scatter-D2Q2ZF6Z.js";import{X as B}from"./XAxis-DaiKeapO.js";import{Y as E}from"./YAxis-Dt3qo-M7.js";import{R as f}from"./RechartsHookInspector-DmT1dtLd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./resolveDefaultProps-41R1n5JW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./CartesianAxis-BZUH34_W.js";import"./Layer-CgUnyU8v.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./Label-gyqygLIm.js";import"./ZIndexLayer-BI90jm2U.js";import"./types-CyIMtLrt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DFzSd-KY.js";import"./ReactUtils-BtLAWZFM.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./useAnimationId-Cub4YggD.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./Symbols-BXDeECV7.js";import"./Curve-BXAMzxgI.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./ErrorBarContext-DTmAcjw7.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./getZIndexFromUnknown-CTEjBhyx.js";import"./graphicalItemSelectors-CAXzLey6.js";import"./index-1Y0M71Of.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./OffsetShower-D9-0tfso.js";import"./PlotAreaShower-Dq9EyHFw.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
