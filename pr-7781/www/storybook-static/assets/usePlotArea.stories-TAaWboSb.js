import{R as t}from"./iframe-CS_l3HPs.js";import{j as a}from"./RechartsWrapper-CLBKD2Mb.js";import{R as p}from"./zIndexSlice-DOZPSD3i.js";import{C as n}from"./ComposedChart-DD8VJnt8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BrnJb__0.js";import{X as l}from"./XAxis-VVNKgX_Z.js";import{Y as h}from"./YAxis-CfLQ1gwS.js";import{L as c}from"./Legend-qyYT98W7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CgtyltQG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-wY7xrwqz.js";import"./throttle-BXJlRBBH.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./index-7kMAhgqw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./Layer-ClmpeZAQ.js";import"./Curve-Bkeet_Vy.js";import"./types-Bij1NlAO.js";import"./step-D4hiIBbL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CucVzI_L.js";import"./Label-CLB3gtSD.js";import"./Text-Cft38Vb6.js";import"./DOMUtils-Ufje3btQ.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./ZIndexLayer-DIN_R5pI.js";import"./useAnimationId-BcraNq1p.js";import"./ActivePoints-BQR6yZd5.js";import"./Dot-uq10K0-V.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./ErrorBarContext-CU42u084.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./getRadiusAndStrokeWidthFromDot-CGFjgpgY.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";import"./CartesianAxis-DcHbl7Yp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BmB__XbX.js";import"./symbol-K873wObj.js";import"./useElementOffset-DFm-Hwrm.js";import"./uniqBy-DAztU44K.js";import"./iteratee-CgfSsQVK.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
