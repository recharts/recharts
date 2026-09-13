import{R as t}from"./iframe-B8ANsApq.js";import{j as a}from"./RechartsWrapper-soNVocgi.js";import{R as p}from"./zIndexSlice-Ce8NeCcb.js";import{C as n}from"./ComposedChart-DPkaGwQ5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Be9ktEtH.js";import{X as l}from"./XAxis-DCQ61JnD.js";import{Y as h}from"./YAxis-DqEKkvv0.js";import{L as c}from"./Legend-DtF7MnQv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEZBLQnS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cko3d0ja.js";import"./throttle-CG-pSLVK.js";import"./index-D6PdJg6F.js";import"./index-DeFSUeff.js";import"./isWellBehavedNumber-C7ukF8ee.js";import"./d3-scale-CsEPL9IW.js";import"./index-CLpz5dh6.js";import"./index-MxXQFx09.js";import"./renderedTicksSlice-DCIeAqty.js";import"./index-DgU7AYrg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dm1UL_JN.js";import"./chartDataContext-SNmeHJ5h.js";import"./CategoricalChart-ZRjbnEpi.js";import"./Layer-DqVYjNpd.js";import"./Curve-CICfeEYZ.js";import"./types-D5aIHjTg.js";import"./step-BOqwoOFd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DxAfvNI2.js";import"./Label-CKPEh0-k.js";import"./Text-BYXQaTCF.js";import"./DOMUtils-BNNcxOqL.js";import"./useId-DgqgElmx.js";import"./useBackwardsCompatibleTheme-DqouWSCS.js";import"./ZIndexLayer-B21fZXtG.js";import"./useAnimationId-DSZzieLY.js";import"./ActivePoints-BPsazN1k.js";import"./Dot-CY3bTNqg.js";import"./RegisterGraphicalItemId-BQAgbos5.js";import"./ErrorBarContext-mcf9_11T.js";import"./GraphicalItemClipPath-DhvNwCK-.js";import"./SetGraphicalItem-Dza8giNo.js";import"./getRadiusAndStrokeWidthFromDot-DANmnsHn.js";import"./ActiveShapeUtils-rZqGB1Eg.js";import"./useGraphicalItemIdentity-D-1HP-Kp.js";import"./CartesianAxis-DOZB_H9C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQc9OnIm.js";import"./symbol-BpL1ixY4.js";import"./useElementOffset-DXmsQk-F.js";import"./uniqBy-BCJz43Xm.js";import"./iteratee-8dn2mDC1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
