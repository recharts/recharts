import{e}from"./iframe-IlsB_rJq.js";import{C as u}from"./ComposedChart-CyYwEyzP.js";import{R as h}from"./arrayEqualityCheck-DRku3AZG.js";import{C as k}from"./CartesianGrid-Bw_j7iWQ.js";import{B as o}from"./Bar-D37IreDG.js";import{Z as x}from"./ZAxis-CnCQhSUV.js";import{S as y}from"./Scatter-Dbd0PAI8.js";import{X as B}from"./XAxis-BQuXAPTr.js";import{Y as E}from"./YAxis-454ehxbM.js";import{R as f}from"./RechartsHookInspector-HlZdM34s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3UkR7qf.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./CartesianAxis-SxT37-Os.js";import"./Layer-vBbFq665.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./ZIndexLayer-9CrWluzk.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C9iFvvqf.js";import"./ReactUtils-Pssbr3N2.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./useAnimationId-Bms0uFs7.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./Symbols-DKmDvY-C.js";import"./Curve-BktJTjWe.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./getZIndexFromUnknown-B_khhYrD.js";import"./graphicalItemSelectors-Da7SJyMZ.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
