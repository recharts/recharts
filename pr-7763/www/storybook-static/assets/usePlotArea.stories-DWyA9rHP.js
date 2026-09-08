import{R as t}from"./iframe-CDv_hnlf.js";import{j as a}from"./RechartsWrapper-lM1IufFg.js";import{R as p}from"./zIndexSlice-8EbRQ5DZ.js";import{C as n}from"./ComposedChart-I6fWeSu7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-PKJWXDbr.js";import{X as l}from"./XAxis-Cn9K5n4J.js";import{Y as h}from"./YAxis-Dphgoyab.js";import{L as c}from"./Legend-Bim0FPrU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CImqyn8n.js";import"./get-C2VjdU0L.js";import"./axisSelectors-FUoH9jZO.js";import"./throttle-RrwSa6SL.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./Layer-DzpNGvR7.js";import"./Curve-CUN9zty4.js";import"./types-BoP1bnqQ.js";import"./step-LibK8RJE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BKW3YVwF.js";import"./Label-BE6rd0_D.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./ZIndexLayer-Drc_0i_v.js";import"./useAnimationId-DiRDlhkC.js";import"./ActivePoints-BsN3X_AV.js";import"./Dot-CdPH0Qt5.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getRadiusAndStrokeWidthFromDot-CqH6eDG0.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Cub9Ba5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DiD62FEu.js";import"./symbol-BE1vvOHB.js";import"./useElementOffset-Ctn7gXwm.js";import"./uniqBy-Dewbdz2d.js";import"./iteratee-BhDG6mCi.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
