import{e}from"./iframe-BsuuU2ac.js";import{C as u}from"./ComposedChart-CPJ4puZ0.js";import{R as h}from"./arrayEqualityCheck-BjO3Er2E.js";import{C as k}from"./CartesianGrid-CmOXpYee.js";import{B as o}from"./Bar-CP-uMjKm.js";import{Z as x}from"./ZAxis-bSY9AWZ_.js";import{S as y}from"./Scatter-CMd4GhSE.js";import{X as B}from"./XAxis-CsIw1iGz.js";import{Y as E}from"./YAxis-BTKigBpk.js";import{R as f}from"./RechartsHookInspector-BGkLBTS7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BH32z_Kk.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./zIndexSlice-Bir2u6Kx.js";import"./resolveDefaultProps-saNtUn-1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./CartesianAxis-CECRCtr2.js";import"./Layer-DM57kvBs.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./Label-DXc_GGWc.js";import"./ZIndexLayer-DAoCiEXG.js";import"./types-DmRJx57M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D4mwNmDm.js";import"./ReactUtils-D7uw0LSD.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./useAnimationId-WGg8-jRM.js";import"./Trapezoid-Ds5p844S.js";import"./Sector-CZIlwJfI.js";import"./Symbols-CcIdb3bs.js";import"./Curve-C6_JEQin.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./ErrorBarContext-CA3TWQkR.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./getZIndexFromUnknown-DE4K9ziD.js";import"./graphicalItemSelectors-BbeNwNaj.js";import"./index-BhAql3N3.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
