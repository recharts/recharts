import{e}from"./iframe-majBtK-E.js";import{C as u}from"./ComposedChart-Rw7RmovT.js";import{R as h}from"./arrayEqualityCheck-DVgUr5sF.js";import{C as k}from"./CartesianGrid-BX5yW7yI.js";import{B as o}from"./Bar-CAKBnaS0.js";import{Z as x}from"./ZAxis-CtQ5zu6v.js";import{S as y}from"./Scatter-Dy4tPLCT.js";import{X as B}from"./XAxis-BuPlQDHV.js";import{Y as E}from"./YAxis-RBaLqt0k.js";import{R as f}from"./RechartsHookInspector-C8tTsK9b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0u9Ddv25.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./zIndexSlice-7SDVSN9y.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./PolarUtils-CJsRsyos.js";import"./CartesianChart-BL_zgiIZ.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./CartesianAxis-BrVqccJA.js";import"./Layer-BLDMzEqE.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./Label-e34JrSXW.js";import"./ZIndexLayer-Dv76Cipi.js";import"./types-C6X4a6Ih.js";import"./tooltipContext-D16OHKBb.js";import"./ReactUtils-CnNdH0Da.js";import"./ActiveShapeUtils-CN13qk7C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-en3DGB-O.js";import"./useAnimationId-BsAnEyOV.js";import"./Trapezoid-DktYSmhy.js";import"./Sector-7pSu32ck.js";import"./Symbols-Cp35_dcw.js";import"./Curve-9TopWPhs.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./ErrorBarContext-DUFA32t0.js";import"./GraphicalItemClipPath-CMlJ6COV.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./getZIndexFromUnknown-C71NvjEZ.js";import"./graphicalItemSelectors-Dgnm4iSu.js";import"./index-C8KZ_CA2.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
