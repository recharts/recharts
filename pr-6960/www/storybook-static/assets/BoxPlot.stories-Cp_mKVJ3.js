import{e}from"./iframe-CU9XYLf3.js";import{C as u}from"./ComposedChart-DmX0UFL1.js";import{R as h}from"./arrayEqualityCheck-eFaqPFyI.js";import{C as k}from"./CartesianGrid-D5isxS3W.js";import{B as o}from"./Bar-DgOhgaJS.js";import{Z as x}from"./ZAxis-CGOdQ9XA.js";import{S as y}from"./Scatter-N2Au8fGb.js";import{X as B}from"./XAxis-Bcv7Mskw.js";import{Y as E}from"./YAxis-BemMrlFL.js";import{R as f}from"./RechartsHookInspector-_W3CqC5M.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMA78OKy.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./CartesianAxis-D8E3unsA.js";import"./Layer-DY220JH0.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CaWPMfld.js";import"./ReactUtils-D-xpVFtM.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wboqG7.js";import"./useAnimationId-VWf3KASX.js";import"./Trapezoid-BbNzWkoD.js";import"./Sector-CkX8bkkx.js";import"./Symbols-DqoOcyix.js";import"./Curve-_cbPrSga.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./ErrorBarContext-asfsfUUV.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./getZIndexFromUnknown-BscCup4G.js";import"./graphicalItemSelectors-CNg_cJMp.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
