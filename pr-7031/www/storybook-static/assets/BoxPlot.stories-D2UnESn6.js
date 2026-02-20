import{e}from"./iframe-d3qCsCxk.js";import{C as u}from"./ComposedChart-D8dIpZCb.js";import{R as h}from"./arrayEqualityCheck-BSeezrw4.js";import{C as k}from"./CartesianGrid-DEXLWDCT.js";import{B as o}from"./Bar-DwsO9kUw.js";import{Z as x}from"./ZAxis-CYi61C98.js";import{S as y}from"./Scatter-cLVV0Mty.js";import{X as B}from"./XAxis-BmRFblia.js";import{Y as E}from"./YAxis-BYMuo7gN.js";import{R as f}from"./RechartsHookInspector-ILLh7APk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./CartesianAxis-CyPlzw3T.js";import"./Layer-CUjYvDWI.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./Label-oam-p3Cf.js";import"./ZIndexLayer-D3LUzJCs.js";import"./types-B3TZRrDh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CVRUuPKw.js";import"./ReactUtils-DxKtCUtQ.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./useAnimationId-OmpdHa5n.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./Symbols-XJ3mO982.js";import"./Curve-D8rLd4C3.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./ErrorBarContext-BMBoMP-k.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./getZIndexFromUnknown-BTj_ur5k.js";import"./graphicalItemSelectors-CKDXMRcS.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],Be={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ee=["BoxPlotChart"];export{m as BoxPlotChart,Ee as __namedExportsOrder,Be as default};
