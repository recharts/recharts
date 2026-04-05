import{e as t}from"./iframe-DRAz-MOV.js";import{P as a}from"./PlotAreaShower-B89WvJSc.js";import{c as p}from"./hooks-DKliz_JR.js";import{R as s}from"./arrayEqualityCheck-C8643F2b.js";import{C as n}from"./ComposedChart-O_-CVA72.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CziVn159.js";import{X as h}from"./XAxis-LfLbW5h3.js";import{Y as c}from"./YAxis-Exnm2m07.js";import{L as g}from"./Legend-DAlheZF3.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./immer-7dbUwIWB.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./Layer-7ou2jnr2.js";import"./ReactUtils-C_AD8QSo.js";import"./Label-BA834Vai.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./ZIndexLayer-BQfiKj8k.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./types-BHj1SP9z.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./useAnimationId-CSxRZUsd.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIlVtzFE.js";import"./Trapezoid-i_eTbcia.js";import"./Sector-BFFY6GnN.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./Curve-rCu2vvgU.js";import"./CartesianAxis-BEMLBmX5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Buqr-Q9u.js";import"./uniqBy-C7Z_8_ul.js";import"./iteratee-BbZqSogb.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
