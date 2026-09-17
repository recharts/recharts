import{R as t}from"./iframe-DbHNynaQ.js";import{j as a}from"./RechartsWrapper-B8ljz37p.js";import{R as p}from"./zIndexSlice-seYPsfER.js";import{C as n}from"./ComposedChart-OopH4fQy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C3qaM2j5.js";import{X as l}from"./XAxis-IVt4eUDa.js";import{Y as h}from"./YAxis-BKqQ4P5e.js";import{L as c}from"./Legend-DTb60GHo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DuRw_22M.js";import"./throttle-BLg26bcw.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./Layer-McKs3jBR.js";import"./Curve-DSpvGQJR.js";import"./types-Dtr2g2lR.js";import"./step-DpeM9sZC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DQqNxpCY.js";import"./Label-CahCPYhY.js";import"./Text-CnT4LfU-.js";import"./DOMUtils-W_YN1JiB.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./ZIndexLayer-DLZyPL-y.js";import"./useAnimationId-aseG17e8.js";import"./ActivePoints-C-6wZqrA.js";import"./Dot-CnXT2FP3.js";import"./RegisterGraphicalItemId-CTY00hAi.js";import"./ErrorBarContext-BMuc8qch.js";import"./GraphicalItemClipPath-GbTn8y2C.js";import"./SetGraphicalItem-eyDqIX5L.js";import"./getRadiusAndStrokeWidthFromDot-K22oepzJ.js";import"./ActiveShapeUtils-FJemOztc.js";import"./useGraphicalItemIdentity-Ox7A1s1f.js";import"./CartesianAxis-BKzDRc2K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-p0vpfpIB.js";import"./symbol-C6icU8fd.js";import"./useElementOffset-DsZ5J3Ev.js";import"./uniqBy-B46YDIdh.js";import"./iteratee-DXP-yn47.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
