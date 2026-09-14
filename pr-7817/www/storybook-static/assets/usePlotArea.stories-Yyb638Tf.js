import{R as t}from"./iframe-C079Nsfx.js";import{j as a}from"./RechartsWrapper-BrZlEkAN.js";import{R as p}from"./zIndexSlice-DLciVaZw.js";import{C as n}from"./ComposedChart-BOV6wT6A.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D_FKsDxM.js";import{X as l}from"./XAxis-De-1mJNj.js";import{Y as h}from"./YAxis-CLt4nzsu.js";import{L as c}from"./Legend-CD3bvqs8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BAri39V9.js";import"./throttle-D3s_o_Wq.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./Layer-Kj8YrSbz.js";import"./Curve-iBp1fVgP.js";import"./types-CUH5bwnf.js";import"./step-Chg4DONu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DS39RbqN.js";import"./Label-DC63Ta0S.js";import"./Text-6vWGAU42.js";import"./DOMUtils-L7J-bYO6.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./ZIndexLayer-IY8xHCFB.js";import"./useAnimationId-MWHCnbEb.js";import"./ActivePoints-D6LcUBQa.js";import"./Dot-mGzGAe7T.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./ErrorBarContext-DRwIAR_a.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getRadiusAndStrokeWidthFromDot-CGqoDsan.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";import"./CartesianAxis-KliPXgnc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B6mwN2Qu.js";import"./symbol-8JioVXKY.js";import"./useElementOffset-CMlcetBv.js";import"./uniqBy-BY9dT-HT.js";import"./iteratee-DCZNy5jY.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
