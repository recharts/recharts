import{e as t}from"./iframe-CbvHz0qJ.js";import{P as a}from"./PlotAreaShower-Bm7LeybJ.js";import{Y as p}from"./hooks-BggtznHY.js";import{g as s}from"./arrayEqualityCheck-CIVk4CxQ.js";import{C as n}from"./ComposedChart-C-53BhDQ.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-BHLS2Na9.js";import{X as h}from"./XAxis-BvInkeR9.js";import{Y as c}from"./YAxis-CUyG3y8q.js";import{L as g}from"./Legend-DO5w7hdM.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Baj3tE5Q.js";import"./immer-C8JaxkgT.js";import"./axisSelectors-CyVqvn-7.js";import"./d3-scale-CaSsgBWf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FfHzzJ36.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5t1ZP3_.js";import"./index-QoqGOv4u.js";import"./zIndexSlice-DOjchSOT.js";import"./renderedTicksSlice-DxWAR4bl.js";import"./CartesianChart-5KTQh7sp.js";import"./chartDataContext-CMNbR_6b.js";import"./CategoricalChart-DaBAgJKk.js";import"./Layer-oNxAKppL.js";import"./ReactUtils-Bd_oEybG.js";import"./Label-DiuN5RYa.js";import"./Text-zXYfGIDc.js";import"./DOMUtils-KYbfHoFv.js";import"./ZIndexLayer-CFivYDgH.js";import"./ActivePoints-n-MNJHjI.js";import"./Dot-7cbWo9Mj.js";import"./types-D2ZhhyQv.js";import"./RegisterGraphicalItemId-DcNWQseR.js";import"./ErrorBarContext-BQunpeTT.js";import"./GraphicalItemClipPath-CH-wZPAw.js";import"./SetGraphicalItem-Dnr1kOuh.js";import"./useAnimationId-cKMJpCeK.js";import"./getRadiusAndStrokeWidthFromDot-FRm3bVco.js";import"./ActiveShapeUtils-B059YRpu.js";import"./isPlainObject-5PdtnTbn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dc_2-qT8.js";import"./Trapezoid-B-N3racq.js";import"./Sector-gYM3CaID.js";import"./Symbols-BTRaNc6y.js";import"./symbol-C7eT5nNM.js";import"./step-BAeK-y3y.js";import"./Curve-DeTt9QyO.js";import"./CartesianAxis-CAdbPfIH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-oVtGe_1V.js";import"./uniqBy-Bt5IS1fo.js";import"./iteratee-DOvvrhL8.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
