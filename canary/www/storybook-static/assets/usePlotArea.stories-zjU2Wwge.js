import{R as t}from"./iframe-C8yGgO2d.js";import{j as a}from"./RechartsWrapper-DxEsBzKb.js";import{R as p}from"./zIndexSlice-CuRdZ-8K.js";import{C as n}from"./ComposedChart-D2wyoHi-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CY3J4eK2.js";import{X as l}from"./XAxis-DkqGLCT1.js";import{Y as h}from"./YAxis-CkFD-fPK.js";import{L as c}from"./Legend-H21iyFgB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-w7bw2H0b.js";import"./throttle-Dr0khojT.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./Layer-tDZThP1f.js";import"./Curve-B2EBLnIf.js";import"./types-DDTipNBU.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmW46OuC.js";import"./Label-BtCjiiK8.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./useAnimationId-Bie7xBo-.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./useGraphicalItemIdentity-B0pPIliE.js";import"./CartesianAxis-BHyGAXdi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D1NUi6Uu.js";import"./symbol-C1h6pqC-.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
