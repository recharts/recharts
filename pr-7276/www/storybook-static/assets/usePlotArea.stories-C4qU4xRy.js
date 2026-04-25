import{e as t}from"./iframe-C-KAowuO.js";import{P as a}from"./PlotAreaShower-ZPJ89wbY.js";import{c as p}from"./hooks-DeKQ2gqZ.js";import{R as s}from"./arrayEqualityCheck-yVLbm2Ok.js";import{C as n}from"./ComposedChart-Dd-r8GjN.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-G6dNKB2b.js";import{X as h}from"./XAxis-BdDoMKhj.js";import{Y as c}from"./YAxis-WXeKSUTD.js";import{L as g}from"./Legend-T14zhhqr.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DTvYXLHc.js";import"./immer-lrri1Ibi.js";import"./axisSelectors-CE5Vd0Tc.js";import"./d3-scale-Bopu8Aci.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D05KRY5H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqKSuNH3.js";import"./index-KvyLAFD0.js";import"./zIndexSlice-DrTp_sFl.js";import"./renderedTicksSlice-C1ShKB3N.js";import"./CartesianChart-nT9KcNTp.js";import"./chartDataContext-vxdgRKIh.js";import"./CategoricalChart-Ds0xAivg.js";import"./Layer-BbNCaHIe.js";import"./ReactUtils-CCkd_fXV.js";import"./Label-D0CeoZx_.js";import"./Text-Bcc2ZqXe.js";import"./DOMUtils-Cs_o0Y2m.js";import"./ZIndexLayer-D6XED_N0.js";import"./ActivePoints-DwGdY9lY.js";import"./Dot-B1iig8sS.js";import"./types-B6CmVkmP.js";import"./RegisterGraphicalItemId-D73RknhP.js";import"./ErrorBarContext-DL4EJt22.js";import"./GraphicalItemClipPath-d-0sskKm.js";import"./SetGraphicalItem-DNbpLx8W.js";import"./useAnimationId-TM9zYSCO.js";import"./getRadiusAndStrokeWidthFromDot-D7K-VjZE.js";import"./ActiveShapeUtils-Do01q8yT.js";import"./isPlainObject-QngjBi63.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR805uQ0.js";import"./Trapezoid-Db73yEci.js";import"./Sector-WUHOr-1w.js";import"./Symbols-DUxwWGdL.js";import"./symbol-DJcsyqFg.js";import"./step-BtXew3Rl.js";import"./Curve-HzHLtdOZ.js";import"./CartesianAxis-BZ3398ZK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BnobsK-J.js";import"./uniqBy-CqIaJHYT.js";import"./iteratee-CaXP3rRs.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
