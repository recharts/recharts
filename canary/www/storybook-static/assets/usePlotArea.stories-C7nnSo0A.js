import{R as t}from"./iframe-C0h7cDRB.js";import{j as a}from"./RechartsWrapper-Cw2PyL1_.js";import{R as p}from"./zIndexSlice-qYbn1M2d.js";import{C as n}from"./ComposedChart-Bxc6CdJK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BPh87F_P.js";import{X as l}from"./XAxis-BA_RiYmX.js";import{Y as h}from"./YAxis-C8YuU25K.js";import{L as c}from"./Legend-B9myfM-R.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkghodIs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ao6VSC3T.js";import"./throttle-BTNdvVGL.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./Layer-CDasTplA.js";import"./Curve-S0jwBuSa.js";import"./types-BFdAlI3B.js";import"./step-imJiFMDF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_8lABYqi.js";import"./Label-ChRnigpx.js";import"./Text-0LVKVKzy.js";import"./DOMUtils-CJDZt9Se.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./ZIndexLayer-CQRtxHWp.js";import"./useAnimationId-CdJJ5aJU.js";import"./ActivePoints-BbEboQPa.js";import"./Dot-bF0pyqQk.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getRadiusAndStrokeWidthFromDot-BL01NReM.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CojQTbDy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CkEijzRx.js";import"./symbol-DZ3WUR_I.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
