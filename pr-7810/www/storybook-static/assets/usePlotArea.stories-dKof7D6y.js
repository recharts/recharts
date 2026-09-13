import{R as t}from"./iframe-Ds6TFLkC.js";import{j as a}from"./RechartsWrapper-CJwlXMvA.js";import{R as p}from"./zIndexSlice-BKrqz3Xt.js";import{C as n}from"./ComposedChart-BETzNKL8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZDTbY-k.js";import{X as l}from"./XAxis-DBKmF-Ih.js";import{Y as h}from"./YAxis-CXDThil-.js";import{L as c}from"./Legend-BVnU9Ijg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CNkxeY96.js";import"./throttle-5Eq1kaaq.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./isWellBehavedNumber-LBH0mcE-.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./index-BuCwMnJX.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./Layer-DsMiZb8_.js";import"./Curve-dfqdvFF3.js";import"./types-DqUBeAy_.js";import"./step-DGJiOV5Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bite-60b.js";import"./Label-2c4G7wLB.js";import"./Text-CQENvntP.js";import"./DOMUtils-CAtVF91U.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./ZIndexLayer-BVTJP5jP.js";import"./useAnimationId-wJ9zl-lu.js";import"./ActivePoints-BxShO8-B.js";import"./Dot-BCPXm70l.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getRadiusAndStrokeWidthFromDot-C9T1jis-.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./useGraphicalItemIdentity-onk1vmff.js";import"./CartesianAxis-CuptNImc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VKhkKzLe.js";import"./symbol-jtj50zes.js";import"./useElementOffset-BoqsUzu9.js";import"./uniqBy-BeoGAbMd.js";import"./iteratee-B_8zsxBW.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
