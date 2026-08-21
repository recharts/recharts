import{R as t}from"./iframe-CH2RirRG.js";import{u as a}from"./CategoricalChart-DISzDu-A.js";import{R as p}from"./zIndexSlice-EPNgUqra.js";import{C as s}from"./ComposedChart-B-gNv-fY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C8M3PSSl.js";import{X as l}from"./XAxis-CqEbzlS_.js";import{Y as h}from"./YAxis-8oK4TXT2.js";import{L as c}from"./Legend-cl2YUlXM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./throttle-wiaHzbqm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CkKizBw1.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./Layer-DUd8J6bA.js";import"./Curve-BsDu1IjD.js";import"./types-BWjPFUtA.js";import"./step-C8By5YWW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsoBD4nr.js";import"./Label-JTJpVxOG.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./ZIndexLayer-DaLmvsT2.js";import"./useAnimationId-vcXUsSrn.js";import"./ActivePoints-Dg4SvqYZ.js";import"./Dot-DUdZMRdV.js";import"./RegisterGraphicalItemId-CdD2mOwf.js";import"./ErrorBarContext-CEgFqn-G.js";import"./GraphicalItemClipPath-D4fexUqU.js";import"./SetGraphicalItem-CVh4pOat.js";import"./getRadiusAndStrokeWidthFromDot-BtjAJPPD.js";import"./ActiveShapeUtils-CWoQL3Mu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Bp_3tslY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DxsO4tVc.js";import"./symbol-9_1mDMDc.js";import"./useElementOffset-BZbIepG_.js";import"./uniqBy-B9R5xbVR.js";import"./iteratee-DTZfeRvH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
