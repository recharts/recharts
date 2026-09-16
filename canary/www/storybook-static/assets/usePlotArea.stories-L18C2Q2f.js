import{R as t}from"./iframe-CIqnkIPF.js";import{j as a}from"./RechartsWrapper-BI930gKz.js";import{R as p}from"./zIndexSlice-C4_auGQK.js";import{C as n}from"./ComposedChart-D4NhPDr5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CIVM0eLj.js";import{X as l}from"./XAxis-B7yx9F7n.js";import{Y as h}from"./YAxis-uqdlbLxE.js";import{L as c}from"./Legend-CeNhuuzW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BFyfbVPX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-tSjH_GJH.js";import"./throttle-DQoqhRFH.js";import"./index-9S55HN04.js";import"./index-BLp3voyE.js";import"./isWellBehavedNumber-qR6709gc.js";import"./d3-scale-Bhl30Eoo.js";import"./index-Dd4tpery.js";import"./index-CmdQhCAH.js";import"./renderedTicksSlice-CvMTSVT4.js";import"./index-DK82_Rv1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjwJjVuV.js";import"./chartDataContext-StRUZ171.js";import"./CategoricalChart-kSvqIkP0.js";import"./Layer-BamNj_61.js";import"./Curve-B3_VtN3j.js";import"./types-t2__B9uA.js";import"./step-CbHMrxnl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DeKxEgFK.js";import"./Label-Drah4wki.js";import"./Text-DQlwJtIP.js";import"./DOMUtils-DNJKvmAc.js";import"./useId-Bxa3d20C.js";import"./useBackwardsCompatibleTheme-tny2gIbf.js";import"./ZIndexLayer-CdFbga_E.js";import"./useAnimationId-Cd4eq7V7.js";import"./ActivePoints-BXMF2o4n.js";import"./Dot-CwC_vt7v.js";import"./RegisterGraphicalItemId-CTUnkLRc.js";import"./ErrorBarContext-Ow8l1Zrp.js";import"./GraphicalItemClipPath-Cq4Ga7ez.js";import"./SetGraphicalItem-A5whYu6T.js";import"./getRadiusAndStrokeWidthFromDot-CfFHUr4w.js";import"./ActiveShapeUtils-BeOi9VVh.js";import"./useGraphicalItemIdentity-BPBVnbd3.js";import"./CartesianAxis-D54rrpy0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuldplOI.js";import"./symbol-CEHb0TCd.js";import"./useElementOffset-DWWrDqts.js";import"./uniqBy-CrC70t5H.js";import"./iteratee-DAHo7lUT.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
