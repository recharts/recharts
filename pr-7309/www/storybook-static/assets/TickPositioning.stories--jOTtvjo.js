import{e as t}from"./iframe-BWXS80lS.js";import{R as n}from"./arrayEqualityCheck-C3u4XnRQ.js";import{L as s}from"./LineChart-JuYsOgdS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D2_PZAg_.js";import{X as l}from"./XAxis-_91HGxIi.js";import{R as v}from"./RechartsHookInspector-BRyQ5hs2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuIDsZJ5.js";import"./immer-q9ikkIh9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ge4Ob0hk.js";import"./index-BHFN0jNx.js";import"./hooks-RRXvqXA6.js";import"./axisSelectors-CxvM0uDn.js";import"./d3-scale-zfNl6p6O.js";import"./zIndexSlice-d9o2MkaU.js";import"./renderedTicksSlice-DqJmQzpf.js";import"./CartesianChart-34jBpyPx.js";import"./chartDataContext-BhTPdOXh.js";import"./CategoricalChart-DEIvmDa9.js";import"./Layer-CiG7NGHu.js";import"./ReactUtils-C5S3KkGf.js";import"./Label-CJTshKiS.js";import"./Text-BQ1FWDem.js";import"./DOMUtils-DC1JBHtR.js";import"./ZIndexLayer-fCru-3Nt.js";import"./ActivePoints-BQI1dN0-.js";import"./Dot-BwCqCngA.js";import"./types-B2Bimmd7.js";import"./RegisterGraphicalItemId-CEYbgURY.js";import"./ErrorBarContext-BMlXzYwR.js";import"./GraphicalItemClipPath-DmuLKEXw.js";import"./SetGraphicalItem-Bs8XX-Ij.js";import"./useAnimationId-8mmnumbx.js";import"./getRadiusAndStrokeWidthFromDot-CUi_ls90.js";import"./ActiveShapeUtils-BT90lXsu.js";import"./isPlainObject-Cy0CV0qj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4VIJx5D.js";import"./Trapezoid-DpceZUPJ.js";import"./Sector-CLFD9_Zr.js";import"./Symbols-BWe2eBvB.js";import"./symbol-BsfZTgYj.js";import"./step-CtJYHt9n.js";import"./Curve-DycDyh58.js";import"./CartesianAxis-B8jMapSP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DflyfLFf.js";import"./ChartSizeDimensions-hQ4c9Mxw.js";import"./OffsetShower-uoVY1zNd.js";import"./PlotAreaShower-BwJGGkjL.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
