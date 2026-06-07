import{R as t}from"./iframe-ZPRKoU1G.js";import{u as a}from"./CategoricalChart-C8cl1dv9.js";import{R as p}from"./zIndexSlice-BsSz6rnO.js";import{C as s}from"./ComposedChart-BHINqNhm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B1M2NTAD.js";import{X as l}from"./XAxis-C6ITfnkV.js";import{Y as h}from"./YAxis-CL1cp1D0.js";import{L as c}from"./Legend-TCTvzd7q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./immer-Dqh26iK6.js";import"./get-CGa3_Ok6.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./Layer-Cw8ar51S.js";import"./Curve-ePYEilGq.js";import"./types-BUDAoUUu.js";import"./step-BGVwbWHg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4M5eO1p.js";import"./Label-BBlujwtM.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./ZIndexLayer-C_hsauba.js";import"./useAnimationId-CZUjtEje.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./CartesianAxis-BoMdju9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-VbHdftIF.js";import"./symbol-BcEJ41EE.js";import"./useElementOffset-p0zX6-6P.js";import"./uniqBy-BfU0_UHc.js";import"./iteratee-Coqn7yfn.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
