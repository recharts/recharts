import{e as t}from"./iframe-D7aX3J5h.js";import{P as a}from"./PlotAreaShower-BsknmqpH.js";import{c as p}from"./hooks-D1J8v2Uc.js";import{R as s}from"./arrayEqualityCheck-DLuUv4yo.js";import{C as n}from"./ComposedChart-CmEEfZPd.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bj-b8hiQ.js";import{X as h}from"./XAxis-EjrrpAWt.js";import{Y as c}from"./YAxis-ByFth8eE.js";import{L as g}from"./Legend-Dfl2ak29.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./immer-DIW08hxt.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./Layer-CJYXhEUr.js";import"./ReactUtils-CbiuaN3U.js";import"./Label-UZajBuhN.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./ZIndexLayer-CkNFgsWD.js";import"./ActivePoints-3vBr6ZBc.js";import"./Dot-BDZGqa2C.js";import"./types-4ix9MfJ6.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./ErrorBarContext-DUsuoaJE.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./useAnimationId-m-yYskNq.js";import"./getRadiusAndStrokeWidthFromDot-TfJWcB_w.js";import"./ActiveShapeUtils-ozGWPntb.js";import"./isPlainObject-C2gpCQxZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5iIq7iY.js";import"./Trapezoid-DY_CkLjE.js";import"./Sector-B9JMeRk8.js";import"./Symbols-BNYsC8j_.js";import"./symbol-BUFbd2WM.js";import"./step-lYGPVUHl.js";import"./Curve-C0dUv9vi.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-7Ur_tbNZ.js";import"./uniqBy-BMTpWui9.js";import"./iteratee-Cr-LsCtJ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
