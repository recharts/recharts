import{e as t}from"./iframe-ildNGUcB.js";import{R as s}from"./arrayEqualityCheck-DoW--ad2.js";import{L as m}from"./LineChart-DfzL18R0.js";import{L as c}from"./Line-Cn-oM2ey.js";import{X as d}from"./XAxis-BpmpMVxP.js";import{R as l}from"./RechartsHookInspector-DjpRKvg6.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BhDWMvuB.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./zIndexSlice-D5G-T-vj.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./Layer-C1Vpqy4i.js";import"./ReactUtils-DZ7Bf0_2.js";import"./Label-hP_NWlrR.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./ActivePoints-VRWpag3q.js";import"./Dot-BbvpQGB8.js";import"./types-C_F-U0PG.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./ErrorBarContext-Bjz9qEy8.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./useAnimationId-BnV1d9M_.js";import"./getRadiusAndStrokeWidthFromDot-DZOYBeyk.js";import"./ActiveShapeUtils-BXCOQYub.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dt6Qepe_.js";import"./Trapezoid-BeDQjyAm.js";import"./Sector-0N1SRZV_.js";import"./Symbols-DUzk_pf6.js";import"./Curve-C50TS3eJ.js";import"./CartesianAxis-BT55_pa3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Bl4fk5Ry.js";import"./ChartSizeDimensions-DAfFC157.js";import"./OffsetShower-DLkMsMHT.js";import"./PlotAreaShower-Bhcl3vg9.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
