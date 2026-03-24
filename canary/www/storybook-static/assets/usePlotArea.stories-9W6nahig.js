import{e as t}from"./iframe-Cq-B9b4f.js";import{P as a}from"./PlotAreaShower-CD-Amm5T.js";import{c as p}from"./hooks-QDD28VjS.js";import{R as s}from"./arrayEqualityCheck-CUWGBawt.js";import{C as n}from"./ComposedChart-CWINzm3a.js";import{L as l}from"./Line-DmJynrg5.js";import{X as d}from"./XAxis-mkVuJ6ru.js";import{Y as h}from"./YAxis-BDd-_fe4.js";import{L as c}from"./Legend-Dzg1YWp2.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BkgXq5jD.js";import"./immer-BjLhSv_k.js";import"./axisSelectors-BgfEPtN4.js";import"./d3-scale-CWQsdIsg.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhciczEd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChVZ2Oxv.js";import"./index-BFFNc0YW.js";import"./zIndexSlice-Di_upqq6.js";import"./renderedTicksSlice-Bgy9EKjI.js";import"./CartesianChart-Dc8WF-dR.js";import"./chartDataContext-0fGuXHUE.js";import"./CategoricalChart-ByiniKNN.js";import"./Layer-D-rMBlaW.js";import"./ReactUtils-DE2SzpPB.js";import"./Label-BzBxAWSn.js";import"./Text-rY40w2fD.js";import"./DOMUtils-06HVeAr7.js";import"./ZIndexLayer-DheZEBBb.js";import"./ActivePoints-d3GWU6BJ.js";import"./Dot-UnlO1r7U.js";import"./types--yHmHFNL.js";import"./RegisterGraphicalItemId-paQBjngI.js";import"./ErrorBarContext-DspuidON.js";import"./GraphicalItemClipPath-CioYfDga.js";import"./SetGraphicalItem-CTMfJU_s.js";import"./useAnimationId-DXcWRCnH.js";import"./getRadiusAndStrokeWidthFromDot-C1Vb4TNN.js";import"./ActiveShapeUtils-BlQ6Z5B2.js";import"./isPlainObject-uQm6Hr4Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6bO7r_4r.js";import"./Trapezoid-B2U15woU.js";import"./Sector-C1hvtgaN.js";import"./Symbols-cf93Ahow.js";import"./symbol-BzYV9rTp.js";import"./step-DUU-NJz1.js";import"./Curve-CYxX35BT.js";import"./CartesianAxis-DaBzYhAa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CQHv_tMB.js";import"./uniqBy-DHLSwk0M.js";import"./iteratee-g41Mu7yT.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
