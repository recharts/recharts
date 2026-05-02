import{e as t}from"./iframe-DDxjm-WU.js";import{P as a}from"./PlotAreaShower-CCGJY3Cl.js";import{c as p}from"./hooks-YOhxCck_.js";import{R as s}from"./arrayEqualityCheck-BDTW-iCp.js";import{C as n}from"./ComposedChart-CQsXSi4S.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BPnw9nie.js";import{X as h}from"./XAxis-Bk56gde7.js";import{Y as c}from"./YAxis-CFpFu4li.js";import{L as g}from"./Legend-BLeAbQPh.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./immer-Dkl5Am7g.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./Layer-DLlz0gUf.js";import"./Curve-Dkov4-pW.js";import"./types-BJgxgmcc.js";import"./step-SAK8fO-u.js";import"./AnimatedItems-CSkyjlHH.js";import"./Label-yPRdE_cG.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./ZIndexLayer-BMzzahCv.js";import"./useAnimationId-BR6TF1aX.js";import"./ActivePoints-C7F7VZ5g.js";import"./Dot-L6tPFerw.js";import"./RegisterGraphicalItemId-ClGGvm6o.js";import"./ErrorBarContext-DW-8h9VL.js";import"./GraphicalItemClipPath-DqVRZ_0S.js";import"./SetGraphicalItem-CuKG-JqA.js";import"./getRadiusAndStrokeWidthFromDot-BORIc5te.js";import"./ActiveShapeUtils-DLASNkc5.js";import"./isPlainObject-BBpCzhfD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IbIg2bFH.js";import"./Trapezoid--noiZBKT.js";import"./Sector-DsN_tQHR.js";import"./Symbols-KpMFDNBi.js";import"./symbol-rnYDxF4k.js";import"./CartesianAxis-ClZZ2QTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-jNB1bLaO.js";import"./uniqBy-DUJoZvc-.js";import"./iteratee-B_gEuLW0.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Pt=["UsePlotArea"];export{e as UsePlotArea,Pt as __namedExportsOrder,ft as default};
