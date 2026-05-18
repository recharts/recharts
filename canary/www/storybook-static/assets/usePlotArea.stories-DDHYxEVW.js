import{e as t}from"./iframe-BmdG6Yuj.js";import{P as a}from"./PlotAreaShower-CawkEE7f.js";import{Y as p}from"./hooks-DLMhcoxZ.js";import{g as s}from"./arrayEqualityCheck-Cs0ODbAq.js";import{C as n}from"./ComposedChart-CzsBStAV.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-BXq3-19U.js";import{X as h}from"./XAxis-yj9kgQkK.js";import{Y as c}from"./YAxis-BmW1MgwT.js";import{L as g}from"./Legend-CpBE1ZRT.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./immer-r1hs1aui.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CzKMDris.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./Layer-CTqkrp1s.js";import"./ReactUtils-BDG3-ZiE.js";import"./Label-BahHfmoK.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./ZIndexLayer-BALln1nu.js";import"./ActivePoints-3tH4QPDb.js";import"./Dot-C-X-bkP7.js";import"./types-HBeXaxhb.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./ErrorBarContext-DmBcQTJi.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./useAnimationId-DYvcKDoo.js";import"./getRadiusAndStrokeWidthFromDot-DMLzSi-R.js";import"./ActiveShapeUtils-DLVI0LAd.js";import"./isPlainObject-B7mW1TAl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr2ikaiy.js";import"./Trapezoid-BUVaAWPm.js";import"./Sector-CrLZSk6O.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";import"./step-B9kksXJi.js";import"./Curve-o1yfXHk1.js";import"./CartesianAxis-DQoe1nv2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DqYBnuYB.js";import"./uniqBy-cB4yLFVg.js";import"./iteratee-Cn99cyAf.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
