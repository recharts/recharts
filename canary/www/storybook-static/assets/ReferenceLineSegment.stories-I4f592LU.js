import{e}from"./iframe-Be0JMHKG.js";import{R as i}from"./arrayEqualityCheck-EyQ3L5Ga.js";import{C as p}from"./ComposedChart-CGSNhVQA.js";import{C as a}from"./CartesianGrid-D25VOmLw.js";import{X as n}from"./XAxis-BpLM44rb.js";import{Y as s}from"./YAxis-DHI26o98.js";import{L as c}from"./Line-CLf1mTZx.js";import{R as d}from"./ReferenceLine-DWJI3lEz.js";import{R as g}from"./RechartsHookInspector-L4PsTFM9.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-P4FnSb9y.js";import"./immer-CtKQQ-wS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BN1eXA1J.js";import"./index-C3PHkgdT.js";import"./hooks-xrwIZsei.js";import"./axisSelectors-C9mh9qYD.js";import"./d3-scale-DcVoBlH3.js";import"./zIndexSlice-Dprd7Xhy.js";import"./renderedTicksSlice-Z7QNJQ_Y.js";import"./CartesianChart-DHx86xgd.js";import"./chartDataContext-BmO3bTO_.js";import"./CategoricalChart-Cj__GJYp.js";import"./CartesianAxis-Cva2Lh8B.js";import"./Layer-Ce00NG_9.js";import"./Text-Bbi69GeO.js";import"./DOMUtils-xnRjlpdc.js";import"./Label-CgKr6rFd.js";import"./ZIndexLayer-C2oM15Rp.js";import"./types-BE6ispln.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BDRjtMGi.js";import"./ActivePoints-HPxaPMrx.js";import"./Dot-LgYL-L_X.js";import"./RegisterGraphicalItemId-B6mWng-O.js";import"./ErrorBarContext-CSxGgjy5.js";import"./GraphicalItemClipPath-BI28y9oi.js";import"./SetGraphicalItem-owgD-Syr.js";import"./useAnimationId-kpn7-WPo.js";import"./getRadiusAndStrokeWidthFromDot-Cr93TYyi.js";import"./ActiveShapeUtils-Djxieeih.js";import"./isPlainObject-Bd8ieRPg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5cLj3QF.js";import"./Trapezoid-CONlCK3y.js";import"./Sector-Qb-LMRcI.js";import"./Symbols-CKbcWLtD.js";import"./symbol-CXMp1weA.js";import"./step-HmHdlQax.js";import"./Curve-X4p0VWII.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B0wdhlLK.js";import"./ChartSizeDimensions-C6t0D3ol.js";import"./OffsetShower-DAHfT2r_.js";import"./PlotAreaShower-BtjPjtQq.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
