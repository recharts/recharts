import{R as t}from"./iframe-Bk-N4eh5.js";import{j as a}from"./RechartsWrapper-CRZxnEvO.js";import{R as p}from"./zIndexSlice-Cks1L1uQ.js";import{C as n}from"./ComposedChart-DlCpTDyp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C4E-S0qs.js";import{X as l}from"./XAxis-cKkeo31Z.js";import{Y as h}from"./YAxis-DOohWhTk.js";import{L as c}from"./Legend-Cet4u6xo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jzV4S5LU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-gsi5pnh3.js";import"./throttle-DGspa7An.js";import"./index-BJIQUKOl.js";import"./index-B9y8Kqsp.js";import"./isWellBehavedNumber-Du6Kj5-5.js";import"./d3-scale-CUR5a_d2.js";import"./index-B3QvH7n1.js";import"./index-CeTsENmr.js";import"./renderedTicksSlice-aqmhLMa0.js";import"./index-B5-JQ7_N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKZN7ovI.js";import"./chartDataContext-ypeuzWgT.js";import"./CategoricalChart-CfQ-7jwV.js";import"./Layer-DmcaQ_dN.js";import"./Curve-DMEOHSug.js";import"./types-j43mBGpT.js";import"./step-DpQO_Upn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-4I_eYob_.js";import"./Label-QAvV2VO9.js";import"./Text-DZhX5I78.js";import"./DOMUtils-CUQy7sD1.js";import"./useId-DXE2NHZ6.js";import"./useBackwardsCompatibleTheme-D_Q-cp9k.js";import"./ZIndexLayer-CDXbUJjY.js";import"./useAnimationId-CXJms9_M.js";import"./ActivePoints-C-zYvbZ2.js";import"./Dot-DLh3Hb31.js";import"./RegisterGraphicalItemId-Cdmmbnos.js";import"./ErrorBarContext-Cph_wYMA.js";import"./GraphicalItemClipPath-CAT_76cH.js";import"./SetGraphicalItem-BzXi6hBa.js";import"./getRadiusAndStrokeWidthFromDot-DmXYl-lA.js";import"./ActiveShapeUtils-Bhki9N6s.js";import"./useGraphicalItemIdentity-BC_MJ-E6.js";import"./CartesianAxis-CxuhGA1B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BG7PWY-3.js";import"./symbol-Dn2jucdW.js";import"./useElementOffset-g5hoKJqf.js";import"./uniqBy-jCy-kd0v.js";import"./iteratee-CoUURpSM.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
