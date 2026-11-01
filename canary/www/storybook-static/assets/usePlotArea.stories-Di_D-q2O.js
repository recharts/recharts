import{R as t}from"./iframe-D34TH6kS.js";import{z as a}from"./RechartsWrapper-Dd_PV6Ah.js";import{R as p}from"./zIndexSlice-DaIxnBgS.js";import{C as n}from"./ComposedChart-LEsvyFPs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CA8mNuGo.js";import{X as l}from"./XAxis-eUT57Vta.js";import{Y as h}from"./YAxis-BB2iGVHg.js";import{L as c}from"./Legend-BWK9Xcu6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dy4Zn44Z.js";import"./throttle-BpT9ifnU.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./polarAxisSelectors-CB23D7zz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZnn2eaB.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./Layer-Dwmoii2m.js";import"./Curve-DynZHvMF.js";import"./types-sVdhE-m7.js";import"./step-ClOyd6C_.js";import"./path-DyVhHtw_.js";import"./LabelList-1IdMTUqF.js";import"./Label-Bmp2qp_V.js";import"./Text-DnFfEMnn.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./ActivePoints-CrE_aMeq.js";import"./Dot-Dl99GL8N.js";import"./activeStyles-BhcCN1d0.js";import"./useAnimationId-B9qHmTzi.js";import"./dataEntryStyles-vZIv75R2.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./ErrorBarContext-BpXycT31.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getRadiusAndStrokeWidthFromDot-Cm9Ouxhm.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./CartesianAxis-BM-PI8Qd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
