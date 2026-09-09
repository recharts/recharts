import{R as t}from"./iframe-CEaKFLOD.js";import{j as a}from"./RechartsWrapper-CWplp24t.js";import{R as p}from"./zIndexSlice-BW_-kNl2.js";import{C as n}from"./ComposedChart-BWdu-w5M.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DgOIP6oP.js";import{X as l}from"./XAxis-xN7pSHzN.js";import{Y as h}from"./YAxis-Cm2tjuJm.js";import{L as c}from"./Legend-DnP4zCwl.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-y1moel4K.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCBeMCMj.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./Layer-CAr7LORZ.js";import"./Curve-DFnxsFyy.js";import"./types-Da2TODPT.js";import"./step-SqhK0zoK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BousSNqt.js";import"./Label-BzoSUysL.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./ZIndexLayer--MuvhbKE.js";import"./useAnimationId-D_rlhFDI.js";import"./ActivePoints-DL0uaK1o.js";import"./Dot-RK_ht-a6.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./ErrorBarContext-CtrcR3pN.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./getRadiusAndStrokeWidthFromDot-rCzGUsqU.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./useGraphicalItemIdentity-BnhZXg65.js";import"./CartesianAxis-DZYvFW8B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-5r6rCeAJ.js";import"./symbol-6uRkNH0Z.js";import"./useElementOffset-c3kW9Mat.js";import"./uniqBy-hLK4QAWK.js";import"./iteratee-COhtBRtJ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
