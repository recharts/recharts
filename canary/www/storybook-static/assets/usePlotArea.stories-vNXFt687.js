import{e as t}from"./iframe-D0NgTmOF.js";import{P as a}from"./PlotAreaShower-C4z2y4fi.js";import{Y as p}from"./hooks-BjdflWes.js";import{g as s}from"./arrayEqualityCheck-CwgUv_ht.js";import{C as n}from"./ComposedChart-DJ5Lkyrz.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-CEqMZuta.js";import{X as h}from"./XAxis-CncyYZDx.js";import{Y as c}from"./YAxis-CwDQurre.js";import{L as g}from"./Legend-MDlw3RMW.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./immer-DnKwXwYM.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./zIndexSlice-B6knb3no.js";import"./renderedTicksSlice-B6w59eqG.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./Layer-CdU29MCm.js";import"./ReactUtils-CP67hvAP.js";import"./Label-CwJJPXCN.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./ZIndexLayer-CgbYN4dr.js";import"./ActivePoints-Bqu6MNFU.js";import"./Dot-DXucPl9o.js";import"./types-BAabENvn.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./ErrorBarContext-DWShVRAe.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./useAnimationId-BMh-hzSk.js";import"./getRadiusAndStrokeWidthFromDot-BgAjRsmY.js";import"./ActiveShapeUtils-Ck9x9SAt.js";import"./isPlainObject-Cp-FcUrF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7KfHMDv.js";import"./Trapezoid-Bw4_2Ajp.js";import"./Sector-D7Ir7kN1.js";import"./Symbols-BQ_Pkm6Y.js";import"./symbol-DTnIuW2s.js";import"./step-Dotb7kAI.js";import"./Curve-CmeNNcZa.js";import"./CartesianAxis-Ci5CupD_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-ERiIM-pz.js";import"./uniqBy-D9B9Na9v.js";import"./iteratee-C2EwE-pZ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
