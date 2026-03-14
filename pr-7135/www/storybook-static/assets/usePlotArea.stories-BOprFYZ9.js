import{e as t}from"./iframe-Bv9A2uSW.js";import{P as a}from"./PlotAreaShower-DuXT_1jY.js";import{c as p}from"./hooks-BFXhp1mb.js";import{R as s}from"./arrayEqualityCheck-40Pjb_0H.js";import{C as n}from"./ComposedChart-8suCaxCV.js";import{L as l}from"./Line-D2EubcdT.js";import{X as d}from"./XAxis-CDoYxb3o.js";import{Y as h}from"./YAxis-Czr7awDd.js";import{L as c}from"./Legend-BG4XdZPV.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./immer-Ch1CAK4c.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./zIndexSlice-BDVZwdE1.js";import"./renderedTicksSlice-fUxzen-N.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./Layer-BOAumolw.js";import"./ReactUtils-Be8qMHP_.js";import"./Label-Dk_EOWAk.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./ZIndexLayer-DOKoEx6m.js";import"./ActivePoints-DpwJQ3PC.js";import"./Dot-BOg88zsH.js";import"./types-BNfpUJFf.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./ErrorBarContext-PQzMtlLN.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./useAnimationId-5b7iZFah.js";import"./getRadiusAndStrokeWidthFromDot-EXhvIgor.js";import"./ActiveShapeUtils-__oljrAQ.js";import"./isPlainObject-CgUr2901.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9QMG00E.js";import"./Trapezoid-WLRjMuUY.js";import"./Sector-S-QnBLP2.js";import"./Symbols-DSA8vyEc.js";import"./symbol-gFXZdrDQ.js";import"./step-Dhxu0QC9.js";import"./Curve-g-TKkld0.js";import"./CartesianAxis-CiclrdFg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CKNTo5FY.js";import"./uniqBy-CkuHOdDH.js";import"./iteratee-BdEGTM6e.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
