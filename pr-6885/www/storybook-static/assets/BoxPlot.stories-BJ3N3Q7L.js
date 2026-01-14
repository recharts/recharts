import{e}from"./iframe-DYFx2r-j.js";import{C as u}from"./ComposedChart-BDMAP_Xz.js";import{R as h}from"./arrayEqualityCheck-DCVaqN9G.js";import{C as k}from"./CartesianGrid-BbLxz0NB.js";import{B as o}from"./Bar-BY5cU1ag.js";import{Z as x}from"./ZAxis-2oU4KswN.js";import{S as y}from"./Scatter-CKrQIA5q.js";import{X as B}from"./XAxis-CrWNcebb.js";import{Y as E}from"./YAxis-BQSE3w1-.js";import{R as f}from"./RechartsHookInspector-8HiD6XU_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./CartesianAxis-DetyPtZ0.js";import"./Layer-BC3vDM2H.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./Label-DjuisPzU.js";import"./ZIndexLayer-CCFXe3ig.js";import"./types-Cik9NZHM.js";import"./tooltipContext-DOjE1Le6.js";import"./ReactUtils-B5hh0nCE.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./useAnimationId-xTCLSGwz.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./Symbols-DOMt1Ple.js";import"./Curve-7IBZZol0.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./ErrorBarContext-BaEgtdW6.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./getZIndexFromUnknown-Cftz78Dm.js";import"./graphicalItemSelectors-hED77aIZ.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
