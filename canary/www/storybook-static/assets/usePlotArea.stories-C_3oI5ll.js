import{e as t}from"./iframe-u6iaaRfQ.js";import{P as a}from"./PlotAreaShower-FynNvHOc.js";import{c as p}from"./hooks-Dssc-Fg7.js";import{R as s}from"./arrayEqualityCheck-CLYylJu6.js";import{C as n}from"./ComposedChart-CnJe6xFk.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BT8py2Um.js";import{X as h}from"./XAxis-CafeDi3k.js";import{Y as c}from"./YAxis-DOArs6LY.js";import{L as g}from"./Legend-CQkR-ZeO.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CsL5LAMT.js";import"./immer-2VVJTBUN.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./zIndexSlice-DWVvwkZr.js";import"./renderedTicksSlice-B-DvccZo.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./Layer-CT2CAOks.js";import"./ReactUtils-BAv5fhiw.js";import"./Label-DK4_THpm.js";import"./Text-CgS9yB44.js";import"./DOMUtils-Nlbt7DfZ.js";import"./ZIndexLayer-D67zVttg.js";import"./ActivePoints-BaaXz2oX.js";import"./Dot-CTvFv7nE.js";import"./types-BdeQdTqa.js";import"./RegisterGraphicalItemId-C8o_81FM.js";import"./ErrorBarContext-qXy6_5PW.js";import"./GraphicalItemClipPath-PPuT3qYL.js";import"./SetGraphicalItem-CnqUUVpy.js";import"./useAnimationId-BD3P1pqn.js";import"./getRadiusAndStrokeWidthFromDot-PqQ1H61_.js";import"./ActiveShapeUtils-DdZUdvs2.js";import"./isPlainObject-B8BtVZgq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqG21RYU.js";import"./Trapezoid-CNfti2nG.js";import"./Sector-Cd7r1-lt.js";import"./Symbols-Bxoc8kEL.js";import"./symbol-BgXEUeDH.js";import"./step-0mVlQoKY.js";import"./Curve-5QbieyFV.js";import"./CartesianAxis-D9B34M5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DUmZLxwu.js";import"./uniqBy-CfdH-2E7.js";import"./iteratee-Dv-ztwy4.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
