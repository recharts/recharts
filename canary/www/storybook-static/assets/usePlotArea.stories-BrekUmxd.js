import{R as t}from"./iframe-HFtXtWDU.js";import{u as a}from"./CategoricalChart-wF3j6ivZ.js";import{R as p}from"./zIndexSlice-Cqq8ngM8.js";import{C as s}from"./ComposedChart-CDdAMZJx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZMze_xC.js";import{X as l}from"./XAxis-BpsaCJf7.js";import{Y as h}from"./YAxis-DsjAAI5S.js";import{L as c}from"./Legend-Da62BJrp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./throttle-BOHTa9OG.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./axisSelectors-DgDHkI2g.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./isWellBehavedNumber-DknTQDme.js";import"./d3-scale-BFpMyz7A.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./Layer-DWG7b0hl.js";import"./Curve-BR3zS18n.js";import"./types-CqGtNHfB.js";import"./step-CxNVACTf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-uy3iUhMQ.js";import"./Label-BrbXEreR.js";import"./Text-CDRZZb9B.js";import"./DOMUtils-Cr-MkK7_.js";import"./ZIndexLayer-0igMx-O2.js";import"./useAnimationId-CzZVkbxz.js";import"./ActivePoints-Cr6rlWwV.js";import"./Dot-bRuvlybH.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getRadiusAndStrokeWidthFromDot-Cm-vUEgX.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./CartesianAxis-BnlRkakD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-TDHQ499_.js";import"./symbol-BjgqCFXe.js";import"./useElementOffset-DddFNO6b.js";import"./uniqBy-DB3_HqTc.js";import"./iteratee-D-KV-lOb.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
