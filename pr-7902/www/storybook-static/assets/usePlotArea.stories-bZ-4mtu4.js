import{R as t}from"./iframe-BnuuYCdy.js";import{j as a}from"./RechartsWrapper-yuVx-GfW.js";import{R as p}from"./zIndexSlice-BbvX8GRP.js";import{C as n}from"./ComposedChart-BSlw0HFk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B-ErwV6g.js";import{X as l}from"./XAxis-SZJEJq9X.js";import{Y as h}from"./YAxis-C9KSlBTW.js";import{L as c}from"./Legend-DPJag0h4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LqE-nBKd.js";import"./throttle-hzsPLVCI.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./Layer-CdUwTkt1.js";import"./Curve-DLpdI-qq.js";import"./types-CkU7DeC5.js";import"./step-CQAloss-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DduhreQ3.js";import"./Label-B4GoECSR.js";import"./Text-CGVn4Fi7.js";import"./DOMUtils-uoptzxcb.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./ZIndexLayer-exEMosZg.js";import"./useAnimationId-DPByLvsu.js";import"./ActivePoints-DSOuOqL1.js";import"./Dot-DZr8LyTD.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./ErrorBarContext-Bs4CO-eU.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getRadiusAndStrokeWidthFromDot-3avq4t8Q.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";import"./CartesianAxis-D94E5CAk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-RXJzCMmL.js";import"./symbol-DE3j17Yl.js";import"./useElementOffset-BPllDPPS.js";import"./uniqBy-M64kr61G.js";import"./iteratee-UDge6fuf.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
