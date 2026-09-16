import{R as t}from"./iframe-O_zfFb6r.js";import{j as a}from"./RechartsWrapper-DPG1lJEB.js";import{R as p}from"./zIndexSlice-CDi6Z2zv.js";import{C as n}from"./ComposedChart-BifQjRte.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C-49beIg.js";import{X as l}from"./XAxis-BJYhxEEM.js";import{Y as h}from"./YAxis-4IiwGwhc.js";import{L as c}from"./Legend-1Ol6OkJV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cu-Cxseq.js";import"./throttle-nfGA0JID.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./isWellBehavedNumber-zMKck78V.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";import"./Layer-IOKs9hiO.js";import"./Curve-Dj1kSGWk.js";import"./types-dgF4Zt0B.js";import"./step-Cv1KNwyF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B71252eU.js";import"./Label-Bt0vOpuF.js";import"./Text-TAeBHRIT.js";import"./DOMUtils-BJJ-vVKn.js";import"./useId-CBZzzSpP.js";import"./useBackwardsCompatibleTheme-DbcN9pdU.js";import"./ZIndexLayer-CbUFYwY1.js";import"./useAnimationId-O6XvtviY.js";import"./ActivePoints-C0Y8Gw_Z.js";import"./Dot-CLEBjmd0.js";import"./RegisterGraphicalItemId-D2Q5ahcD.js";import"./ErrorBarContext-CDadBxpm.js";import"./GraphicalItemClipPath-C_4Tb4-L.js";import"./SetGraphicalItem-BsFfkq2Z.js";import"./getRadiusAndStrokeWidthFromDot-BlCMDsUw.js";import"./ActiveShapeUtils-0QkmK8Hn.js";import"./useGraphicalItemIdentity-Q9Kv4PEr.js";import"./CartesianAxis-DAJd6uwN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-cbozTFmP.js";import"./symbol-C4Mpqg-9.js";import"./useElementOffset-D293KLr8.js";import"./uniqBy-B-gqZXLG.js";import"./iteratee-Tn2QA64I.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
