import{R as t}from"./iframe-6K1b1-eT.js";import{z as a}from"./RechartsWrapper-DqVTXzd2.js";import{R as p}from"./zIndexSlice-B780JRIC.js";import{C as n}from"./ComposedChart-B8GwPjuZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CKyMQ0XF.js";import{X as l}from"./XAxis-ClhB_79n.js";import{Y as h}from"./YAxis-_GZI3dYv.js";import{L as c}from"./Legend-CVqC3TW7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C-rSKBiJ.js";import"./throttle-CBl9h_oH.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./polarAxisSelectors-DAIX196M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-vHo5DJBH.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./Layer-CJqJ-HtM.js";import"./Curve-BTrtI1QS.js";import"./types-O5YDoWOS.js";import"./step-nJPm-9z_.js";import"./path-DyVhHtw_.js";import"./LabelList-Da0m2dvB.js";import"./Label-BWjzWDJx.js";import"./Text-CdUlZS4M.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./ActivePoints-DfBmAS04.js";import"./Dot-mjfNbHvX.js";import"./activeStyles-C1gmhpCf.js";import"./useAnimationId-DP-ttVRU.js";import"./dataEntryStyles-DGPpD66W.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./ErrorBarContext-BrR5ewV-.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getRadiusAndStrokeWidthFromDot-9YrPK3Nw.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./CartesianAxis-D2Tqoy9W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-c1RTDdmp.js";import"./uniqBy-OJKX_qkV.js";import"./iteratee-ItMtgKsp.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
