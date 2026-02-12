import{e}from"./iframe-Qw1xV4gr.js";import{C as u}from"./ComposedChart-CNN_EKWK.js";import{R as h}from"./arrayEqualityCheck-D10Koezk.js";import{C as k}from"./CartesianGrid-BN7mOFms.js";import{B as o}from"./Bar-D75Wa_0g.js";import{Z as x}from"./ZAxis-5ocG7fEy.js";import{S as y}from"./Scatter-BcHgPndy.js";import{X as B}from"./XAxis-CBWX_4iF.js";import{Y as E}from"./YAxis-C_ExxpTj.js";import{R as f}from"./RechartsHookInspector-D6S_l26T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T9NKaIls.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Layer-CkwgDlKc.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./ZIndexLayer-E7tGttad.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DoIMhh9S.js";import"./ReactUtils-NyMdEGMN.js";import"./ActiveShapeUtils-dC2_TVxn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-sthHTnfU.js";import"./useAnimationId-CmKwPH-s.js";import"./Trapezoid-q5W18TEo.js";import"./Sector-KkZnhZNR.js";import"./Symbols-CO8nxrkO.js";import"./Curve-BAYVpCYt.js";import"./RegisterGraphicalItemId-OUWj4Tar.js";import"./ErrorBarContext-JD7QlRlS.js";import"./GraphicalItemClipPath-CmAyPo3v.js";import"./SetGraphicalItem-BrmdzJxe.js";import"./getZIndexFromUnknown-CEDP4TCY.js";import"./graphicalItemSelectors-DIiyTOrt.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
