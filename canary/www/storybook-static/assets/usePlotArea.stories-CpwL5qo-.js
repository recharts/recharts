import{R as t}from"./iframe-vymQxHWj.js";import{u as a}from"./CategoricalChart-htsvTMax.js";import{R as p}from"./zIndexSlice-CKW_xCBG.js";import{C as s}from"./ComposedChart-Cp91ph6L.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cne7Fv2j.js";import{X as l}from"./XAxis-Bzr2Ibny.js";import{Y as h}from"./YAxis-C5MuLC6_.js";import{L as c}from"./Legend-CZiWPHM0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./throttle-BK01krp9.js";import"./get-C2VjdU0L.js";import"./axisSelectors-qkXPFIdN.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./Layer-DHaSl27L.js";import"./Curve-BcJWtVmj.js";import"./types-ZBx8sWKw.js";import"./step-BtdsF4BX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAUw0A61.js";import"./Label-CMMqvv98.js";import"./Text-BroBeAan.js";import"./DOMUtils-BKNZKxmm.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./ZIndexLayer-ChwVVG6J.js";import"./useAnimationId-DSN2oeL8.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CmNHn6lS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DK4z7fEx.js";import"./symbol-taMf7PYK.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
