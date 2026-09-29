import{R as t}from"./iframe-VTxubO5w.js";import{j as a}from"./RechartsWrapper-Bsatjkvb.js";import{R as p}from"./zIndexSlice-BFYFcuFW.js";import{C as n}from"./ComposedChart-CdaYpXwX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ckaw2kb_.js";import{X as l}from"./XAxis-3pFA-Nf-.js";import{Y as h}from"./YAxis-bVdfj-ty.js";import{L as c}from"./Legend-qtLHfXZy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CvnfJ2AM.js";import"./throttle-Bj7f8bZe.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./Layer-D1MCI5Ak.js";import"./Curve-CMYEPk4H.js";import"./types-CDzvAUga.js";import"./step-Bhzd0PV7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-YcLJd9jr.js";import"./Label-DNcqVwFA.js";import"./Text-uR2Yj3PM.js";import"./DOMUtils-BAN1xftN.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./ZIndexLayer-NKRjvkpW.js";import"./useAnimationId-DPVDnlp2.js";import"./ActivePoints-DitxvlFH.js";import"./Dot-CaZRr3jt.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./getRadiusAndStrokeWidthFromDot-pmdOmimJ.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./CartesianAxis-C-En2Edk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-mnsValfd.js";import"./symbol-v33gieij.js";import"./useElementOffset-D-QmICBX.js";import"./uniqBy-Ch5xiMZc.js";import"./iteratee-M9ugrzAI.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
