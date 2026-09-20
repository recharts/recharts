import{R as t}from"./iframe-CgFNOWkZ.js";import{j as a}from"./RechartsWrapper-CU75wXMo.js";import{R as p}from"./zIndexSlice-CnfPauoq.js";import{C as n}from"./ComposedChart-DAjKXGxr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-4xvbcNSQ.js";import{X as l}from"./XAxis-Bdjd5PBO.js";import{Y as h}from"./YAxis-Bn0ZQNQZ.js";import{L as c}from"./Legend-DsuBGmj6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./Layer-DQEpCXa4.js";import"./Curve-O27qjVv6.js";import"./types-C1vo7smu.js";import"./step-D28zNE0u.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UKua_m0c.js";import"./Label-DM_lkfp6.js";import"./Text-BCy-48NS.js";import"./DOMUtils-BuWky4GR.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./useAnimationId-DZ6wcHPj.js";import"./ActivePoints-DfS8V4yA.js";import"./Dot-DaO5ThZO.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getRadiusAndStrokeWidthFromDot-BfxRkwb-.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";import"./CartesianAxis-CE5tgyYR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dhpqo7YW.js";import"./symbol-DMRhcOQz.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
