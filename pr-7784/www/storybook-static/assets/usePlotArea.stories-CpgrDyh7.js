import{R as t}from"./iframe-CUWBn4q2.js";import{j as a}from"./RechartsWrapper-D0kr3yQ2.js";import{R as p}from"./zIndexSlice-CXDrS8ji.js";import{C as n}from"./ComposedChart-CsAUZMi5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-QQwDXclT.js";import{X as l}from"./XAxis-BLeODyW3.js";import{Y as h}from"./YAxis-DznKUGT9.js";import{L as c}from"./Legend-D0pQu-Vm.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0umfLoR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BtjPkbxT.js";import"./throttle-D674SENT.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./Layer-B2jZ5e2I.js";import"./Curve-C937f4F6.js";import"./types-Cm8He0RL.js";import"./step-DEVBfr_J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFCeZ6-M.js";import"./Label-kwBf54iY.js";import"./Text-DyTjweFw.js";import"./DOMUtils-DIgt7RHT.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./useAnimationId-75oMmLO2.js";import"./ActivePoints-BpXzUdPZ.js";import"./Dot-BGhESmiF.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getRadiusAndStrokeWidthFromDot-18D5zGZY.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";import"./CartesianAxis-B28nXVtL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BphLgeeK.js";import"./symbol-B9Ox7FN7.js";import"./useElementOffset-ChKOjUVs.js";import"./uniqBy-BV5A9cpt.js";import"./iteratee-CH0i-qx9.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
