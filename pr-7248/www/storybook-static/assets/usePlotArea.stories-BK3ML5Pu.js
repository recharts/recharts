import{e as t}from"./iframe-CLmjlzb1.js";import{P as a}from"./PlotAreaShower-BflxX8Fl.js";import{c as p}from"./hooks-d-SQKimb.js";import{R as s}from"./arrayEqualityCheck-B4wm4mzq.js";import{C as n}from"./ComposedChart-NZAgTk7u.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DGTUW3Zm.js";import{X as h}from"./XAxis-BfN6o_IU.js";import{Y as c}from"./YAxis-Cnd-b2Jz.js";import{L as g}from"./Legend--HseJw3x.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./immer-BRhk69FB.js";import"./axisSelectors-BSjiqA5G.js";import"./d3-scale-Cfbd6Yba.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./zIndexSlice-ENrbLBpP.js";import"./renderedTicksSlice-7exySQiY.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./Layer-B8Y-IGwU.js";import"./ReactUtils-D_M8UzUW.js";import"./Label-5j72dgYu.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./ZIndexLayer-B_c6eilm.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./types-CPZMLz1x.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./ErrorBarContext-CwN8tpsm.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./useAnimationId-DS-J4iW4.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./ActiveShapeUtils-D95D5Icg.js";import"./isPlainObject-VurimMcN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CG_TffJC.js";import"./Trapezoid-Cu-zNPNg.js";import"./Sector-kWP0DhnI.js";import"./Symbols-CXcyzyAh.js";import"./symbol-CD9uivpb.js";import"./step-B08msyNS.js";import"./Curve-C2JnH5yk.js";import"./CartesianAxis-4_WgxG81.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DdZfO3gs.js";import"./uniqBy-C8pbwaZO.js";import"./iteratee-MARHZxta.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
