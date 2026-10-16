import{R as t}from"./iframe-CXO7LpG4.js";import{e as a}from"./RechartsWrapper-sOQIHtEN.js";import{R as p}from"./zIndexSlice-DfFYBEeE.js";import{C as n}from"./ComposedChart-CX86GF1x.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CZ0CBwDd.js";import{X as l}from"./XAxis-BMVFXruj.js";import{Y as h}from"./YAxis-DOeYdqQk.js";import{L as c}from"./Legend-OHAT7ssA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./get-C2VjdU0L.js";import"./axisSelectors-PR70UCKy.js";import"./throttle-DaNNjE4n.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./d3-scale-DchtYoFX.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-C9lYrgEX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./Layer-D31-Hvub.js";import"./Curve-B0_ANcrk.js";import"./types-B806ejcH.js";import"./step-4HDWVyZ1.js";import"./path-DyVhHtw_.js";import"./activeStyles-BJ4YqvBn.js";import"./Label-CPCjl1xH.js";import"./Text-CQgXuSK-.js";import"./pageBackground-C22aj54-.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./ZIndexLayer-8oHJlBan.js";import"./useAnimationId-BbnDDjkN.js";import"./dataEntryStyles-VHSSmKTo.js";import"./ActivePoints-D48l0kHu.js";import"./Dot-zqLpNykC.js";import"./ErrorBarContext-DEed49-o.js";import"./GraphicalItemClipPath-Bdz9TeZ1.js";import"./SetGraphicalItem-DftB5RCs.js";import"./getRadiusAndStrokeWidthFromDot-CRQLZCgz.js";import"./ActiveShapeUtils-B5MsqJFC.js";import"./useEffectiveDataKey-B0ZkPejj.js";import"./CartesianAxis-C3NdPzIM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_oR1yez.js";import"./symbol-D7bf8irw.js";import"./useElementOffset-BfmKGhNj.js";import"./uniqBy-CnxfY6gQ.js";import"./iteratee-DH4OJnDe.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
