import{e as t}from"./iframe-C2tGGjcA.js";import{P as a}from"./PlotAreaShower-p59PN-FQ.js";import{c as p}from"./hooks-BZM1IfiG.js";import{R as s}from"./arrayEqualityCheck-BU-juwUe.js";import{C as n}from"./ComposedChart-DayldmqV.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DJLQaP34.js";import{X as h}from"./XAxis-B3stUdiP.js";import{Y as c}from"./YAxis-BWTDEGMA.js";import{L as g}from"./Legend-Bo-lNc-J.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DbZPdrpK.js";import"./immer-_oM2zjxd.js";import"./axisSelectors-hCgVeVzv.js";import"./d3-scale-BwpTFf5Z.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8hWxOXb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3vVxtfU.js";import"./index-D-_8hcei.js";import"./zIndexSlice-C7QkOMmM.js";import"./renderedTicksSlice-DflWSLZG.js";import"./CartesianChart-JwGyw0GC.js";import"./chartDataContext-Mxcb3X27.js";import"./CategoricalChart-CloeZ4Py.js";import"./Layer-DkBbKCaQ.js";import"./ReactUtils-DgRasAzu.js";import"./Label-CR6_Nrr4.js";import"./Text-Bh-qeukp.js";import"./DOMUtils-CeJzVK9F.js";import"./ZIndexLayer-CwH7lvHt.js";import"./ActivePoints-BmxyddQB.js";import"./Dot-DIQAy5B9.js";import"./types-BqNjVw0B.js";import"./RegisterGraphicalItemId-CvlZwjiz.js";import"./ErrorBarContext-VVzEJg2g.js";import"./GraphicalItemClipPath-DE_aTN3O.js";import"./SetGraphicalItem-DZyDJnZv.js";import"./useAnimationId-BPqjt2CS.js";import"./getRadiusAndStrokeWidthFromDot-C3Gfg5xu.js";import"./ActiveShapeUtils-EmfZ6gwX.js";import"./isPlainObject-BG4W1lTc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jZnK6OPy.js";import"./Trapezoid-Cl-OWzTg.js";import"./Sector-IdhW6Sh6.js";import"./Symbols-BW2J6Sn7.js";import"./symbol-CsNNy4jV.js";import"./step-CB6j9muh.js";import"./Curve-3ofIPf5W.js";import"./CartesianAxis-C6X8qFWR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B3k4jRRT.js";import"./uniqBy-Ct-WozvE.js";import"./iteratee-CXSu4ZJt.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
