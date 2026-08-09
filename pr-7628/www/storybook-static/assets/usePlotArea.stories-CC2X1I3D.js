import{R as t}from"./iframe--KdzZtf9.js";import{e as a}from"./CategoricalChart-DmFxRtAx.js";import{R as p}from"./zIndexSlice-CHztvQxJ.js";import{C as s}from"./ComposedChart-hjuG2iDf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CLz33ZR0.js";import{X as l}from"./XAxis-BtfaW-Ms.js";import{Y as h}from"./YAxis-CoP3OSHi.js";import{L as c}from"./Legend-_bWUKMph.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./throttle-hG26ZCHv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DJc-QTCs.js";import"./resolveDefaultProps-DclZvKxN.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./Layer-DCgJY1vZ.js";import"./Curve-Blx4pOcl.js";import"./types-DxjttXzA.js";import"./step-CWWzJll9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca9tbEhj.js";import"./Label-Bwq_3Ge6.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./ZIndexLayer--b9avAgZ.js";import"./useAnimationId-Dz24l0hc.js";import"./ActivePoints-9Jl-GXNH.js";import"./Dot-BnDtKOPm.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./getRadiusAndStrokeWidthFromDot-Ccc-h-4F.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./CartesianAxis-8V80jjh3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DiBbRsrj.js";import"./symbol-CCGLzW4r.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
