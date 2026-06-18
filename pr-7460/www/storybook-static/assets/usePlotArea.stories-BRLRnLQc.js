import{R as t}from"./iframe-bh8Hdh0s.js";import{u as a}from"./CategoricalChart-D4vACcZf.js";import{R as p}from"./zIndexSlice-D-BYbnQO.js";import{C as s}from"./ComposedChart-D0rCA8sN.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C3vcORAG.js";import{X as l}from"./XAxis-dMhU6DKu.js";import{Y as h}from"./YAxis-3Mh6rYEy.js";import{L as c}from"./Legend--MEh8Dpm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-bPWrhjV6.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./immer-Di2Y-BX2.js";import"./get-D3Bb09EQ.js";import"./renderedTicksSlice-CAguNiQd.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./Layer-CFpuUaFs.js";import"./Curve-C1GsF6pk.js";import"./types-CGzL9fNM.js";import"./step-BRqV4bUq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2yvO_B45.js";import"./Label-4dzVOcp4.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./useAnimationId-CfFImJZH.js";import"./ActivePoints-BJkC-K95.js";import"./Dot-DpzQ1Tcm.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./ErrorBarContext-Co10Kn-s.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./getRadiusAndStrokeWidthFromDot-CAc0078J.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./CartesianAxis-Cczt14vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DtKA6LMw.js";import"./symbol-B3zzIPTL.js";import"./useElementOffset-CQr1dMfv.js";import"./uniqBy-SIO0NZ97.js";import"./iteratee-BMZqNRQz.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
