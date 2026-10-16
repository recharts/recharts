import{R as t}from"./iframe-Dw3JnrOz.js";import{e as a}from"./RechartsWrapper-DgRfQaZT.js";import{R as p}from"./zIndexSlice-DzgPoe88.js";import{C as n}from"./ComposedChart-Dn-ywIPu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DnOr9vmN.js";import{X as l}from"./XAxis-CeCu2pnu.js";import{Y as h}from"./YAxis-D8Dw7kMb.js";import{L as c}from"./Legend-Bjj8c6w_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DK31nY-V.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BViTer26.js";import"./throttle-KuOt2oEs.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./d3-scale-DtTNlvys.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-6yBVDhmv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./Layer-L7RVOPKy.js";import"./Curve-CzvKCniC.js";import"./types-B5MEMPd3.js";import"./step-D848BMKt.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2NfbCgD.js";import"./Label-Cbir5i7I.js";import"./Text-DV8khfZM.js";import"./pageBackground-tLsrP4n_.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./ZIndexLayer-BbE4uISJ.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./ActivePoints-BwSbWjwk.js";import"./Dot-BIHGbHYm.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getRadiusAndStrokeWidthFromDot-5uL5_6G5.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./useEffectiveDataKey-CnfRoJ-A.js";import"./CartesianAxis-ChIBsRH5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNc52s_J.js";import"./symbol-Ckk61NXy.js";import"./useElementOffset-CR-G88er.js";import"./uniqBy-rRKFTRx_.js";import"./iteratee-BZWaCfv1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
