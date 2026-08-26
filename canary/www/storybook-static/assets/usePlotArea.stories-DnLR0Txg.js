import{R as t}from"./iframe-Bzmu5HIk.js";import{u as a}from"./CategoricalChart-CH9SVF8Q.js";import{R as p}from"./zIndexSlice-DOqwIOxM.js";import{C as s}from"./ComposedChart-CmElcfxT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dy4VpV_O.js";import{X as l}from"./XAxis-jQ_CxXuQ.js";import{Y as h}from"./YAxis-CurDeKAa.js";import{L as c}from"./Legend-iurh3wzp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCfV64tZ.js";import"./index-Bs5Y62tp.js";import"./index-DuAK0LiD.js";import"./index-CS9ypgyw.js";import"./index-BU2ca08W.js";import"./throttle-By1_Q0f1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CQE5C8Tc.js";import"./resolveDefaultProps-CRF5GxOI.js";import"./isWellBehavedNumber-DCtTU4mD.js";import"./d3-scale-mcjvwMyE.js";import"./renderedTicksSlice-aIMhvrWq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D9cj75Uw.js";import"./chartDataContext-6ylcQe-7.js";import"./Layer-BIAwX0Ug.js";import"./Curve-CKwGe3YB.js";import"./types-CP805D0F.js";import"./step-BOb3jDRZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8pcPfP0.js";import"./Label-BnPFFEHB.js";import"./Text-DqoobI6S.js";import"./DOMUtils-dt_U2Js1.js";import"./useId-CJJMgP-t.js";import"./useBackwardsCompatibleTheme-CmmFKQCY.js";import"./ZIndexLayer-CHgZKeoE.js";import"./useAnimationId-pFMJHbYK.js";import"./ActivePoints-Bg1bvRXN.js";import"./Dot-B390M5o3.js";import"./RegisterGraphicalItemId-9b4sSDvA.js";import"./ErrorBarContext-BwVhmXYH.js";import"./GraphicalItemClipPath-DpslvBV-.js";import"./SetGraphicalItem-Xipmdhp5.js";import"./getRadiusAndStrokeWidthFromDot-C9axG9oY.js";import"./ActiveShapeUtils-ByjLSOPq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ByUKa2Ph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BcIxh9hT.js";import"./symbol-D4r8CWDQ.js";import"./useElementOffset-DUKr_KA9.js";import"./uniqBy-Bi1p8Whm.js";import"./iteratee-B9tCTKER.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
