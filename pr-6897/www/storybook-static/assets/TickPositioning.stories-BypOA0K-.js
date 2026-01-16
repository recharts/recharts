import{e as t}from"./iframe-BESbJ0y8.js";import{R as s}from"./arrayEqualityCheck-BJiY8zR4.js";import{L as m}from"./LineChart-HiSxed5h.js";import{L as c}from"./Line-IQUagBQ-.js";import{X as d}from"./XAxis-DXfH0Gay.js";import{R as l}from"./RechartsHookInspector-BIrUgBA6.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./PolarUtils-BLb-h-71.js";import"./RechartsWrapper-DRe6KgwL.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./Layer-C8CJBWmq.js";import"./ReactUtils-CdwmpjBo.js";import"./Label-qXVAmmrb.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./ActivePoints-CJDB75_w.js";import"./Dot-CXdKB8PK.js";import"./types-CGrtFV1P.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./ErrorBarContext-D0r4aWU5.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./useAnimationId-XfKJYBN0.js";import"./getRadiusAndStrokeWidthFromDot-B2Gik0kj.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./Trapezoid-BCkjDT6c.js";import"./Sector-DR905TlL.js";import"./Symbols-D6ejZ83Z.js";import"./Curve-9nr7VYb2.js";import"./CartesianAxis-D-J9lWts.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
