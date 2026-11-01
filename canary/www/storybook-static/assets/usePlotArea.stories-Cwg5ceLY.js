import{R as t}from"./iframe-BoZGnJw3.js";import{z as a}from"./RechartsWrapper-WWWx-rVQ.js";import{R as p}from"./zIndexSlice-a6rFVYjz.js";import{C as n}from"./ComposedChart-BoAZL9SR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-LdQMhgoS.js";import{X as l}from"./XAxis-DaJlL1eX.js";import{Y as h}from"./YAxis-DWoSckNu.js";import{L as c}from"./Legend-BXUyYQeC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D380Rkbk.js";import"./throttle-DtDTnxHB.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./Layer-DWrdDLVq.js";import"./Curve-Cwz00roS.js";import"./types-VJa2wa64.js";import"./step-DM17TeVN.js";import"./path-DyVhHtw_.js";import"./LabelList-DN0FQ104.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./ActivePoints-DFbmabNT.js";import"./Dot-DvyXLuZB.js";import"./activeStyles-B-PjepTA.js";import"./useAnimationId-DhSaM75t.js";import"./dataEntryStyles-BZaOAKnN.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./ErrorBarContext-BWsLX-Zn.js";import"./SetGraphicalItem-8abau_IG.js";import"./getRadiusAndStrokeWidthFromDot-CXVA2gr-.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./useEffectiveDataKey-D7W7vL8E.js";import"./CartesianAxis-LiXL0IDn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-hC9xa8NL.js";import"./uniqBy-bj0x6NYX.js";import"./iteratee-CAiBVgkS.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
