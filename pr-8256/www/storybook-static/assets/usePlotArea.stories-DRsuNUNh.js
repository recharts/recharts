import{R as t}from"./iframe-Cd5XZAZS.js";import{z as a}from"./RechartsWrapper-m0J5sskz.js";import{R as p}from"./zIndexSlice-DK_btX6x.js";import{C as n}from"./ComposedChart-C4dh_bHB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DSgOWsRQ.js";import{X as l}from"./XAxis-DuodIejs.js";import{Y as h}from"./YAxis-BKK4Q1hO.js";import{L as c}from"./Legend-BlPnQgrE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BHI5fpRs.js";import"./throttle-PHSKRlho.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgwU88kX.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./getRadiusAndStrokeWidthFromDot-l9UD6a4a.js";import"./Layer-B_2Ec-2K.js";import"./Curve-CXblHPne.js";import"./types-GkAdah5a.js";import"./step-Cqk_pcFb.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CotdwlGF.js";import"./Label-DZuK-EQs.js";import"./Text-wtrDapFR.js";import"./ZIndexLayer-CbCfhAbh.js";import"./ActivePoints-BkMJ028i.js";import"./Dot-DRLqVGoB.js";import"./activeStyles-BcTmj77e.js";import"./useAnimationId-_tPgr2CA.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./useEffectiveDataKey-Cop8dd2N.js";import"./CartesianAxis-DJMJDg5E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C_w2V4jv.js";import"./uniqBy-C5fXCJV1.js";import"./iteratee-BY7Di4wg.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
