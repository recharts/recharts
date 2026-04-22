import{e as t}from"./iframe-ARz8mg4k.js";import{P as a}from"./PlotAreaShower-atAkjEbW.js";import{c as p}from"./hooks-BYzsfUc2.js";import{R as s}from"./arrayEqualityCheck-DrcNi_LJ.js";import{C as n}from"./ComposedChart-DRBeqEP-.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DEIZCqut.js";import{X as h}from"./XAxis-BTtzk9-i.js";import{Y as c}from"./YAxis-nFfmrEBY.js";import{L as g}from"./Legend-B9KXuqvN.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./immer-DTctj60x.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./zIndexSlice-DS03Ah9k.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./Layer-DVzuE_pH.js";import"./ReactUtils-hXOLhjEf.js";import"./Label-Cu7mDpGK.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./ZIndexLayer-C2oPn4PG.js";import"./ActivePoints-DPEPJ12U.js";import"./Dot-D4Exawvu.js";import"./types-DqkCHGa8.js";import"./RegisterGraphicalItemId-BXvuLG6J.js";import"./ErrorBarContext-DDh6r-dJ.js";import"./GraphicalItemClipPath-Bz4PQaQE.js";import"./SetGraphicalItem-CxI49ViB.js";import"./useAnimationId-C0fVDb8C.js";import"./getRadiusAndStrokeWidthFromDot-CsRHkFbH.js";import"./ActiveShapeUtils-wYDV2nzn.js";import"./isPlainObject-B1moSef3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--sGlWkza.js";import"./Trapezoid-Cyk80hbt.js";import"./Sector-DhlBySFK.js";import"./Symbols-DEV19KB2.js";import"./symbol-DfbaKguC.js";import"./step-CP_r1PA8.js";import"./Curve-BzlOSzH0.js";import"./CartesianAxis-BXpWNIc5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CSKRZ4dE.js";import"./uniqBy-ASh7y_L6.js";import"./iteratee-BNnjrYcR.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
