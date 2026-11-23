import{R as t}from"./iframe-BPMC3WYJ.js";import{z as a}from"./RechartsWrapper-DOOVVQ84.js";import{R as p}from"./zIndexSlice-Dj40vb7g.js";import{C as n}from"./ComposedChart-q5KBJ-2n.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D5wU_WBD.js";import{X as l}from"./XAxis-BFqeDJUQ.js";import{Y as h}from"./YAxis--I1P1gwH.js";import{L as c}from"./Legend-CyUKYI2W.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CrZDIgWl.js";import"./throttle-B4k3GkVg.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWK10Otc.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./getRadiusAndStrokeWidthFromDot-Dlem8Fc0.js";import"./Layer-Cp3c10oW.js";import"./Curve-S3vEoheb.js";import"./types-w6DZXHOl.js";import"./step-DsVBo6Bh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BuPGiwQu.js";import"./Label-pm6AJFCJ.js";import"./Text-DQWN35zZ.js";import"./ZIndexLayer-edtK9VrY.js";import"./ActivePoints-D3NC-ckk.js";import"./Dot-Ctn63yOC.js";import"./activeStyles-Ci2F5zQC.js";import"./useAnimationId-BI9f9iTm.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./ErrorBarContext-CgYrVc8t.js";import"./SetGraphicalItem-BZWLeuys.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./useEffectiveDataKey-o3mJFvm5.js";import"./CartesianAxis-Fpal_j0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bx4aDwVk.js";import"./uniqBy-UcILfQxJ.js";import"./iteratee-BJq6bg2a.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
