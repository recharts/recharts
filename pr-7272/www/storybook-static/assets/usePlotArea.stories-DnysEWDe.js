import{e as t}from"./iframe-C1fnHnKT.js";import{P as a}from"./PlotAreaShower-P9zfdMTd.js";import{c as p}from"./hooks-D4TdCpxu.js";import{R as s}from"./arrayEqualityCheck-l6uT4Usv.js";import{C as n}from"./ComposedChart-DzEnoNHN.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CMzeYv-o.js";import{X as h}from"./XAxis-CQ2fda0r.js";import{Y as c}from"./YAxis-BUT98NPf.js";import{L as g}from"./Legend-G_ecBUX0.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./immer-hlXcvFio.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0awOkESO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./zIndexSlice-BoAv0LH1.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./Layer-BIYNx1xN.js";import"./ReactUtils-Dm1SJpk1.js";import"./Label-8_9z-Hx3.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./ZIndexLayer-UU7tiK14.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./types-C6vI6gcr.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./ErrorBarContext-BJ-bLhxe.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./useAnimationId-mn0ugSXH.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./ActiveShapeUtils-CJoqVDNw.js";import"./isPlainObject-BdficFEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKvxhVC9.js";import"./Trapezoid-DbflFOBZ.js";import"./Sector-BUT460qv.js";import"./Symbols-Bo3RkkJn.js";import"./symbol-D-2KK1gt.js";import"./step-BfW9Id0A.js";import"./Curve-CnB-6T_0.js";import"./CartesianAxis-CluKEQWr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B0dtN-Cu.js";import"./uniqBy-Dz2GWYge.js";import"./iteratee-DsiheMqS.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
