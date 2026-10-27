import{R as t}from"./iframe-FAdFbT6J.js";import{z as a}from"./RechartsWrapper-B8CA35TH.js";import{R as p}from"./zIndexSlice-COO8R9lj.js";import{C as n}from"./ComposedChart-ByetWKbs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-jyNZb6sa.js";import{X as l}from"./XAxis-2xPTd-UO.js";import{Y as h}from"./YAxis-T_mO5jU8.js";import{L as c}from"./Legend-vCTZRYiE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DjwIFZga.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./Layer-DDi6JECL.js";import"./Curve-DQIDgvYs.js";import"./types-BX8ZQcvG.js";import"./step-DTM-27zI.js";import"./path-DyVhHtw_.js";import"./LabelList-BYdzk1TZ.js";import"./Label-MEQSQEMP.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./dataEntryStyles-CEjpbRUj.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./activeStyles-D7U9MU9g.js";import"./useAnimationId-CiJHzCVR.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./CartesianAxis-_1uLVGpU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CTPpQQlY.js";import"./uniqBy-CNFPVLtL.js";import"./iteratee-DmPtyNGM.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
