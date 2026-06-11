import{R as r}from"./iframe-seguPege.js";import{C as a,R as p}from"./zIndexSlice-Cb-1bZoU.js";import{C as s}from"./ComposedChart-DVVsB1I4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-B5wrNkVZ.js";import{X as d}from"./XAxis-DUluPi7y.js";import{Y as h}from"./YAxis-DMmP-D66.js";import{L as c}from"./Legend-BHk_R86n.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Ae2GGYT-.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./get-BPoksESJ.js";import"./resolveDefaultProps-BPZN0bld.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./Layer-D0gi-KwG.js";import"./Curve-Dy50jrXo.js";import"./types-Dh_7L2tU.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjEmPeVW.js";import"./Label-Bj9fNTdt.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./ZIndexLayer-E8T2jKop.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./CartesianAxis-CKcebKQz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-O3P2Efnq.js";import"./symbol-CTLlWJ_7.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";const hr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:o=>r.createElement(p,{width:o.width,height:o.height},r.createElement(s,{data:n,margin:o.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const cr=["UseMargin"];export{t as UseMargin,cr as __namedExportsOrder,hr as default};
