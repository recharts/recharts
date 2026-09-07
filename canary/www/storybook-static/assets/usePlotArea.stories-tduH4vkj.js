import{R as t}from"./iframe-ZwmkHOWK.js";import{j as a}from"./RechartsWrapper-CLkBAicL.js";import{R as p}from"./zIndexSlice-B8sjij8M.js";import{C as n}from"./ComposedChart-CFgERvuY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-yCuGdR2u.js";import{X as l}from"./XAxis-C1z9LD8A.js";import{Y as h}from"./YAxis-PaDHJ4i8.js";import{L as c}from"./Legend-BzmhKkB_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DaNNrydT.js";import"./throttle-C39dOrQS.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./Layer-i_0u2Crx.js";import"./Curve-BC_5nDae.js";import"./types-v1ATzDHk.js";import"./step-DANxpaDn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFufr1UH.js";import"./Label-BVR5F0n2.js";import"./Text-BI3-3dXY.js";import"./DOMUtils-CP0ZeXZR.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./useAnimationId-BCL-lQv_.js";import"./ActivePoints-CJLUsm-B.js";import"./Dot-DBtVqS4S.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./ErrorBarContext-ik09lEWu.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getRadiusAndStrokeWidthFromDot-ScUuE-rr.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Djmj8VDf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CZXHE-Sd.js";import"./symbol-BcLPDN7C.js";import"./useElementOffset-CEleLGXj.js";import"./uniqBy-O2aI4kAk.js";import"./iteratee-AI8PmdR5.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
