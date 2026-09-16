import{R as t}from"./iframe-BXKiYcQC.js";import{j as a}from"./RechartsWrapper-D0jZXTe7.js";import{R as p}from"./zIndexSlice-BkBU_0wW.js";import{C as n}from"./ComposedChart-CB-KYGEU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DftoaBqr.js";import{X as l}from"./XAxis-BXKhWSVM.js";import{Y as h}from"./YAxis-DRJndkYg.js";import{L as c}from"./Legend-CyJWAGiq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-xB5H15BL.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dg1vgECj.js";import"./throttle-DvwfsdC-.js";import"./index-GSTqcvk8.js";import"./index-D60lzj2N.js";import"./isWellBehavedNumber-B0ZNfpM9.js";import"./d3-scale-CKemSFI4.js";import"./index-CLqidrW7.js";import"./index-DYRjOJPU.js";import"./renderedTicksSlice-BaGELWxj.js";import"./index-BmE7GHu6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CSl2_jhz.js";import"./chartDataContext-CuS1DNow.js";import"./CategoricalChart-BhGptR4V.js";import"./Layer-csMx_Fjy.js";import"./Curve-eKtRh9tf.js";import"./types-DfEjGV4b.js";import"./step-z9dWT9Gq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CWzKwhub.js";import"./Label-BTmQht23.js";import"./Text-DNCWotX8.js";import"./DOMUtils-_UiVQ5Hy.js";import"./useId-C1UlWvnO.js";import"./useBackwardsCompatibleTheme-DRIVYL1M.js";import"./ZIndexLayer-BcmKCBr7.js";import"./useAnimationId-DnJ1WtPs.js";import"./ActivePoints-CJCyHGsQ.js";import"./Dot-BRaUdeFo.js";import"./RegisterGraphicalItemId-BECJYOqX.js";import"./ErrorBarContext-Dq8g53R2.js";import"./GraphicalItemClipPath-CbDQFeTD.js";import"./SetGraphicalItem-DR2Q_8-D.js";import"./getRadiusAndStrokeWidthFromDot-qGxx_52s.js";import"./ActiveShapeUtils-B64LrBnv.js";import"./useGraphicalItemIdentity-Cgc4UBVs.js";import"./CartesianAxis-D0z983kz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNBCA1K-.js";import"./symbol-1KLUnhlz.js";import"./useElementOffset-Cca-IpDS.js";import"./uniqBy-t0cRV3aa.js";import"./iteratee-DvbJjhc1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
