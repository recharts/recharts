import{R as t}from"./iframe-DIGZheBd.js";import{e as a}from"./RechartsWrapper-CZtBBFTk.js";import{R as p}from"./zIndexSlice-_cU-ODvm.js";import{C as n}from"./ComposedChart-AI3knhdQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-sf0r7qgd.js";import{X as l}from"./XAxis-JeVlcNJo.js";import{Y as h}from"./YAxis-pOdEjlW4.js";import{L as c}from"./Legend-CfHDjC-3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D8SOTwsy.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./Layer-CyJKyehG.js";import"./Curve-DTsvKbrn.js";import"./types-MK9UFfTC.js";import"./step-DnA-tUNV.js";import"./path-DyVhHtw_.js";import"./activeStyles-BNdVOgR8.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./ZIndexLayer-Csfe5z3g.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./useEffectiveDataKey-DDZKQvTb.js";import"./CartesianAxis--bh-_8od.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfxfCoQh.js";import"./symbol-CFKklyyk.js";import"./useElementOffset-MF99uNag.js";import"./uniqBy-De-60mdC.js";import"./iteratee-UNnIxzF9.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
