import{R as t}from"./iframe-D54unYLy.js";import{e as p}from"./RechartsWrapper-Sp30bFVi.js";import{R as a}from"./zIndexSlice-Cm3b7ejj.js";import{C as n}from"./ComposedChart-D7cf1DfT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ByVQ_w7d.js";import{X as l}from"./XAxis-R4jdjMJ5.js";import{Y as h}from"./YAxis-akurfq85.js";import{L as c}from"./Legend-Dk4rOUIE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CGx4lpK1.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Layer-crHiZgAm.js";import"./Curve-leEdGdAp.js";import"./types-BmPqNA2a.js";import"./step-C309cuJU.js";import"./path-DyVhHtw_.js";import"./activeStyles-qzo8AQBX.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./ZIndexLayer-DfUYfUZg.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./CartesianAxis-UtS4SURK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BPVu9Joj.js";import"./symbol-A2VrwPOA.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
