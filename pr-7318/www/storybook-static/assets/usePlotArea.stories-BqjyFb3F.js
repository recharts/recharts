import{e as t}from"./iframe-CBxZ3YEm.js";import{P as a}from"./PlotAreaShower-Bk6tssdT.js";import{c as p}from"./hooks-DYoyM5tD.js";import{R as s}from"./arrayEqualityCheck-Blj5Aeqs.js";import{C as n}from"./ComposedChart-CTVnh_SC.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CYF4OlQp.js";import{X as h}from"./XAxis-C1aLPlbC.js";import{Y as c}from"./YAxis-myA84OCs.js";import{L as g}from"./Legend-Ce1K5krY.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-D6Chm1KW.js";import"./immer-CcXWnMnm.js";import"./axisSelectors-CzPcR0bZ.js";import"./d3-scale-BQHKXGzh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BEDeUj8t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gLcbW_Rw.js";import"./index-HycHHMGp.js";import"./zIndexSlice-De9OMF5H.js";import"./renderedTicksSlice-f_j9Tm_g.js";import"./CartesianChart-BE_qH18M.js";import"./chartDataContext-DvlevAqI.js";import"./CategoricalChart-Bg-fk5CT.js";import"./Layer-8oMMti5m.js";import"./ReactUtils-c7YX91Ex.js";import"./Label-C9wjKN1h.js";import"./Text-7hG94G_y.js";import"./DOMUtils-v8LS_cLE.js";import"./ZIndexLayer-B7fniKOv.js";import"./ActivePoints-Cg_WMXc2.js";import"./Dot-xzbDIn8F.js";import"./types-CzApK6LP.js";import"./RegisterGraphicalItemId-lPm6fXRN.js";import"./ErrorBarContext-C-jVrcMZ.js";import"./GraphicalItemClipPath-DGUbYWDL.js";import"./SetGraphicalItem-8ezKiNwU.js";import"./useAnimationId-Dgk97qlj.js";import"./getRadiusAndStrokeWidthFromDot-DelOuwrQ.js";import"./ActiveShapeUtils-D6xdRanx.js";import"./isPlainObject-SwII21m1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWauEswa.js";import"./Trapezoid-BfLDWvDz.js";import"./Sector-E_Gangzj.js";import"./Symbols-CfjjfEBZ.js";import"./symbol-CgH1RbEA.js";import"./step-i7QSy-8Q.js";import"./Curve-CyXQFnOW.js";import"./CartesianAxis-DW4xU2v8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B8QE7ut7.js";import"./uniqBy-m8l7wXKu.js";import"./iteratee-DO27y1ZT.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
