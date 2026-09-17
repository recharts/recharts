import{R as t}from"./iframe-BWgNvoHd.js";import{j as a}from"./RechartsWrapper-CqggqYnG.js";import{R as p}from"./zIndexSlice-C7P0LeTp.js";import{C as n}from"./ComposedChart-CDicU1zI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C5JxjXkq.js";import{X as l}from"./XAxis-NaVI4shj.js";import{Y as h}from"./YAxis-Cw1g73tC.js";import{L as c}from"./Legend-CrwpKrLS.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dam-iDrH.js";import"./throttle-Bg-BpQUC.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./index-FyKmNOxh.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./Layer-C3eYLIIL.js";import"./Curve-3XxISmtt.js";import"./types-CrSccog6.js";import"./step-ChFfihmJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hZV-WKF8.js";import"./Label-B5Qmh4rZ.js";import"./Text-CY7tJJcL.js";import"./DOMUtils-Dr6Nulpk.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./useAnimationId-Bc7y922J.js";import"./ActivePoints-Cc4fx1EW.js";import"./Dot-B7IGFvAw.js";import"./RegisterGraphicalItemId-DD6KbxKE.js";import"./ErrorBarContext-CCrZclZc.js";import"./GraphicalItemClipPath-MkJi9iI4.js";import"./SetGraphicalItem-BxHdn_2c.js";import"./getRadiusAndStrokeWidthFromDot-D_8ZDval.js";import"./ActiveShapeUtils-BslnG83G.js";import"./useGraphicalItemIdentity-BBFCWIMQ.js";import"./CartesianAxis-ChN3yMr6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DXOe_3B0.js";import"./symbol-BSkZIEXR.js";import"./useElementOffset-DTfG1d0_.js";import"./uniqBy-b4mUNSGI.js";import"./iteratee-BEUkWsOH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
