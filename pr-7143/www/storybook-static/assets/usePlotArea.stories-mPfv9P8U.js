import{e as t}from"./iframe-jjkKyBnh.js";import{P as a}from"./PlotAreaShower-5quEOdpp.js";import{c as p}from"./hooks-wocA-lGH.js";import{R as s}from"./arrayEqualityCheck-CUp7G6cL.js";import{C as n}from"./ComposedChart-DegKGvWA.js";import{L as l}from"./Line-BsmnuUVe.js";import{X as d}from"./XAxis-Bdq6Jw3w.js";import{Y as h}from"./YAxis-C86w3msg.js";import{L as c}from"./Legend-BmRsAw2I.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CLm1CpLg.js";import"./immer-BbVLmXrm.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-zELNaCXr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./zIndexSlice-CuuIJiqa.js";import"./renderedTicksSlice-B60M8aLp.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./CategoricalChart-C0mCf7ot.js";import"./Layer-Dm-ZljB7.js";import"./ReactUtils-CrwQQyAX.js";import"./Label-BaP8ifBC.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./ZIndexLayer-CNnwO4iC.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./types-BzZyKnH8.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./ErrorBarContext-BqWlziyG.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./ActiveShapeUtils-g0vfssj-.js";import"./isPlainObject-BGF86Xvm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-T-u3oWfl.js";import"./Trapezoid-BeD-5DNQ.js";import"./Sector-Cy9ueYzv.js";import"./Symbols-D7PwakqN.js";import"./symbol-iVbFGN4-.js";import"./step-CFbXCSW0.js";import"./Curve-D2x3KFrb.js";import"./CartesianAxis-CIGCYBrz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qOR8Wsad.js";import"./uniqBy-DdvsGrc1.js";import"./iteratee-PTDtPL5V.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
