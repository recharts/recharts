import{R as t}from"./iframe-Badwul9q.js";import{u as a}from"./CategoricalChart-1ZyUfD1N.js";import{R as p}from"./zIndexSlice-CEPqA6uv.js";import{C as s}from"./ComposedChart-Cw6WxKp9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bq5Pip6f.js";import{X as l}from"./XAxis-DwaxFHEN.js";import{Y as h}from"./YAxis-B14z5K_h.js";import{L as c}from"./Legend-Dhz4Bzfc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./index-BjECjR4R.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./throttle-BG2Qy65h.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTwDlHnv.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./Layer-D6-JDPxR.js";import"./Curve-BaVpsYCr.js";import"./types-DAsbYWRO.js";import"./step-B8WIZZ5_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7VnlwSp.js";import"./Label-UqWUh_Dj.js";import"./Text-h9Iu7ZeD.js";import"./DOMUtils-BA3evV1C.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./ZIndexLayer-DzsdJFep.js";import"./useAnimationId-jiUA16Df.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C8y8cQTk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dtyl81qq.js";import"./symbol-DUMetRhr.js";import"./useElementOffset-BfmRpqsp.js";import"./uniqBy-BfG2k_aA.js";import"./iteratee-CpkIGYwK.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
