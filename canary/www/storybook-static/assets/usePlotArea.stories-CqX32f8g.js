import{e as t}from"./iframe-CiMhD8Yi.js";import{P as a}from"./PlotAreaShower-BWgVdI6o.js";import{c as p}from"./hooks-DSwKjRVl.js";import{R as s}from"./arrayEqualityCheck-C4O-CzLw.js";import{C as n}from"./ComposedChart-XZpl6H0W.js";import{L as l}from"./Line-CMYBg4Xl.js";import{X as d}from"./XAxis-D-t29Sci.js";import{Y as h}from"./YAxis-BH2fpgYY.js";import{L as c}from"./Legend-BIi7A0Z0.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-0tNXvVd7.js";import"./immer-BJk0N9d3.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./Layer-C8wFYCI6.js";import"./ReactUtils-DRjJkC3p.js";import"./Label-CI8CQ0nH.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./ZIndexLayer-BkTc8o4k.js";import"./ActivePoints-CO0qgypy.js";import"./Dot-CyRHVoZw.js";import"./types-Dhvr5bGX.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./ErrorBarContext-La6ve25h.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./useAnimationId-BtEj36rQ.js";import"./getRadiusAndStrokeWidthFromDot-CpgyNr8P.js";import"./ActiveShapeUtils-SHiIggQV.js";import"./isPlainObject-B44yGdGL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDjbeOfv.js";import"./Trapezoid-D3spGrIN.js";import"./Sector-CizUgWtz.js";import"./Symbols-BFS1edpX.js";import"./symbol-DXdYs-sB.js";import"./step-CCWyWrm4.js";import"./Curve-HKI06HW2.js";import"./CartesianAxis-CW_epPWP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D2OZi3HS.js";import"./uniqBy-BAtehLqm.js";import"./iteratee-rXVvmz2W.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
