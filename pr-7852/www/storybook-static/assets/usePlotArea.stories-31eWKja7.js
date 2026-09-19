import{R as t}from"./iframe-Bh4IukvS.js";import{j as a}from"./RechartsWrapper-CloVGpsi.js";import{R as p}from"./zIndexSlice-BnhPp-nh.js";import{C as n}from"./ComposedChart-qa2sMwNO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-f5GS_QI0.js";import{X as l}from"./XAxis-DTE5zt6_.js";import{Y as h}from"./YAxis-CydhA_LO.js";import{L as c}from"./Legend-HubBARXn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CS55fj5A.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C8F9z3Z9.js";import"./throttle-CXYaw1-J.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./isWellBehavedNumber-COGARIBs.js";import"./d3-scale-BYEA786G.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./renderedTicksSlice-DKLC06E4.js";import"./index-BoLfeuKb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./Layer-O2qI8LTc.js";import"./Curve-CAOammAF.js";import"./types-kFpO5oed.js";import"./step-Dbp5foHF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-YvBlp4.js";import"./Label-B71mUMe3.js";import"./Text-ByHw94zt.js";import"./DOMUtils-jG16kJ-0.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";import"./ZIndexLayer-HUNPQO7Y.js";import"./useAnimationId-DwO0dP0K.js";import"./ActivePoints-DirNCRmn.js";import"./Dot-C6mQoDM6.js";import"./RegisterGraphicalItemId-_cXLNg8O.js";import"./ErrorBarContext-CofrBm2P.js";import"./GraphicalItemClipPath-B9NNnVgG.js";import"./SetGraphicalItem-DSGRIbG0.js";import"./getRadiusAndStrokeWidthFromDot-B2N3Oqao.js";import"./ActiveShapeUtils-DP7EI6-I.js";import"./useGraphicalItemIdentity-Dsj7jE7N.js";import"./CartesianAxis-Ds6tzB92.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-OFrl58Ub.js";import"./symbol-B4pZHCqS.js";import"./useElementOffset-DldO0h5h.js";import"./uniqBy-DsAZzQBt.js";import"./iteratee-DfIYWyJS.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
