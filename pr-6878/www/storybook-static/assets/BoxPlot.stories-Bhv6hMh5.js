import{e}from"./iframe-CoPAm7V1.js";import{C as u}from"./ComposedChart--N9Ah0Mu.js";import{R as h}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as k}from"./CartesianGrid-CiDPw85C.js";import{B as o}from"./Bar-mYqqMHi8.js";import{Z as x}from"./ZAxis-DIZ9AxAO.js";import{S as y}from"./Scatter-9nPlxulC.js";import{X as B}from"./XAxis-DI-YRLnX.js";import{Y as E}from"./YAxis-BQlirb_K.js";import{R as f}from"./RechartsHookInspector-CfbHdkme.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeO9xugK.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./zIndexSlice-CV1CLEn_.js";import"./resolveDefaultProps-OnP709yn.js";import"./PolarUtils-DGkU6n7f.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./CartesianAxis-ksOJ1Son.js";import"./Layer-BHClijQk.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./Label-BN0l3Vc3.js";import"./ZIndexLayer-DI7Wag2n.js";import"./types-BF6A7chk.js";import"./tooltipContext-DUgdEMZ_.js";import"./ReactUtils-B2MREsDE.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./useAnimationId-BwvCPaTs.js";import"./Trapezoid-f55pqUw3.js";import"./Sector-CfHQ2k9y.js";import"./Symbols-oRqZ57VZ.js";import"./Curve-DDvcpmM9.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./ErrorBarContext-BY_hX5kq.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./getZIndexFromUnknown-D4VqWDgG.js";import"./graphicalItemSelectors-BJJxd4bN.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
