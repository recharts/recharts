import{R as t}from"./iframe-C2DTpPl5.js";import{u as a}from"./CategoricalChart-9si9MCW4.js";import{R as p}from"./zIndexSlice-BA0v7Oer.js";import{C as s}from"./ComposedChart-DhPH0eg5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ByVEcfKk.js";import{X as l}from"./XAxis-BQlNmsKr.js";import{Y as h}from"./YAxis-Dd6HyrUG.js";import{L as c}from"./Legend-BlTlewHz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./throttle-DTXNpE5t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DI7xvKPh.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./Layer-C1G5_il7.js";import"./Curve-BQfn95_j.js";import"./types-C_I2Qi1-.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-3hjUFG-5.js";import"./Label-CwiguCux.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./ZIndexLayer-BzV-OpAF.js";import"./useAnimationId-en1pQLdR.js";import"./ActivePoints-JZ0NgfaJ.js";import"./Dot-0HxiRhRw.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getRadiusAndStrokeWidthFromDot-D3vyunVf.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vCI6MyTM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BExf6FqW.js";import"./symbol-B2TgJ7r1.js";import"./useElementOffset-zoX8Bj2Z.js";import"./uniqBy-DPi6r0Q4.js";import"./iteratee-Qg6w15Mi.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
