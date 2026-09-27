import{R as t}from"./iframe-y6pZoBOe.js";import{j as a}from"./RechartsWrapper-Bd4_Y8lY.js";import{R as p}from"./zIndexSlice-BAPHOf-A.js";import{C as n}from"./ComposedChart-BoLdC1zL.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CGSclP_m.js";import{X as l}from"./XAxis-B75EARC_.js";import{Y as h}from"./YAxis-BDc8eAjx.js";import{L as c}from"./Legend-DSqX6ZaY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DK41N9kV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BmcHsTRr.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./Layer-34ncCtUV.js";import"./Curve-fod9LGdb.js";import"./types-DtUXsqBa.js";import"./step-CafFQeb3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DIgNuRUa.js";import"./Label-9NqXhRk3.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./ZIndexLayer-C7BuriGU.js";import"./useAnimationId-9X7pomqp.js";import"./ActivePoints-CLmTgrQX.js";import"./Dot-ClwGjlu0.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./ErrorBarContext-TnpfkRXW.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getRadiusAndStrokeWidthFromDot-BsnIiv2v.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";import"./CartesianAxis-CoHDQG06.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BvJQgg8W.js";import"./symbol-Bpchgci6.js";import"./useElementOffset-CqhuSHwW.js";import"./uniqBy-BLfo-8DX.js";import"./iteratee-DxrRJU94.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
