import{e as t}from"./iframe-CW44RDCc.js";import{P as a}from"./PlotAreaShower-9R2kP3z1.js";import{Y as p}from"./hooks-PNvgBz41.js";import{g as s}from"./arrayEqualityCheck-Ua4xjAL-.js";import{C as n}from"./ComposedChart-Cf6loWdm.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-Cq678OID.js";import{X as h}from"./XAxis-BtxpyVu0.js";import{Y as c}from"./YAxis-DkqaPkGp.js";import{L as g}from"./Legend-e-pfRx1K.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-O4pbDmZW.js";import"./immer-XdRVX9he.js";import"./axisSelectors-CKeyOf07.js";import"./d3-scale-BVNpQg4a.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCGYFD7i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3a2SuVp.js";import"./index-q0MlqJm9.js";import"./zIndexSlice-B0Fs0Bds.js";import"./renderedTicksSlice-m2ISnyyr.js";import"./CartesianChart-CTskZI97.js";import"./chartDataContext-BIpjCG9Z.js";import"./CategoricalChart-BSsRNKhV.js";import"./Layer-8Qf7pjam.js";import"./ReactUtils-D_YL06Q3.js";import"./Label-CB32eiK0.js";import"./Text-B0bhoYGy.js";import"./DOMUtils-DcGI1ooU.js";import"./ZIndexLayer-DOf301bL.js";import"./ActivePoints-CzNqaTiV.js";import"./Dot-CJ1Gpj_u.js";import"./types-B4uBrmm7.js";import"./RegisterGraphicalItemId-C2nT64rB.js";import"./ErrorBarContext-CTE9_ggH.js";import"./GraphicalItemClipPath-2q24bU0-.js";import"./SetGraphicalItem--ChXDLvH.js";import"./useAnimationId-DAlITmll.js";import"./getRadiusAndStrokeWidthFromDot-BIUpFF8r.js";import"./ActiveShapeUtils-Sw9eCZBU.js";import"./isPlainObject-B7SWhIBJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Chq6EJDX.js";import"./Trapezoid-CMZodTaL.js";import"./Sector-CwAajl9S.js";import"./Symbols-DPIxRI8N.js";import"./symbol-DbqMCeb2.js";import"./step-_iQ5Op8T.js";import"./Curve-OVW22O2P.js";import"./CartesianAxis-BktLkXzl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-o3Roob9z.js";import"./uniqBy-p3yfjzxe.js";import"./iteratee-C366JI6E.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
