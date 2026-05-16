import{e as t}from"./iframe-DWlBD4sR.js";import{P as a}from"./PlotAreaShower-9P4lyNiw.js";import{Y as p}from"./hooks-OMlNr05X.js";import{g as s}from"./arrayEqualityCheck-CNEGbaey.js";import{C as n}from"./ComposedChart-BAyx4O2z.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line--2TgE6AZ.js";import{X as h}from"./XAxis-DqK7mhYD.js";import{Y as c}from"./YAxis-DjNbHZXF.js";import{L as g}from"./Legend-BKRXt4LC.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./immer-DA_Y9NxP.js";import"./axisSelectors-CpE3e6Wf.js";import"./d3-scale-M7VTsA4f.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./zIndexSlice-D96LA4yw.js";import"./renderedTicksSlice-ClpTcocu.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./Layer-CBKkaEhK.js";import"./ReactUtils-Bv-62o8T.js";import"./Label-B7fwnDQB.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./ZIndexLayer-CcFVuy64.js";import"./ActivePoints-BpXK1Sh9.js";import"./Dot-BNSrz3O7.js";import"./types-DufW0EQG.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./useAnimationId-DeTKnBQG.js";import"./getRadiusAndStrokeWidthFromDot-Df7nX_Vd.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-q1bxg6yb.js";import"./Trapezoid-DYkluK8E.js";import"./Sector-DrZ87OSF.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./Curve-DtQybK0o.js";import"./CartesianAxis-Mlw-1mLJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DxOkvigD.js";import"./uniqBy-ClnHDv_J.js";import"./iteratee-cMSv06Nq.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
