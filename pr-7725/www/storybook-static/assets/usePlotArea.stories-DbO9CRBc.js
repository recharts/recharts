import{R as t}from"./iframe-DccHD9cJ.js";import{j as a}from"./RechartsWrapper-Df3mrbj3.js";import{R as p}from"./zIndexSlice-DTUZOs4Q.js";import{C as s}from"./ComposedChart-IZbmlTb-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ChUnqlEz.js";import{X as l}from"./XAxis-Btq-uLxc.js";import{Y as h}from"./YAxis-DhvCla2D.js";import{L as c}from"./Legend-ldQF-Jpy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-F-OrX_Xw.js";import"./throttle-DVrp2GLO.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./d3-scale-Bc5gFn0f.js";import"./index-6ZXP3-Xk.js";import"./index-C-5pzGe4.js";import"./renderedTicksSlice-D4ngpquf.js";import"./index-CWyYWxmD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./Layer-DWnnL9ma.js";import"./Curve-v6KG-oLe.js";import"./types-CsFJg5Ml.js";import"./step-BNCkH4O7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAcltxFf.js";import"./Label-DVskdjtu.js";import"./Text-jeWIJF52.js";import"./DOMUtils-D6lsaUk9.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./useAnimationId-pGJexV-0.js";import"./ActivePoints-BC5zZJgg.js";import"./Dot-zbPRTYvb.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getRadiusAndStrokeWidthFromDot-Dnr5euKK.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D0w9DA3M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BM6J5XeJ.js";import"./symbol-CuC4WuRV.js";import"./useElementOffset-DqOwHG6I.js";import"./uniqBy-DzyHfYT5.js";import"./iteratee-BxX9M0vU.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
