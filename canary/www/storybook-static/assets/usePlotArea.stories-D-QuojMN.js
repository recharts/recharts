import{R as t}from"./iframe-seguPege.js";import{u as a}from"./CategoricalChart-DsfEFljg.js";import{R as p}from"./zIndexSlice-Cb-1bZoU.js";import{C as s}from"./ComposedChart-DVVsB1I4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B5wrNkVZ.js";import{X as l}from"./XAxis-DUluPi7y.js";import{Y as h}from"./YAxis-DMmP-D66.js";import{L as c}from"./Legend-BHk_R86n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./immer-Ae2GGYT-.js";import"./get-BPoksESJ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BPZN0bld.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./Layer-D0gi-KwG.js";import"./Curve-Dy50jrXo.js";import"./types-Dh_7L2tU.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjEmPeVW.js";import"./Label-Bj9fNTdt.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./ZIndexLayer-E8T2jKop.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./CartesianAxis-CKcebKQz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-O3P2Efnq.js";import"./symbol-CTLlWJ_7.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
