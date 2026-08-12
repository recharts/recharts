import{R as t}from"./iframe-BIMbD8mx.js";import{u as a}from"./CategoricalChart-rgEOMHEL.js";import{R as p}from"./zIndexSlice-wO_dW_9z.js";import{C as s}from"./ComposedChart-BBbivD2D.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C4NM27Mj.js";import{X as l}from"./XAxis-79yd8ZPy.js";import{Y as h}from"./YAxis-yZR3Ev9U.js";import{L as c}from"./Legend-coXETLK_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./throttle-DiXkeT8N.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BtNyQa3m.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./Layer-1Cdcr0Iy.js";import"./Curve-BJXCkxMN.js";import"./types-Dp-Ax4LT.js";import"./step-O2UOarbe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QaKLnfOP.js";import"./Label-DfQOptl9.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./ZIndexLayer-YpWri7rk.js";import"./useAnimationId-hHgrQgML.js";import"./ActivePoints-BrY5sxJW.js";import"./Dot-N76mer2J.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./ErrorBarContext-DnIQZp30.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getRadiusAndStrokeWidthFromDot-Dpt2Y5Zj.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B1RojcCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuDeeCqi.js";import"./symbol-BfJA77nw.js";import"./useElementOffset-678MNwLN.js";import"./uniqBy-BwBRvZ4r.js";import"./iteratee-BcVPr63I.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
