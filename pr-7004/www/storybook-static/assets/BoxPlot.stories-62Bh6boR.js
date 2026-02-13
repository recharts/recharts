import{e}from"./iframe-8rINPBCK.js";import{C as u}from"./ComposedChart-Uze9vmcd.js";import{R as h}from"./arrayEqualityCheck-C3wBHH11.js";import{C as k}from"./CartesianGrid-jtKOKpn1.js";import{B as o}from"./Bar-T6FqE6cG.js";import{Z as x}from"./ZAxis-DSIXFcXO.js";import{S as y}from"./Scatter-DBT3DaKv.js";import{X as B}from"./XAxis-rjkohJgP.js";import{Y as E}from"./YAxis-CTYabjHl.js";import{R as f}from"./RechartsHookInspector-DhGNdH08.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./CartesianAxis-DTB3wekJ.js";import"./Layer-rS2qKox4.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./Label-CPR5zbup.js";import"./ZIndexLayer-BIlvRP3G.js";import"./types-BtRlzhwr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-ChV-AZlM.js";import"./ReactUtils-BygGLMXM.js";import"./ActiveShapeUtils-BOQsXSI9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeeZo8YN.js";import"./useAnimationId-D141hJYN.js";import"./Trapezoid-CwrzKYaP.js";import"./Sector-C71MUP7Q.js";import"./Symbols-CLShZ5Ps.js";import"./Curve-D7sQ6QWi.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./ErrorBarContext-CL1XlF2D.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./getZIndexFromUnknown-N_1o3M7k.js";import"./graphicalItemSelectors-eI3_Fu9E.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
