import{e as t}from"./iframe-CTxRHOGj.js";import{R as s}from"./arrayEqualityCheck-B_rRIojj.js";import{L as m}from"./LineChart-CRgH-m5Z.js";import{L as c}from"./Line-D0jLL_KR.js";import{X as d}from"./XAxis-BNIlZlch.js";import{R as l}from"./RechartsHookInspector-Dvolm171.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B2RXwXeU.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./Layer-NDmuZa_H.js";import"./ReactUtils-BZY6277w.js";import"./Label-D926DJYr.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./ZIndexLayer-hZNMFSqY.js";import"./ActivePoints-ColTAJU4.js";import"./Dot-BjkBWsnl.js";import"./types-CAlg1Faj.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./ErrorBarContext-D1j-EPSf.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./useAnimationId-BmKrhVKp.js";import"./getRadiusAndStrokeWidthFromDot-DhHV37ye.js";import"./ActiveShapeUtils-Dwyol1Bt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxJQxHPh.js";import"./Trapezoid-VAjw1k5b.js";import"./Sector-DQFWjz1_.js";import"./Symbols-BBka0yme.js";import"./Curve-Dmxl7Q3I.js";import"./CartesianAxis-BedncvxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
