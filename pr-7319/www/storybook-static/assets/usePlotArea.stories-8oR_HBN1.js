import{e as t}from"./iframe-bIRDwOrj.js";import{P as a}from"./PlotAreaShower-8mw46bvb.js";import{c as p}from"./hooks-BdMZPZGx.js";import{R as s}from"./arrayEqualityCheck-TXFMRjRi.js";import{C as n}from"./ComposedChart-B96jNgZT.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B60oELve.js";import{X as h}from"./XAxis-R_euWI3w.js";import{Y as c}from"./YAxis-Cmkuai_3.js";import{L as g}from"./Legend-DSQOIfOC.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./immer-BfeMUSMO.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./zIndexSlice-D22DBnXA.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./Layer-IjPfnpTW.js";import"./ReactUtils-CzayGhzm.js";import"./Label-C1RClCIo.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./ZIndexLayer-D7UlnPMP.js";import"./ActivePoints-CJrfz0Fi.js";import"./Dot-BCbECuJO.js";import"./types-dvoy8M64.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./useAnimationId-Co08wyJa.js";import"./getRadiusAndStrokeWidthFromDot-C0F5EKdh.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./step-DQ7wUDFq.js";import"./Curve-orFRmx5o.js";import"./CartesianAxis-mK0sN7a0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
