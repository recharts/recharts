import{R as t}from"./iframe--2AVw2Ig.js";import{e as a}from"./RechartsWrapper-EJRMqcbQ.js";import{R as p}from"./zIndexSlice-DY-KmnMj.js";import{C as n}from"./ComposedChart-DU0EoCKc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-_Cuhdt7D.js";import{X as l}from"./XAxis-DR36Dp_O.js";import{Y as h}from"./YAxis-B_xGwaHy.js";import{L as c}from"./Legend-DYM93m9A.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B29QL1c4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDUrw1Me.js";import"./throttle-BaGyyE0T.js";import"./index-rGVVlfKz.js";import"./index-CbZkT_u5.js";import"./isWellBehavedNumber-BCwXwBOh.js";import"./d3-scale-CuVmq_8Z.js";import"./index-BTmio8NJ.js";import"./index-_nleLnFM.js";import"./renderedTicksSlice-ViCmPO8v.js";import"./index-DVblcXeN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwfabjuB.js";import"./chartDataContext-BsjWdA7j.js";import"./CategoricalChart-D1mzQ8Dl.js";import"./Layer-eIGZDbY8.js";import"./Curve-DnLexwZ8.js";import"./types-DZjr1JEr.js";import"./step-CCcO8MdV.js";import"./path-DyVhHtw_.js";import"./activeStyles-CzHB9dwV.js";import"./Label-DUHcPYlD.js";import"./Text-Hvkjn3b4.js";import"./pageBackground-DkdcD7r5.js";import"./useId-CUoDw_aI.js";import"./useBackwardsCompatibleTheme-CKvuuYac.js";import"./ZIndexLayer-KCSLP8mG.js";import"./useAnimationId-CHJ3Zhtv.js";import"./dataEntryStyles-DeEjeZX4.js";import"./ActivePoints-BD1pKs86.js";import"./Dot-D-Ut_Ero.js";import"./ErrorBarContext-CPUPPNIF.js";import"./GraphicalItemClipPath-DBN3vY8J.js";import"./SetGraphicalItem-CFoIf7JL.js";import"./getRadiusAndStrokeWidthFromDot-D3N_jfqh.js";import"./ActiveShapeUtils-Cos36bQq.js";import"./useEffectiveDataKey-mwtlbWZk.js";import"./CartesianAxis-khS1fmQe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZkC9C8i.js";import"./symbol-4r17nwA_.js";import"./useElementOffset-C3tMcbQq.js";import"./uniqBy-BT1kOl9J.js";import"./iteratee-BUnf2Li6.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
