import{e as t}from"./iframe-DA7dsAjt.js";import{P as a}from"./PlotAreaShower-BULJQmBU.js";import{c as p}from"./hooks-D-1ZrX9e.js";import{R as s}from"./arrayEqualityCheck-B2Tullra.js";import{C as n}from"./ComposedChart-BvICr3ON.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-0_vX2c1I.js";import{X as h}from"./XAxis-D3BVUN8u.js";import{Y as c}from"./YAxis-C4Bf-We3.js";import{L as g}from"./Legend-CIyYm_rT.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./immer-CgNeP4Cn.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./Layer-CA2bGkBA.js";import"./ReactUtils-Cqv1MuoY.js";import"./Label-BbSyBdDv.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./ZIndexLayer-CtisNWGZ.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./types-BGlT9ghA.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./useAnimationId-Ow7TV2bH.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-tNMC4o.js";import"./Trapezoid-CUQqnsJW.js";import"./Sector-CYPQyxpp.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./Curve-CSUb-Mmt.js";import"./CartesianAxis-5nCOjy0L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CMdfJDCv.js";import"./uniqBy-R1SES33n.js";import"./iteratee-bjfE0mcN.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
