import{R as t}from"./iframe-CRyknHcV.js";import{u as a}from"./CategoricalChart-C5pYrdFP.js";import{R as p}from"./zIndexSlice-D94J06pN.js";import{C as s}from"./ComposedChart-DHhrqJQt.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BKwpqhNN.js";import{X as l}from"./XAxis-CQvMjduc.js";import{Y as h}from"./YAxis-DKnjJQyk.js";import{L as c}from"./Legend-C3KuxZ0g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./throttle-CdnYcrez.js";import"./get-C2VjdU0L.js";import"./axisSelectors-HI2cMDW5.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./Layer-tFywX8jB.js";import"./Curve-Cx7OO1Tc.js";import"./types-CgTXGcnU.js";import"./step-CoZJp4zn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuJcIC8o.js";import"./Label-Bb81vEf3.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./ZIndexLayer-CO71XxiU.js";import"./useAnimationId-B3genVAW.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Czm-DLiC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
