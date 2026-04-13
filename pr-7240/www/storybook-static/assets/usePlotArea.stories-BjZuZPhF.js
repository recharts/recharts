import{e as t}from"./iframe-BeDGORj6.js";import{P as a}from"./PlotAreaShower-k5ztxQce.js";import{c as p}from"./hooks-CZlzwV4c.js";import{R as s}from"./arrayEqualityCheck-JsAXyDLr.js";import{C as n}from"./ComposedChart-4gGlBLIt.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CuUIamf-.js";import{X as h}from"./XAxis-BWIHbalc.js";import{Y as c}from"./YAxis-DVelxUgb.js";import{L as g}from"./Legend-DOiE3cGX.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-W3vYP0Xa.js";import"./immer-Cq48D3GD.js";import"./axisSelectors-BWLPVm14.js";import"./d3-scale-Dn9C_p1J.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C99f34Mc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzXrp2Yg.js";import"./index-Cjcxel70.js";import"./zIndexSlice-f8r1nxA3.js";import"./renderedTicksSlice-sW53jx3E.js";import"./CartesianChart-B5AKLLNj.js";import"./chartDataContext-kI4vfNyg.js";import"./CategoricalChart-BaIwFCUZ.js";import"./Layer-Cb63g7eE.js";import"./ReactUtils-8jcv2sZp.js";import"./Label-DIDBGhSu.js";import"./Text-DVPNdnrr.js";import"./DOMUtils-BJyHcXDT.js";import"./ZIndexLayer-CzXr4GKG.js";import"./ActivePoints-BtnyqgRD.js";import"./Dot-C6wgbxew.js";import"./types-C_8vdBSO.js";import"./RegisterGraphicalItemId-Be6P2E9J.js";import"./ErrorBarContext-BP-aXdJD.js";import"./GraphicalItemClipPath-DuAL_izP.js";import"./SetGraphicalItem-CByUuzu8.js";import"./useAnimationId-Dpd_sVLz.js";import"./getRadiusAndStrokeWidthFromDot-C4aPZysO.js";import"./ActiveShapeUtils-CKh9-uWL.js";import"./isPlainObject-CPwWoDLp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmD5nffX.js";import"./Trapezoid-C6mcZG1p.js";import"./Sector-CvLn_4ix.js";import"./Symbols-BtXiAqa0.js";import"./symbol-Dz8LJwUL.js";import"./step-CdMW3WL_.js";import"./Curve-Cn7Yw6fj.js";import"./CartesianAxis-Cg9ZZyb5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C39f-q29.js";import"./uniqBy-Bxm9P5yL.js";import"./iteratee-BiMAN34M.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
