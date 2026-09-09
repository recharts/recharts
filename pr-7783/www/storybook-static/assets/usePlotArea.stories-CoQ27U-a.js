import{R as t}from"./iframe-DFG5UB_B.js";import{j as a}from"./RechartsWrapper-B6oLib6N.js";import{R as p}from"./zIndexSlice-BfnucyES.js";import{C as n}from"./ComposedChart-DvBb4g9X.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DbNr04kS.js";import{X as l}from"./XAxis-BGV0t6fj.js";import{Y as h}from"./YAxis-C9ahxlQr.js";import{L as c}from"./Legend-D9pzZTHI.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BatIk00Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-THUDlcaK.js";import"./throttle-8CKkbV4u.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./Layer-CTQ0XvXO.js";import"./Curve-D7P2ouTL.js";import"./types-DcAH2tiO.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaUsoCvA.js";import"./Label-BlYeas0v.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./ErrorBarContext-SVRkM6ha.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./CartesianAxis-BNuKFBQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B-DKfZZn.js";import"./symbol-D4kPCsbv.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
