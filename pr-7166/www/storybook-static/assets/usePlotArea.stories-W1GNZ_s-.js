import{e as t}from"./iframe-BA0Mk_bm.js";import{P as a}from"./PlotAreaShower-noNIcByU.js";import{c as p}from"./hooks-TaUW4PzE.js";import{R as s}from"./arrayEqualityCheck-BXIKBtlL.js";import{C as n}from"./ComposedChart-DMgKK5eu.js";import{L as l}from"./Line-339lVEiU.js";import{X as d}from"./XAxis-BJCrLdXA.js";import{Y as h}from"./YAxis-BeQUgSYX.js";import{L as c}from"./Legend-B135trhz.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-XLtPrUd2.js";import"./immer-CuXxKPwW.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B36LrC6B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./zIndexSlice-IJtIz665.js";import"./renderedTicksSlice-k5mZM9in.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./Layer-UodA2S_o.js";import"./ReactUtils-DsC8Xpl6.js";import"./Label-BRfB6AgB.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./ZIndexLayer-7XpdSr6g.js";import"./ActivePoints-Dhry5tye.js";import"./Dot-D5MxPf2e.js";import"./types-bktBoSaY.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./ErrorBarContext-qCzTcwLw.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./useAnimationId-Del0ERlM.js";import"./getRadiusAndStrokeWidthFromDot-byqxM05I.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./step-BTgjudL3.js";import"./Curve-DYn67gsG.js";import"./CartesianAxis-BT4UVk71.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BK5XlP36.js";import"./uniqBy-Dh57tVx5.js";import"./iteratee-BxNTpPTk.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
