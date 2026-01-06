import{e}from"./iframe-DLhPWxyK.js";import{C as u}from"./ComposedChart-DNdReU5t.js";import{R as h}from"./arrayEqualityCheck-m1RhjOmx.js";import{C as k}from"./CartesianGrid-Bs1CS7L4.js";import{B as o}from"./Bar-DdI9BB9r.js";import{Z as x}from"./ZAxis-fx8l-Un4.js";import{S as y}from"./Scatter-Ba7nITih.js";import{X as B}from"./XAxis-sgPLB-rr.js";import{Y as E}from"./YAxis-BkUnmSc2.js";import{R as f}from"./RechartsHookInspector-HNjcmSsy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./CartesianAxis-DsXxqkAo.js";import"./Layer-T-_zDyRj.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./Label-Cfm9uiYS.js";import"./ZIndexLayer-CE4rF1P8.js";import"./types-DGdi1KYp.js";import"./tooltipContext-YFR452HV.js";import"./ReactUtils-CkbQi9iw.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Trapezoid-C-EY4dJQ.js";import"./Sector-tN30gQok.js";import"./Symbols-CNkEhL1u.js";import"./Curve-DeIwtCC2.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./getZIndexFromUnknown-D663qf7E.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
