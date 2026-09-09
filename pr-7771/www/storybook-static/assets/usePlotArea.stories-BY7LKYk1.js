import{R as t}from"./iframe-Dn8vQZEp.js";import{j as a}from"./RechartsWrapper-Bhkt7zRT.js";import{R as p}from"./zIndexSlice-XUx2oJl_.js";import{C as n}from"./ComposedChart-BCd3a0vp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-mZ5HbPHC.js";import{X as l}from"./XAxis-CB79oGK-.js";import{Y as h}from"./YAxis-BNLIqhTJ.js";import{L as c}from"./Legend-D_MpiCUq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jBHMfbnT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DcgT4KNV.js";import"./throttle-fPZ-AFkd.js";import"./index-CuDTIlBD.js";import"./index-BhPh_0Mo.js";import"./isWellBehavedNumber-Drx6zYdA.js";import"./d3-scale-CzizY4ry.js";import"./index-CjS_XyhA.js";import"./index-Drl0y4WP.js";import"./renderedTicksSlice-eRTKLRMo.js";import"./index-Bmxz4y8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9QNJ1CX.js";import"./chartDataContext-mZgxnkA9.js";import"./CategoricalChart-DAypclSw.js";import"./Layer-BJv5m_kT.js";import"./Curve-WjJYEJJ2.js";import"./types-BtKkYRP2.js";import"./step-DZtB5o_b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnMcWdWM.js";import"./Label-Bvs0nTDG.js";import"./Text-D0E0CgcA.js";import"./DOMUtils-T9kk7XzM.js";import"./useId-ClKCYS2F.js";import"./useBackwardsCompatibleTheme-DuANBb0k.js";import"./ZIndexLayer-8Cv1ome6.js";import"./useAnimationId-DNL11RNx.js";import"./ActivePoints-CJcQvon7.js";import"./Dot-CNAi9nFI.js";import"./RegisterGraphicalItemId-BEcpOk8N.js";import"./ErrorBarContext-1UXxdVKa.js";import"./GraphicalItemClipPath-DwUubEvw.js";import"./SetGraphicalItem-wP6-k6q-.js";import"./getRadiusAndStrokeWidthFromDot-CS00mpN0.js";import"./ActiveShapeUtils-Czlcjg-Z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BNezq43E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZGkt8QS.js";import"./symbol-3I5gn6bV.js";import"./useElementOffset-Bal9XmbO.js";import"./uniqBy-QuaGjxN1.js";import"./iteratee-DpeX9yxF.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
