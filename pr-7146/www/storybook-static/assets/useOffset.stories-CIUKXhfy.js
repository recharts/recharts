import{e as t}from"./iframe-Dq5DdRfA.js";import{O as p}from"./OffsetShower-6LrCHYpG.js";import{d as a}from"./hooks-BxbNPqIZ.js";import{R as s}from"./arrayEqualityCheck-qGR3MUeV.js";import{C as n}from"./ComposedChart-QdhTFZSq.js";import{L as f}from"./Line-CSsDn3Jn.js";import{X as h}from"./XAxis-CZx-cxt6.js";import{Y as d}from"./YAxis-BfiaHiWI.js";import{L as g}from"./Legend-WPQY1pFr.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CU3eWKS2.js";import"./immer-BgAF4C3H.js";import"./axisSelectors-BFeCG5Ru.js";import"./d3-scale-DI2YC43N.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHlsVcqU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vGlNcTAG.js";import"./index-KC-eWLnl.js";import"./zIndexSlice-DPv0Xhij.js";import"./renderedTicksSlice-DP9i4nv6.js";import"./CartesianChart-BaePTbzD.js";import"./chartDataContext-CXein_ih.js";import"./CategoricalChart-BcQURnMq.js";import"./Layer-xEbSwsN4.js";import"./ReactUtils-Cob9khRk.js";import"./Label-RkqWKdyr.js";import"./Text-CZ8K0x5S.js";import"./DOMUtils-C3M38rM5.js";import"./ZIndexLayer-CmxjkRKY.js";import"./ActivePoints-CNP7zn1d.js";import"./Dot-DzScFwGr.js";import"./types-D0iVcQvS.js";import"./RegisterGraphicalItemId-DlkbZouM.js";import"./ErrorBarContext-Bj_DbTGw.js";import"./GraphicalItemClipPath-BA8J5QwR.js";import"./SetGraphicalItem-nN4OlGtN.js";import"./useAnimationId-D_Jb4Dtq.js";import"./getRadiusAndStrokeWidthFromDot-B8rTEkIw.js";import"./ActiveShapeUtils-BEqpyM3Z.js";import"./isPlainObject-C_fJeprc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwxhPvUN.js";import"./Trapezoid-CVP_TvCO.js";import"./Sector-D0MGcgsD.js";import"./Symbols-4l3uCecX.js";import"./symbol-DApxb55n.js";import"./step-Cni1WXw7.js";import"./Curve-tqjOY4Pq.js";import"./CartesianAxis-D7oRmpa0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-EIWIV3Vm.js";import"./uniqBy-cRfk3nMJ.js";import"./iteratee-BBm-pYg1.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:c,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(d,null),t.createElement(g,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ot=["UseOffset"];export{r as UseOffset,Ot as __namedExportsOrder,ut as default};
