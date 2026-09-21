import{R as t}from"./iframe-B8S5mZni.js";import{j as a}from"./RechartsWrapper-DNwO_82A.js";import{R as p}from"./zIndexSlice-C7WPWBHj.js";import{C as n}from"./ComposedChart-BFmInjuY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BI9PEbOh.js";import{X as l}from"./XAxis-Del5mp5I.js";import{Y as h}from"./YAxis-CXfsjvSU.js";import{L as c}from"./Legend-B9J4DJFB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Im4hMjdM.js";import"./throttle-DJQOHpml.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./isWellBehavedNumber-TBIenFex.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./Layer-DKzqyPeV.js";import"./Curve-Ba1VZ5w3.js";import"./types-BZDZh7Dp.js";import"./step-D9jBRyHm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPa7Tabb.js";import"./Label-DZ6C1Cc6.js";import"./Text-DDGxlEP5.js";import"./DOMUtils-DwuCUUr8.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./ZIndexLayer-OLi9LTWb.js";import"./useAnimationId-DSiNOIGc.js";import"./ActivePoints-0LdIyAY7.js";import"./Dot-Dq-zru-b.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./ErrorBarContext-XJ_0JE40.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getRadiusAndStrokeWidthFromDot-BV5HZWc_.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";import"./CartesianAxis-D2B7a931.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-AsGz6W8M.js";import"./symbol-dRXx8TTn.js";import"./useElementOffset-DPucxQk4.js";import"./uniqBy-RBk98CTS.js";import"./iteratee-w700QPS8.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
