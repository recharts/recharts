import{R as t}from"./iframe-CBWhl09v.js";import{j as a}from"./RechartsWrapper-BU6mzVyD.js";import{R as p}from"./zIndexSlice-B1AH5YJS.js";import{C as n}from"./ComposedChart-DXJToHny.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B0sSvzHP.js";import{X as l}from"./XAxis-tzQHqynD.js";import{Y as h}from"./YAxis-C5dVmWPc.js";import{L as c}from"./Legend-Bu7egPOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6qdSbwV.js";import"./throttle-bJqzO9Ic.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./Layer-DxeVA2bX.js";import"./Curve-B56TGwB_.js";import"./types-Dq74-fjW.js";import"./step-CZA2KIrz.js";import"./path-DyVhHtw_.js";import"./activeStyles-BZ5qRbpV.js";import"./Label-CJ9xjWYO.js";import"./Text-fMbisw4f.js";import"./pageBackground-zeq0PAuW.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./ZIndexLayer-DmDmq8bi.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./ActivePoints-mIk3yLeC.js";import"./Dot-BHORkSEl.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getRadiusAndStrokeWidthFromDot-B1PyR7dw.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";import"./CartesianAxis-BGPUbFHg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D_FNYO7a.js";import"./symbol-Cjy5R5AQ.js";import"./useElementOffset-BeDLriUL.js";import"./uniqBy-BSAN_SQR.js";import"./iteratee-kSqFHTFy.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
