import{R as t}from"./iframe-DkIbxCKI.js";import{j as a}from"./RechartsWrapper-CqxFYmG2.js";import{R as p}from"./zIndexSlice-CHbZzwgN.js";import{C as n}from"./ComposedChart-AmLF4jNt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CENLuU9r.js";import{X as l}from"./XAxis-BPLEkIZ2.js";import{Y as h}from"./YAxis-CwdPxCpD.js";import{L as c}from"./Legend-DOMeRgMd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BevWDyyN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B_cE3_9l.js";import"./throttle-CWb9XQe7.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./Layer-D7vk6n2M.js";import"./Curve-D-aQyXcF.js";import"./types-CwHWliOY.js";import"./step-DQQJ3aEt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIN2lrWw.js";import"./Label-DXoCOeOg.js";import"./Text-BbOUDRzF.js";import"./DOMUtils-BUKWldcd.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./useAnimationId-DMHPZlQv.js";import"./ActivePoints-CzJuPhh_.js";import"./Dot-D2yhY2N9.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./ErrorBarContext-C70mMVNC.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./getRadiusAndStrokeWidthFromDot-CpjzEu0-.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";import"./CartesianAxis-5Nq6xx1I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-HotSIVb8.js";import"./symbol-IDRMsfhc.js";import"./useElementOffset-Br7ppT_A.js";import"./uniqBy-BUgSc2Cm.js";import"./iteratee-DkJdq8oi.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
