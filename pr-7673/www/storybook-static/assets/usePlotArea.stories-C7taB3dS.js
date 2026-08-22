import{R as t}from"./iframe-C93Nv-sG.js";import{u as a}from"./CategoricalChart-Ckb0xTkj.js";import{R as p}from"./zIndexSlice-ByU1_vW7.js";import{C as s}from"./ComposedChart-CbNoaIAl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CcowXM7j.js";import{X as l}from"./XAxis-B8fGRCoq.js";import{Y as h}from"./YAxis-jlrI5912.js";import{L as c}from"./Legend-CVAGn_Wv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./throttle-DKDTz13_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B_nw5bC_.js";import"./resolveDefaultProps-C5w327Ax.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./Layer-C-yThQSL.js";import"./Curve-C4EKfZxi.js";import"./types-DSu39Mtk.js";import"./step-DUN67lSa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9gSLTjZ.js";import"./Label-C3kKco4I.js";import"./Text-BwKXAAQh.js";import"./DOMUtils-BXMnIR4n.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./ZIndexLayer-txp7Phg0.js";import"./useAnimationId-ChO4WR-0.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./ErrorBarContext-Bdw1FAXk.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BKA7b1EI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfpK6qZN.js";import"./symbol-DmXohmX3.js";import"./useElementOffset-BajoHWy5.js";import"./uniqBy-CgKYnAzP.js";import"./iteratee-DE2e34V0.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
