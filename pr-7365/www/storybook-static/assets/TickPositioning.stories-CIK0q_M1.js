import{e as t}from"./iframe-CivULM0O.js";import{g as m}from"./arrayEqualityCheck-PbQt1vd_.js";import{L as s}from"./LineChart-B90z0YGN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BcwWxmgV.js";import{X as l}from"./XAxis-CYAQkN2U.js";import{R as v}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./immer-C3JSSs7p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./Curve-CR9QitUx.js";import"./types-CYA8PCW2.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./Layer-BOVDUSvA.js";import"./ReactUtils-B75F0iOa.js";import"./Label-BAI4tr_y.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./ZIndexLayer-CgUDZ3al.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./CartesianAxis-G3eNrHbq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const mt=["TickPositioning"];export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
