import{R as t}from"./iframe-WV_asirj.js";import{j as a}from"./RechartsWrapper-CsCMkadb.js";import{R as p}from"./zIndexSlice-GixElPZ_.js";import{C as n}from"./ComposedChart-BvVU85k-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CkMWcGog.js";import{X as l}from"./XAxis-DD-Khhe3.js";import{Y as h}from"./YAxis-DRMYGn-2.js";import{L as c}from"./Legend-DN4E-1_a.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-8uL09VjP.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./Layer-D1F1s_Cb.js";import"./Curve-CiYmGtZr.js";import"./types-Cgo928Y8.js";import"./step-F8CMqi4G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xMF2BQb6.js";import"./Label-Q870r3oo.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./ZIndexLayer-rRlGaKvU.js";import"./useAnimationId-DlwLI8cF.js";import"./ActivePoints-BR8sRvdX.js";import"./Dot-CTbzWonC.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./ErrorBarContext-CGrnfAaP.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getRadiusAndStrokeWidthFromDot-DQScL_OV.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./useGraphicalItemIdentity-DUG11jyw.js";import"./CartesianAxis-BGGDzNNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CN1XSzSD.js";import"./symbol-DGI5pP0R.js";import"./useElementOffset-CbQZLq3o.js";import"./uniqBy-CxPRbKAp.js";import"./iteratee-Bft3m4as.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
