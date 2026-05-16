import{e as t}from"./iframe-De3AYcmL.js";import{P as a}from"./PlotAreaShower-Ddz7JCST.js";import{Y as p}from"./hooks-B6mrGJaY.js";import{g as s}from"./arrayEqualityCheck-8J4d381_.js";import{C as n}from"./ComposedChart-BkLYbBCh.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-BTdFVOE-.js";import{X as h}from"./XAxis-yu0JnOft.js";import{Y as c}from"./YAxis-DeG6FNaX.js";import{L as g}from"./Legend-DtXXk6Qf.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DhJtSzTW.js";import"./immer-B3IrcYoh.js";import"./axisSelectors-0INLWORQ.js";import"./d3-scale-C-QBsPkn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcM6EHAr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zGbVOYaW.js";import"./index-uL_5FIKS.js";import"./zIndexSlice-pmRq5Z0K.js";import"./renderedTicksSlice-CJRhDBm9.js";import"./CartesianChart-BqrRTf2N.js";import"./chartDataContext-CqPzveAf.js";import"./CategoricalChart-7Ea_WF3s.js";import"./Layer-CvP2ZRzB.js";import"./ReactUtils-smyHXU-m.js";import"./Label-BNrDAtep.js";import"./Text-C6Iq6Q5F.js";import"./DOMUtils-CspO4-oS.js";import"./ZIndexLayer-CofVuiDD.js";import"./ActivePoints-DLYoMrZC.js";import"./Dot-B4Ai6LOf.js";import"./types-B0moMXXW.js";import"./RegisterGraphicalItemId-DAYanOqB.js";import"./ErrorBarContext-CX9g_kEB.js";import"./GraphicalItemClipPath-CJOH5ivR.js";import"./SetGraphicalItem-Cu0fWv08.js";import"./useAnimationId-DfOYRRzz.js";import"./getRadiusAndStrokeWidthFromDot-CyShnh2z.js";import"./ActiveShapeUtils-Br556SC7.js";import"./isPlainObject-Bf8xB-ha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dd6aqeBt.js";import"./Trapezoid-t9gr1WzF.js";import"./Sector-V0157Hdp.js";import"./Symbols-C1VJaBCL.js";import"./symbol-CpBATsG6.js";import"./step-CaS84Y98.js";import"./Curve-C6hmNTxr.js";import"./CartesianAxis-CTQd1Whd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BQSNS7pX.js";import"./uniqBy-DqX0Rf1p.js";import"./iteratee-BoAs4z-B.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
