import{R as t}from"./iframe-BrVE5RSW.js";import{j as a}from"./RechartsWrapper-DQVN278-.js";import{R as p}from"./zIndexSlice-CHsJbjJD.js";import{C as n}from"./ComposedChart-CCPBzUyH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-t7QkMSUE.js";import{X as l}from"./XAxis-B0eJFub6.js";import{Y as h}from"./YAxis-BAuMZklG.js";import{L as c}from"./Legend-DSgchmmp.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BDU1QiXu.js";import"./throttle-BQaLLzka.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./Layer-BvSPpSNQ.js";import"./Curve-DQe-iWey.js";import"./types-CE2qBNHK.js";import"./step-DvhKjAy0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bzkg4GxV.js";import"./Label-DySzAUNx.js";import"./Text-B4ZIZNbZ.js";import"./DOMUtils-IYFeeRl2.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./ZIndexLayer-BERp6HrO.js";import"./useAnimationId-CaCeoqu2.js";import"./ActivePoints--e6lCWWz.js";import"./Dot-B2RdazQP.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getRadiusAndStrokeWidthFromDot-Cg4paiyF.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./CartesianAxis-Cn4O1F7T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dam4qE3U.js";import"./symbol-DBtAd547.js";import"./useElementOffset-BEglwowY.js";import"./uniqBy-Dh9tSYdQ.js";import"./iteratee-C1RNAWyh.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
