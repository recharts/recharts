import{R as t}from"./iframe-DEVQjgtg.js";import{z as a}from"./RechartsWrapper-CfFuT0mb.js";import{R as p}from"./zIndexSlice-DfK8JSFq.js";import{C as n}from"./ComposedChart-CkNI_L7v.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DIzt92wi.js";import{X as l}from"./XAxis-BW3rW0v-.js";import{Y as h}from"./YAxis-DNUJzVJY.js";import{L as c}from"./Legend-CuHxeQW8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./axisSelectors-t3BvEa3q.js";import"./throttle-icp-MZ_z.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Co6YNHM_.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./Layer-Cr563h4j.js";import"./Curve-a_jcRLJ0.js";import"./types-B0JGDzFy.js";import"./step-CpcYtbS4.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./Label-CuMp2cQz.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./activeStyles-D4aY95Js.js";import"./useAnimationId-CMFy88eN.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./ErrorBarContext-D5jMJqSB.js";import"./SetGraphicalItem-CsW3luzS.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./CartesianAxis-CPxmijCh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
