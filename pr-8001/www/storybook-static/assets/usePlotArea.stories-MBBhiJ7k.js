import{R as t}from"./iframe-Dgm4gy-U.js";import{e as a}from"./RechartsWrapper-ZSLGTFtH.js";import{R as p}from"./zIndexSlice-CiwacDpC.js";import{C as n}from"./ComposedChart-ByttuQ_a.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CUAXGkMg.js";import{X as l}from"./XAxis-CfrEw3PN.js";import{Y as h}from"./YAxis-mX4prg2G.js";import{L as c}from"./Legend-Ry8mmAdO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-mj5UOSEK.js";import"./throttle-zAOqa1T8.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./d3-scale-CRCwBtC_.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-C9uskWuj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./Layer-BihfHLDn.js";import"./Curve-CtDZfaqJ.js";import"./types-BUhHmnCY.js";import"./step-BcutOZJj.js";import"./path-DyVhHtw_.js";import"./activeStyles-DhaHnmuT.js";import"./Label-D7CpXrZ4.js";import"./Text-8gs2XgOQ.js";import"./pageBackground-Cm2lHn8y.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./ZIndexLayer-IYsblH0Q.js";import"./useAnimationId-Bq4IYhf5.js";import"./dataEntryStyles-DqmWF7tK.js";import"./ActivePoints-BL0uan1q.js";import"./Dot-DF3bSaZ9.js";import"./ErrorBarContext-DQKU8Ti5.js";import"./GraphicalItemClipPath-D_X4MzO8.js";import"./SetGraphicalItem-Dc743XQT.js";import"./getRadiusAndStrokeWidthFromDot-LRjZ0GPt.js";import"./ActiveShapeUtils-CQNP7AWp.js";import"./useEffectiveDataKey-Dpv4-4ke.js";import"./CartesianAxis-B7Oepgsg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BdXbUGBN.js";import"./symbol-G_tSVHFN.js";import"./useElementOffset-Chv-8FgP.js";import"./uniqBy-B4vXZz4G.js";import"./iteratee-DeFhKk0a.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
