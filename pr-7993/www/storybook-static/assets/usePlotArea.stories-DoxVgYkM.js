import{R as t}from"./iframe-Bcbj5Yvj.js";import{e as a}from"./RechartsWrapper-JEGbB27w.js";import{R as p}from"./zIndexSlice-BbtTmnct.js";import{C as n}from"./ComposedChart-DVpq_Un2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ba2WmDpW.js";import{X as l}from"./XAxis-BGoibDnX.js";import{Y as h}from"./YAxis-D0HGn8m-.js";import{L as c}from"./Legend-CZS9R5nb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9cavZl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./Layer-DpGUUMWf.js";import"./Curve-DQG70g8F.js";import"./types-CJ1XacmQ.js";import"./step-BVuNFWjf.js";import"./path-DyVhHtw_.js";import"./activeStyles-MDW24FXq.js";import"./Label-K9FSTyve.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./ZIndexLayer-CyylKyYl.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./CartesianAxis-D8X_N5Aa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dv0jAL1Q.js";import"./symbol-Cs2ouPLI.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
