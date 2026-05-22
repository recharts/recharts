import{e as t}from"./iframe-BzghaLEp.js";import{g as m}from"./arrayEqualityCheck-CS3de1t5.js";import{L as s}from"./LineChart-DyvViKij.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-LDEjBea-.js";import{X as l}from"./XAxis-CsBkluNM.js";import{R as v}from"./RechartsHookInspector-BuYwcCb3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BVZsWnmP.js";import"./immer-BXETI75S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR3m1DYe.js";import"./index-DQ335CG7.js";import"./hooks-BRSXFpN3.js";import"./axisSelectors-aIIB8FuD.js";import"./d3-scale-qhwlSf_5.js";import"./zIndexSlice-DCGzB6PO.js";import"./renderedTicksSlice-STF43WXb.js";import"./CartesianChart-DcVmos4e.js";import"./chartDataContext-D4_qA_s_.js";import"./CategoricalChart-BnPKkEWG.js";import"./Curve-DBC2v7ce.js";import"./types-DUQUBotY.js";import"./step-Cb7NJXQj.js";import"./path-DyVhHtw_.js";import"./Layer-BJAfo-lt.js";import"./ReactUtils-DCWlBgg2.js";import"./Label-DpeHQT41.js";import"./Text-B8a7yFIp.js";import"./DOMUtils-Du7GfFqb.js";import"./ZIndexLayer-Bqel3NP6.js";import"./ActivePoints-B-bDqxYx.js";import"./Dot-DOp6zc7l.js";import"./RegisterGraphicalItemId-BXJ3uWYw.js";import"./ErrorBarContext-D8hJtv3V.js";import"./GraphicalItemClipPath-CjgICd57.js";import"./SetGraphicalItem-c7OZec2D.js";import"./useAnimationId-DtC5i2fv.js";import"./getRadiusAndStrokeWidthFromDot-r9y5eo4i.js";import"./ActiveShapeUtils-DC8wyXqX.js";import"./CartesianAxis-C9tacUHl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BG2QvuV2.js";import"./ChartSizeDimensions-hfJquHEG.js";import"./OffsetShower-_lbWu0gQ.js";import"./PlotAreaShower-CKhzQKyo.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
