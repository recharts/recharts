import{R as t}from"./iframe-DDEEclxH.js";import{j as a}from"./RechartsWrapper-B3G4Mqkl.js";import{R as p}from"./zIndexSlice-CummiUIE.js";import{C as n}from"./ComposedChart-DyJQFPgX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CgJTWLaM.js";import{X as l}from"./XAxis-OiAt4OfM.js";import{Y as h}from"./YAxis-x9xRaP5Q.js";import{L as c}from"./Legend-L_Y73pQX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BzDlbQMA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DiahpmD-.js";import"./throttle-OMOVa0qg.js";import"./index-BXn3iYjY.js";import"./index-DUYM5IBE.js";import"./isWellBehavedNumber-D3AVRour.js";import"./d3-scale-U2rNi4eb.js";import"./index-DuT7Rit8.js";import"./index-CkiAY9bZ.js";import"./renderedTicksSlice-BdHhja-C.js";import"./index-BjbpJMdG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBOTH61V.js";import"./chartDataContext-XrvVwuj4.js";import"./CategoricalChart-msaFLCNM.js";import"./Layer-DiIYn3al.js";import"./Curve-DmyaY7N7.js";import"./types-CMxl_r2z.js";import"./step-C_2d7_Dh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-AtWd5M7o.js";import"./Label-BfUQEb6D.js";import"./Text-CkcSa5pV.js";import"./DOMUtils-3FjGni4U.js";import"./useId-C6c_N3kr.js";import"./useBackwardsCompatibleTheme-CoJLQA5O.js";import"./ZIndexLayer-BUGWfp6H.js";import"./useAnimationId-qBVm6Gg1.js";import"./ActivePoints-CkbG5RIV.js";import"./Dot-DxUofVpC.js";import"./RegisterGraphicalItemId-nSLabm2D.js";import"./ErrorBarContext-DNzyQz3v.js";import"./GraphicalItemClipPath-CmGXOSE1.js";import"./SetGraphicalItem-gofxKkAQ.js";import"./getRadiusAndStrokeWidthFromDot-B-fypNZ4.js";import"./ActiveShapeUtils-CjAGkH2d.js";import"./useGraphicalItemIdentity-Dou3-X4Z.js";import"./CartesianAxis-CdQspuXD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-tQ0oerhS.js";import"./symbol-BAK-TpWQ.js";import"./useElementOffset-CxBvXcML.js";import"./uniqBy-BK8FWQ7h.js";import"./iteratee-B5AA-IZ8.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
