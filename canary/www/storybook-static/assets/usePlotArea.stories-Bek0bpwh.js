import{e as t}from"./iframe-Be0JMHKG.js";import{P as a}from"./PlotAreaShower-BtjPjtQq.js";import{c as p}from"./hooks-xrwIZsei.js";import{R as s}from"./arrayEqualityCheck-EyQ3L5Ga.js";import{C as n}from"./ComposedChart-CGSNhVQA.js";import{L as l}from"./Line-CLf1mTZx.js";import{X as d}from"./XAxis-BpLM44rb.js";import{Y as h}from"./YAxis-DHI26o98.js";import{L as c}from"./Legend-FRWeEnPb.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C6t0D3ol.js";import"./immer-CtKQQ-wS.js";import"./axisSelectors-C9mh9qYD.js";import"./d3-scale-DcVoBlH3.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-P4FnSb9y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BN1eXA1J.js";import"./index-C3PHkgdT.js";import"./zIndexSlice-Dprd7Xhy.js";import"./renderedTicksSlice-Z7QNJQ_Y.js";import"./CartesianChart-DHx86xgd.js";import"./chartDataContext-BmO3bTO_.js";import"./CategoricalChart-Cj__GJYp.js";import"./Layer-Ce00NG_9.js";import"./ReactUtils-BDRjtMGi.js";import"./Label-CgKr6rFd.js";import"./Text-Bbi69GeO.js";import"./DOMUtils-xnRjlpdc.js";import"./ZIndexLayer-C2oM15Rp.js";import"./ActivePoints-HPxaPMrx.js";import"./Dot-LgYL-L_X.js";import"./types-BE6ispln.js";import"./RegisterGraphicalItemId-B6mWng-O.js";import"./ErrorBarContext-CSxGgjy5.js";import"./GraphicalItemClipPath-BI28y9oi.js";import"./SetGraphicalItem-owgD-Syr.js";import"./useAnimationId-kpn7-WPo.js";import"./getRadiusAndStrokeWidthFromDot-Cr93TYyi.js";import"./ActiveShapeUtils-Djxieeih.js";import"./isPlainObject-Bd8ieRPg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5cLj3QF.js";import"./Trapezoid-CONlCK3y.js";import"./Sector-Qb-LMRcI.js";import"./Symbols-CKbcWLtD.js";import"./symbol-CXMp1weA.js";import"./step-HmHdlQax.js";import"./Curve-X4p0VWII.js";import"./CartesianAxis-Cva2Lh8B.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Dodh3F-h.js";import"./uniqBy-DO0PDSvA.js";import"./iteratee-BGvnERnv.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
