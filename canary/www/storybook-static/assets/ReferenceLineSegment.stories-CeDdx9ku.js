import{e}from"./iframe-BC-5LcYb.js";import{R as i}from"./arrayEqualityCheck-ChXaihMZ.js";import{C as p}from"./ComposedChart-CeA0TXnQ.js";import{C as a}from"./CartesianGrid-fHF5ZW2a.js";import{X as n}from"./XAxis-c4svWBsh.js";import{Y as s}from"./YAxis-DdqcUQaJ.js";import{L as c}from"./Line-valcrcoh.js";import{R as d}from"./ReferenceLine-CAwp0je7.js";import{R as g}from"./RechartsHookInspector-B75ZFa4B.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./immer-ZiBWKhHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Da5X0m.js";import"./index-DddLbDqU.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./zIndexSlice-BntL5RH1.js";import"./renderedTicksSlice-D9tlxui6.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./CartesianAxis-B0mR8vIz.js";import"./Layer-DTseK4B8.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./Label-DpYIsLw2.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./types-DPX13aC-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DTBTVl0S.js";import"./ActivePoints-CiWs6vAv.js";import"./Dot-DN8gKT9r.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./ErrorBarContext-B8bfqZ6V.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./useAnimationId-1buHKKGB.js";import"./getRadiusAndStrokeWidthFromDot-D-M3bT9T.js";import"./ActiveShapeUtils-i3MObavq.js";import"./isPlainObject-CJKJH7Oc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BjlfkU01.js";import"./Trapezoid-JczkhOAH.js";import"./Sector-BhUjloQr.js";import"./Symbols-CjqMpyW7.js";import"./symbol-BKo09A-g.js";import"./step-CVSHTaSO.js";import"./Curve-28zddxeA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_pdBQCR.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
