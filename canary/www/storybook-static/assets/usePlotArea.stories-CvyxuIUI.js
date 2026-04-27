import{e as t}from"./iframe-DPQQART2.js";import{P as a}from"./PlotAreaShower-DM7QkzGT.js";import{c as p}from"./hooks-DXcftTpV.js";import{R as s}from"./arrayEqualityCheck-BDVhVf-C.js";import{C as n}from"./ComposedChart-n9wi2Vp2.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DOKzQF_j.js";import{X as h}from"./XAxis-Dg1K6_fH.js";import{Y as c}from"./YAxis-BOA_nsSD.js";import{L as g}from"./Legend-BHwh_5Cc.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./immer-dq55Rz5k.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./zIndexSlice-BUoZyNAT.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./CategoricalChart-7Dzr-wy0.js";import"./Layer-BYcIhrnl.js";import"./ReactUtils-D4DJGTqa.js";import"./Label-C8kv474W.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./ActivePoints-CNiBL0AU.js";import"./Dot-CndRCnyF.js";import"./types-DnHa4Bsr.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./useAnimationId-DxUodg7H.js";import"./getRadiusAndStrokeWidthFromDot-CI-CHUDp.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./Curve-D9PoEc7H.js";import"./CartesianAxis-CKdFXiLA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DIzHmNft.js";import"./uniqBy-UOcraiRG.js";import"./iteratee-CLdQ3gon.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
