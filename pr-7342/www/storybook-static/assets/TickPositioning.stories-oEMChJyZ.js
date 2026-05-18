import{e as t}from"./iframe-CW44RDCc.js";import{g as n}from"./arrayEqualityCheck-Ua4xjAL-.js";import{L as s}from"./LineChart-B0PpJA2W.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cq678OID.js";import{X as l}from"./XAxis-BtxpyVu0.js";import{R as v}from"./RechartsHookInspector-CE02yOZG.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCGYFD7i.js";import"./immer-XdRVX9he.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3a2SuVp.js";import"./index-q0MlqJm9.js";import"./hooks-PNvgBz41.js";import"./axisSelectors-CKeyOf07.js";import"./d3-scale-BVNpQg4a.js";import"./zIndexSlice-B0Fs0Bds.js";import"./renderedTicksSlice-m2ISnyyr.js";import"./CartesianChart-CTskZI97.js";import"./chartDataContext-BIpjCG9Z.js";import"./CategoricalChart-BSsRNKhV.js";import"./Layer-8Qf7pjam.js";import"./ReactUtils-D_YL06Q3.js";import"./Label-CB32eiK0.js";import"./Text-B0bhoYGy.js";import"./DOMUtils-DcGI1ooU.js";import"./ZIndexLayer-DOf301bL.js";import"./ActivePoints-CzNqaTiV.js";import"./Dot-CJ1Gpj_u.js";import"./types-B4uBrmm7.js";import"./RegisterGraphicalItemId-C2nT64rB.js";import"./ErrorBarContext-CTE9_ggH.js";import"./GraphicalItemClipPath-2q24bU0-.js";import"./SetGraphicalItem--ChXDLvH.js";import"./useAnimationId-DAlITmll.js";import"./getRadiusAndStrokeWidthFromDot-BIUpFF8r.js";import"./ActiveShapeUtils-Sw9eCZBU.js";import"./isPlainObject-B7SWhIBJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Chq6EJDX.js";import"./Trapezoid-CMZodTaL.js";import"./Sector-CwAajl9S.js";import"./Symbols-DPIxRI8N.js";import"./symbol-DbqMCeb2.js";import"./step-_iQ5Op8T.js";import"./Curve-OVW22O2P.js";import"./CartesianAxis-BktLkXzl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-at3I6h66.js";import"./ChartSizeDimensions-O4pbDmZW.js";import"./OffsetShower-CmBjVyZD.js";import"./PlotAreaShower-9R2kP3z1.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
