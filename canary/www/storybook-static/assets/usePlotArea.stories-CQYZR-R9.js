import{R as t}from"./iframe-RJgsiaPL.js";import{j as a}from"./RechartsWrapper-rp6dEN_z.js";import{R as p}from"./zIndexSlice-CaPb3BS1.js";import{C as n}from"./ComposedChart-De4rYWqF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DaDTKpZD.js";import{X as l}from"./XAxis-D1NHLWzc.js";import{Y as h}from"./YAxis-BC94qFyI.js";import{L as c}from"./Legend-BpJRPX2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./Layer-CDx7YXT6.js";import"./Curve-CFCl1kCW.js";import"./types-C_mapbFf.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ct76uSB6.js";import"./Label-DPnPk4i3.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./ZIndexLayer-BoWVhfOi.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./CartesianAxis-BXFp-lIC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfkRpYNl.js";import"./symbol-bC4XhbYr.js";import"./useElementOffset-ZiVaw6LG.js";import"./uniqBy-DLupEHg_.js";import"./iteratee-DLy57EFC.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
