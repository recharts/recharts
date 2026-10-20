import{R as t}from"./iframe-CugsIFqT.js";import{e as p}from"./RechartsWrapper-B8Omcwd_.js";import{R as a}from"./zIndexSlice-DhzbqJ4_.js";import{C as n}from"./ComposedChart-B19W0OVJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CaiOsEW_.js";import{X as l}from"./XAxis-6HDBvGN1.js";import{Y as h}from"./YAxis-DaK5xoY3.js";import{L as c}from"./Legend-D8bcbKXA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-v31N2mNx.js";import"./throttle-DcWQ2VKw.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./isWellBehavedNumber-De17yvdK.js";import"./d3-scale-BE1RrYdy.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DwBMtOAp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./Layer-Cn8FVO5-.js";import"./Curve-TcJOrOAj.js";import"./types-D00HSLdz.js";import"./step-B1Iay_8G.js";import"./path-DyVhHtw_.js";import"./activeStyles-_GUbXh9K.js";import"./Label-Bo3nl74y.js";import"./Text-B6xMGXMn.js";import"./pageBackground-CAJ4za5K.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./ZIndexLayer-DwmQuX8A.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./ActivePoints-DdTGUghp.js";import"./Dot-CBYwyJvt.js";import"./ErrorBarContext-XAjwvqyS.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getRadiusAndStrokeWidthFromDot-1Vrisa5h.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./useEffectiveDataKey-CDLJWg00.js";import"./CartesianAxis-BJ-39moG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CsFdNTJ7.js";import"./symbol-Cs2NCsK1.js";import"./useElementOffset-BZwJ3BKY.js";import"./uniqBy-CE_ecxrY.js";import"./iteratee-Pb6iGz9n.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
