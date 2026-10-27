import{R as t}from"./iframe-0XL0sthS.js";import{z as a}from"./RechartsWrapper-B-mX6d9D.js";import{R as p}from"./zIndexSlice-C9Fui9SZ.js";import{C as n}from"./ComposedChart-Deu_CMYg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BgTy5bbd.js";import{X as l}from"./XAxis-8dcEWD9_.js";import{Y as h}from"./YAxis-BB_fEBXq.js";import{L as c}from"./Legend-C5lZ5guZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CET1BM1x.js";import"./throttle-Dos2q2R1.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8BAYDAt.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Layer-3mPd111u.js";import"./Curve-B4Yxq0yJ.js";import"./types-B6SF8UCq.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./LabelList-Bxms0g1E.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./dataEntryStyles-jYd5_Tui.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./CartesianAxis-P0zAs4bB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BydIrxuW.js";import"./uniqBy-DSUFf6NQ.js";import"./iteratee-C_ZjvgJo.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
