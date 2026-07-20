import{R as t}from"./iframe-DzolqKW_.js";import{u as a}from"./CategoricalChart-tg3Y8Ccg.js";import{R as p}from"./zIndexSlice-BFydgfU7.js";import{C as s}from"./ComposedChart-BXGKVBvM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DiVWIN5q.js";import{X as l}from"./XAxis-GMhM5CFR.js";import{Y as h}from"./YAxis-DB_rcNlV.js";import{L as c}from"./Legend-CbGDyId9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./throttle-BWqOgTiL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./d3-scale-BOKuOqr8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./Layer-TAE-BGU4.js";import"./Curve-D6-Bsbi2.js";import"./types-BKcxhU3G.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8n1PMNM.js";import"./Label-BR8h5iiR.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./ZIndexLayer-CuyP-vcu.js";import"./useAnimationId-BCQ5DS1y.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./ErrorBarContext-HJrjbNNf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./CartesianAxis-CSVxSdOY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-u3thHIeX.js";import"./symbol-CcSEyfye.js";import"./useElementOffset-C5u9w9zW.js";import"./uniqBy-ijo8b4E9.js";import"./iteratee-nLHmRvyN.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
