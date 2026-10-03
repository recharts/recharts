import{R as t}from"./iframe-DUCVYvuv.js";import{j as a}from"./RechartsWrapper-iyGA1AMM.js";import{R as p}from"./zIndexSlice-Dv561aOb.js";import{C as n}from"./ComposedChart-NN_8ml7Y.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CtdXCtTz.js";import{X as l}from"./XAxis-BzNdpJxM.js";import{Y as h}from"./YAxis-BmCbyRlC.js";import{L as c}from"./Legend-DX07trj6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DISImja8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-RihwrwLn.js";import"./throttle-DlYjiwaM.js";import"./index-Drz1YEgP.js";import"./index-BF0qlZzJ.js";import"./isWellBehavedNumber-CHfaFS22.js";import"./d3-scale-CipezK5C.js";import"./index-CU1FAq-q.js";import"./index-CF3yTXup.js";import"./renderedTicksSlice-DntZkvWg.js";import"./index-BB2mFlZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CMoCj0lC.js";import"./chartDataContext-C_0AmvZE.js";import"./CategoricalChart-BDtogWEQ.js";import"./Layer-BYf2Lf2_.js";import"./Curve-BYkQNACV.js";import"./types-Bor8UPlE.js";import"./step-C8Z349xs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BEYVhKcg.js";import"./Label-BxNjUR8n.js";import"./Text-BvxoaAi_.js";import"./DOMUtils-CzBz7LPB.js";import"./useId-B9VN3-ij.js";import"./useBackwardsCompatibleTheme-CPdPW8lT.js";import"./ZIndexLayer-CTDLevub.js";import"./useAnimationId-CVoiYc0t.js";import"./ActivePoints-C4H58rGm.js";import"./Dot-BPs4QuN4.js";import"./RegisterGraphicalItemId-BxtMrAn2.js";import"./ErrorBarContext-DZk5Pr6Y.js";import"./GraphicalItemClipPath-AZa4GZWr.js";import"./SetGraphicalItem-CMStLvM8.js";import"./getRadiusAndStrokeWidthFromDot-BLrXq-Hf.js";import"./ActiveShapeUtils-Bh9qpD-D.js";import"./useGraphicalItemIdentity-BZb16S3a.js";import"./CartesianAxis-CN04VyAD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bt5KQad5.js";import"./symbol-DBVnIE4b.js";import"./useElementOffset-BSSllVf1.js";import"./uniqBy-Xxc7DvXp.js";import"./iteratee-jOVAutlA.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
