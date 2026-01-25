import{e}from"./iframe-zYnk8EOr.js";import{C as u}from"./ComposedChart-D5xvMhhv.js";import{R as h}from"./arrayEqualityCheck-R2aAAI7x.js";import{C as k}from"./CartesianGrid-qx_M6Mk1.js";import{B as o}from"./Bar-DWJ0slbO.js";import{Z as x}from"./ZAxis-j4hb1jC8.js";import{S as y}from"./Scatter-CJfv8Hv_.js";import{X as B}from"./XAxis-BSJK083u.js";import{Y as E}from"./YAxis--5gqcMjD.js";import{R as f}from"./RechartsHookInspector-BM6dBg77.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./CartesianAxis-BwSMeEYw.js";import"./Layer-B9ovT-3z.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./ZIndexLayer-DbRKS04n.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C_ibJ9CU.js";import"./ReactUtils-TEkJxkkD.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./useAnimationId-C9zF9Z14.js";import"./Trapezoid-Ciecc0SZ.js";import"./Sector-CRX25Q97.js";import"./Symbols-CvhTj7bZ.js";import"./Curve-BERjiOgY.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./ErrorBarContext-Bboddv8p.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./getZIndexFromUnknown-BLV71gej.js";import"./graphicalItemSelectors-BLhvCA_u.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
