import{R as t}from"./iframe-BN7wAejV.js";import{z as a}from"./RechartsWrapper-BzFY2Xxa.js";import{R as p}from"./zIndexSlice-BlaP7sYq.js";import{C as n}from"./ComposedChart-CDS5E2ok.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BQoSY4oZ.js";import{X as l}from"./XAxis-VA1Akzpv.js";import{Y as h}from"./YAxis-LOiiKFb4.js";import{L as c}from"./Legend-BtD9EuDm.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./axisSelectors-D4jZOjlQ.js";import"./throttle-OOfctLZP.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./polarAxisSelectors-CchWb7G-.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BuYLSsjs.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./getRadiusAndStrokeWidthFromDot-5PNvN8b1.js";import"./Layer-gDVCcB56.js";import"./Curve-BFV098yv.js";import"./types-B8ZxybVf.js";import"./step-Bv7Zqu-1.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CrycyMb5.js";import"./Label-Bpsa1uOU.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./ActivePoints-EAvCRna9.js";import"./Dot-BsX3Z5g1.js";import"./activeStyles-CXY1xJkQ.js";import"./useAnimationId-ClFn0gGk.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./ErrorBarContext-eg_EChks.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./CartesianAxis-DWm3W2j1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
