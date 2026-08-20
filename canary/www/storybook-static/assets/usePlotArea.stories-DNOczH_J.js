import{R as t}from"./iframe-D9AiK7MA.js";import{u as a}from"./CategoricalChart-BiDsY9G3.js";import{R as p}from"./zIndexSlice-DhQQTweq.js";import{C as s}from"./ComposedChart-DRe_fBXL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZgXAn__.js";import{X as l}from"./XAxis-BCGK_x8y.js";import{Y as h}from"./YAxis-tdOr8uxM.js";import{L as c}from"./Legend-CEpsdsq6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FkIEBIEk.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./throttle-CqrKdGFn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CD31PgCw.js";import"./resolveDefaultProps-BrjTargu.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./d3-scale-CwcWyPDB.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./Layer-nhRynhYN.js";import"./Curve-wdmzEcHN.js";import"./types-Cl8UDNBF.js";import"./step-DlhrK73A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DbRJrrAP.js";import"./Label-DaTR-VJZ.js";import"./Text-C_gczTx7.js";import"./DOMUtils-C3E39plZ.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./ZIndexLayer-XiAaecg1.js";import"./useAnimationId-C-WCGbVo.js";import"./ActivePoints--lqdywIN.js";import"./Dot-CbHR5Oi7.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./ErrorBarContext-jnq7QWza.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./getRadiusAndStrokeWidthFromDot-CTRnAYuX.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-NS8dhc5y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CVYHcjvQ.js";import"./symbol-DxHnn3QN.js";import"./useElementOffset-rjFr_gsT.js";import"./uniqBy-6EpLurNX.js";import"./iteratee-KOAwIcrd.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
