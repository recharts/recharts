import{R as t}from"./iframe-DU8eOjQ1.js";import{u as a}from"./CategoricalChart-QJ_K41d4.js";import{R as p}from"./zIndexSlice-BTgaU9mo.js";import{C as s}from"./ComposedChart-D8lCnIzr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bui1sNFj.js";import{X as l}from"./XAxis-DwxXrNeT.js";import{Y as h}from"./YAxis-C5Bhkieg.js";import{L as c}from"./Legend-XINFVufZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./throttle-Ds7SGj9O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BDOPVsa7.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./Layer-BIDK12wM.js";import"./Curve-DOio-0wn.js";import"./types-RZ1xD5kE.js";import"./step-DrL3PK0v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DENpSSAq.js";import"./Label-Z9o5T8X-.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./ZIndexLayer-D8k4jgaj.js";import"./useAnimationId-CdvddGlN.js";import"./ActivePoints-BjMq4-Xw.js";import"./Dot-B7WcmA_A.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getRadiusAndStrokeWidthFromDot-B5__NC0u.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CXtQQdut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-s2FGnFTW.js";import"./symbol-D0L4AM1n.js";import"./useElementOffset-GWMwWCSs.js";import"./uniqBy-DbQx-kHr.js";import"./iteratee-Did0_bax.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
