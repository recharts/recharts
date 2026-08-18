import{R as t}from"./iframe-BqyXYbfO.js";import{u as a}from"./CategoricalChart-RVKqvA7y.js";import{R as p}from"./zIndexSlice-B01GboJR.js";import{C as s}from"./ComposedChart-B7zFkt6v.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CA8PuEEu.js";import{X as l}from"./XAxis-0w0QIVSx.js";import{Y as h}from"./YAxis-CPeQqwFp.js";import{L as c}from"./Legend--uIoEOCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./throttle-CuHL7VMX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DpUYmlyC.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./Layer-cG34Tdrq.js";import"./Curve-B6fu5Ruc.js";import"./types-B7ADV__L.js";import"./step-B3dTMrU0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CpV-NRBb.js";import"./Label-oragi0Kj.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./ZIndexLayer-rhqIudSr.js";import"./useAnimationId-CK12bq4f.js";import"./ActivePoints-CiwZFN_M.js";import"./Dot-C0u3Avpo.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getRadiusAndStrokeWidthFromDot-HXIFwiLB.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DueGTPVP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DnBmXhc1.js";import"./symbol-IA9FIS8n.js";import"./useElementOffset-DExtgCNc.js";import"./uniqBy-DKsxBLj8.js";import"./iteratee-I9oDQ_jw.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
