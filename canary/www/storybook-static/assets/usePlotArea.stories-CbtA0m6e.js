import{R as t}from"./iframe-DFlWwuKT.js";import{j as a}from"./RechartsWrapper-CGvYSOfx.js";import{R as p}from"./zIndexSlice-DTl3Es75.js";import{C as n}from"./ComposedChart-DHFXtPRO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BBf0J4Pb.js";import{X as l}from"./XAxis-9-A5V75m.js";import{Y as h}from"./YAxis-BS_00hSs.js";import{L as c}from"./Legend-e4PwlEr8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjksfEx4.js";import"./throttle-D8jnmLcF.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./Layer-URuQnAjL.js";import"./Curve-BoAyROId.js";import"./types-BOBvmLK9.js";import"./step-DPc2nVCG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B-WGLUSk.js";import"./Label-Cg_hrWdd.js";import"./Text-7kqB13RI.js";import"./DOMUtils-CYU7OgfG.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./ZIndexLayer-DHVkI8jl.js";import"./useAnimationId-mTQIyJO-.js";import"./ActivePoints-BjXgqI1Z.js";import"./Dot-iIg854rO.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./ErrorBarContext-DzGj33gU.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./getRadiusAndStrokeWidthFromDot-54dC4Ufn.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";import"./CartesianAxis-C9eM4ktZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CApAx5hI.js";import"./symbol-D6xFDwvn.js";import"./useElementOffset-CApEq3WG.js";import"./uniqBy-CT4IUB8Q.js";import"./iteratee-DCytidek.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
