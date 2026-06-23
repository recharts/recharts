import{R as t}from"./iframe-bG7_G66g.js";import{u as a}from"./CategoricalChart-BHq-0gkK.js";import{R as p}from"./zIndexSlice-BYtx9lI3.js";import{C as s}from"./ComposedChart-CgJhKHi6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B5aT7L1s.js";import{X as l}from"./XAxis-BJQkDMRF.js";import{Y as h}from"./YAxis-C7HJKNEA.js";import{L as c}from"./Legend-Dyu2OvIi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./immer-DhTjJvAV.js";import"./get-CKlYZxfa.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./Layer-ky2aT-iX.js";import"./Curve-D0BbINzH.js";import"./types-DAUYWUcJ.js";import"./step-B_0-Bz-G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0ftWhjM.js";import"./Label-B0PcRW41.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./ZIndexLayer-BRupmzoF.js";import"./useAnimationId-NfEwsoHb.js";import"./ActivePoints-CoLkUcGQ.js";import"./Dot-CaSI3883.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getRadiusAndStrokeWidthFromDot-Bb0n7Rxm.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DT3xUkSo.js";import"./symbol-BHGaTRDx.js";import"./useElementOffset-Cm17sbSB.js";import"./uniqBy-BKybyHng.js";import"./iteratee-C9qT0ecR.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
