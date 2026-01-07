import{e}from"./iframe-VZdOSrkq.js";import{C as u}from"./ComposedChart-BhKILeAz.js";import{R as h}from"./arrayEqualityCheck-Ba8aNuDT.js";import{C as k}from"./CartesianGrid-DMjcwRE-.js";import{B as o}from"./Bar-DTA_2Xfm.js";import{Z as x}from"./ZAxis-DagziqnH.js";import{S as y}from"./Scatter-Cl2G9Qd5.js";import{X as B}from"./XAxis-CUPjg_0f.js";import{Y as E}from"./YAxis-BxbT09X2.js";import{R as f}from"./RechartsHookInspector-MoE0nLDg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./zIndexSlice-C3gfI6wW.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./CartesianAxis-dyxsJwQR.js";import"./Layer-BsibGM2g.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./Label-wuhIVgaJ.js";import"./ZIndexLayer-G2n4L0mz.js";import"./types-pQqJf-MX.js";import"./tooltipContext-BX2ila_0.js";import"./ReactUtils-CxvXJs5p.js";import"./ActiveShapeUtils-k9tVA3cu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CC7CQlR8.js";import"./useAnimationId-DK5gOqc4.js";import"./Trapezoid-DZdQIPsQ.js";import"./Sector-BFy_SoTX.js";import"./Symbols-C6oyye2I.js";import"./Curve-Drsk9B8o.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./ErrorBarContext-d23jDSCo.js";import"./GraphicalItemClipPath-BKYgv61x.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./getZIndexFromUnknown-C_Bz-Qor.js";import"./graphicalItemSelectors-Bfxoe3GI.js";import"./index-BmO0aGXh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
