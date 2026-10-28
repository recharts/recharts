import{R as t}from"./iframe-BFdjndOP.js";import{z as a}from"./RechartsWrapper-H7T23RGg.js";import{R as p}from"./zIndexSlice-BMXGqLpb.js";import{C as n}from"./ComposedChart-B2SKrzpV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CNuAHy19.js";import{X as l}from"./XAxis-B63qJ9KH.js";import{Y as h}from"./YAxis-XZTx9iJE.js";import{L as c}from"./Legend-Dtr6sma1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BPye2JbP.js";import"./throttle--h3a_z5m.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BbKZN6cQ.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./Layer-lJQGFAu3.js";import"./Curve-BhC7Tab4.js";import"./types-CW6mEad7.js";import"./step-Ck_VDGQS.js";import"./path-DyVhHtw_.js";import"./LabelList-mpaOdaxP.js";import"./Label-fhEADZhw.js";import"./Text-DOzJQY6l.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./ActivePoints-DpmLDfVx.js";import"./Dot-BeCJ7sWp.js";import"./activeStyles-ClW3aIEp.js";import"./useAnimationId-BieQKvQP.js";import"./dataEntryStyles-DDh9bN_s.js";import"./Symbols-oeWcvHGW.js";import"./symbol-DfxiLrYg.js";import"./ErrorBarContext-ppRLi4g5.js";import"./SetGraphicalItem-B6LFxdSb.js";import"./getRadiusAndStrokeWidthFromDot-BZY9OVSR.js";import"./ActiveShapeUtils-BL-a7-b7.js";import"./useEffectiveDataKey-CN9bTgz2.js";import"./CartesianAxis-Ch7lNcAW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DAJ27Pif.js";import"./uniqBy-CG_-iAXC.js";import"./iteratee-CyrnsQ_T.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
