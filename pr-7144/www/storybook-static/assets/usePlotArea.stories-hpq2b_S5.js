import{e as t}from"./iframe-C_RKSEYG.js";import{P as a}from"./PlotAreaShower-BicDzRP-.js";import{c as p}from"./hooks-BUBBsNP0.js";import{R as s}from"./arrayEqualityCheck-XhN9n2BV.js";import{C as n}from"./ComposedChart-BzOUY-Ur.js";import{L as l}from"./Line-CObjJQTD.js";import{X as d}from"./XAxis-3q4SInU2.js";import{Y as h}from"./YAxis-Dw1AfdQf.js";import{L as c}from"./Legend-0q0gcXTg.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./immer-BXvw-sb6.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./Layer-Bdbbvous.js";import"./ReactUtils-CN-zxxkn.js";import"./Label-DjnSNkR5.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./ZIndexLayer-C2eZ7492.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./types-DsqucEgb.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./ErrorBarContext-B6LOYifa.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./ActiveShapeUtils-DCdigpXF.js";import"./isPlainObject-DUDNoV38.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR00ZYjW.js";import"./Trapezoid-BcY_848k.js";import"./Sector-C6nUzz_C.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";import"./step-CZqcHwF_.js";import"./Curve-C9iWhVEb.js";import"./CartesianAxis-Q9iq7WI3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-UIzr0A2v.js";import"./uniqBy-BK5HoLxp.js";import"./iteratee-Dn6k9_7E.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
