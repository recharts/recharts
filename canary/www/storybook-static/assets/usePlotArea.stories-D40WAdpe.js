import{e as t}from"./iframe-C5l4DaJO.js";import{P as a}from"./PlotAreaShower-mtOsWYxm.js";import{c as p}from"./hooks-CSO2fo2K.js";import{R as s}from"./arrayEqualityCheck-fM0600Tt.js";import{C as n}from"./ComposedChart-OPX83XMh.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DrCzNtMt.js";import{X as h}from"./XAxis-ByPIKQU1.js";import{Y as c}from"./YAxis-Bv8R6otu.js";import{L as g}from"./Legend-BkA5LrBA.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./immer-BjHWRAG8.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./Layer-BQ7ZElOW.js";import"./ReactUtils-C_GhcNSF.js";import"./Label-CxCh3fMv.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./ZIndexLayer-DhZlyZCE.js";import"./ActivePoints-DwJBd7DK.js";import"./Dot-DaM5pVyw.js";import"./types-CjQ8Fnwy.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./ErrorBarContext-Cu_fSz69.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./useAnimationId-Ivno0Gk6.js";import"./getRadiusAndStrokeWidthFromDot-Cq3JaBlL.js";import"./ActiveShapeUtils-BesHP-Xv.js";import"./isPlainObject-Bb91VWq3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BvzLcgoo.js";import"./Trapezoid-Mm7QWflE.js";import"./Sector-BXKHAeCR.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";import"./step-5ABOenpE.js";import"./Curve-C8kgiu5F.js";import"./CartesianAxis-DstjLvt8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CyBq5cT_.js";import"./uniqBy-BufKpw2a.js";import"./iteratee-CTT2mLKG.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
