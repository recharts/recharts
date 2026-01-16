import{e}from"./iframe-BhN7WL5Z.js";import{C as u}from"./ComposedChart-MPi4Nq7B.js";import{R as h}from"./arrayEqualityCheck-D4vVSxnz.js";import{C as k}from"./CartesianGrid-BaKHie_g.js";import{B as o}from"./Bar-BnWv4sW0.js";import{Z as x}from"./ZAxis-DKwBRiGU.js";import{S as y}from"./Scatter-Dv6I9VPe.js";import{X as B}from"./XAxis-BkxM2U5C.js";import{Y as E}from"./YAxis-CLDqs-dP.js";import{R as f}from"./RechartsHookInspector-DuzZFa2V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ngVbXQIL.js";import"./hooks-EmXHGT5T.js";import"./axisSelectors-BCCMRHlB.js";import"./zIndexSlice-wy9BZePe.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./PolarUtils-DA1Z2LDM.js";import"./CartesianChart-DIFYt1Ja.js";import"./chartDataContext-Dmy6E_I7.js";import"./CategoricalChart-BDJKnV04.js";import"./CartesianAxis-CsSTEuVM.js";import"./Layer-CfPqbk4S.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./Label-DbCyuY2T.js";import"./ZIndexLayer-C8mR-iMG.js";import"./types-D2HNEHHU.js";import"./tooltipContext-DHhd83Jr.js";import"./ReactUtils-C4jZBCSK.js";import"./ActiveShapeUtils-rfu0ISSo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXwR0_dr.js";import"./useAnimationId-BWf0K4Q5.js";import"./Trapezoid-CAfSVxJ4.js";import"./Sector-DW4oDqQS.js";import"./Symbols-BSDl9S1a.js";import"./Curve-BUxUFTVS.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./ErrorBarContext-CR9IxJro.js";import"./GraphicalItemClipPath-DtY2K5G-.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./getZIndexFromUnknown-AoPoMgIJ.js";import"./graphicalItemSelectors-GuUi1bBK.js";import"./index-AX7IXW21.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
