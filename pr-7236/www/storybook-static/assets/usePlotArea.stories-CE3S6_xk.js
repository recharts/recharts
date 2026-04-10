import{e as t}from"./iframe-JWSOvVZL.js";import{P as a}from"./PlotAreaShower-CT6U6KfM.js";import{c as p}from"./hooks-D_fkqjif.js";import{R as s}from"./arrayEqualityCheck-DJxJsIgg.js";import{C as n}from"./ComposedChart-C3wId2he.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CuyuQhyf.js";import{X as h}from"./XAxis-CiEGa-2H.js";import{Y as c}from"./YAxis-DRMcQ1t7.js";import{L as g}from"./Legend-DW6HVUWo.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B0YZDNOc.js";import"./immer-Cx8sbOuB.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Db3kyesD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./zIndexSlice-xDRQRS04.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./Layer-CVGwLCGQ.js";import"./ReactUtils-qs-97Ac8.js";import"./Label-Cxg_vq25.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./ActivePoints-XzqbnO-t.js";import"./Dot-DDYCZ56V.js";import"./types-B3dpB15X.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./ErrorBarContext-Cka3vvlo.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./useAnimationId-BDQqVS92.js";import"./getRadiusAndStrokeWidthFromDot-CGUx355X.js";import"./ActiveShapeUtils-DUqlRNnh.js";import"./isPlainObject-DAbDjRrv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dy9rRH3J.js";import"./Trapezoid-Np68xL8c.js";import"./Sector-DgiCwcle.js";import"./Symbols-CJQeMuDE.js";import"./symbol-CzcstGin.js";import"./step-NHTakNU6.js";import"./Curve-BSIyWE0E.js";import"./CartesianAxis-BBAUsbPY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CvtiAL57.js";import"./uniqBy-BLTAZ1cN.js";import"./iteratee-DMhTgxAn.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
