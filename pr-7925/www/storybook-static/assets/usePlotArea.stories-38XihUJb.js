import{R as t}from"./iframe-B-iIRDdh.js";import{j as a}from"./RechartsWrapper-3KdvU5vS.js";import{R as p}from"./zIndexSlice-xTQiy-H7.js";import{C as n}from"./ComposedChart-aKLJJf8H.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cbj4CeQN.js";import{X as l}from"./XAxis-CndG3lfF.js";import{Y as h}from"./YAxis-D6Burg2S.js";import{L as c}from"./Legend-D3wpZrCV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C60OKlJ4.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./Layer-Dt4jm0MX.js";import"./Curve-CjV9ratN.js";import"./types-zJ8KfHt8.js";import"./step-CLlPrIoa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-WEAzzrlF.js";import"./Label-CwIrwy70.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./ZIndexLayer-CbH1OgN0.js";import"./useAnimationId-CcMpnWIs.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./CartesianAxis-D-jVFU-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-58jLlpI6.js";import"./symbol-BupXd47Z.js";import"./useElementOffset-HOhbNBcL.js";import"./uniqBy-BjVxXwWp.js";import"./iteratee-Dwz90aEP.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
