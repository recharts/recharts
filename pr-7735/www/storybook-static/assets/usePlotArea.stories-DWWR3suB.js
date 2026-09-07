import{R as t}from"./iframe-Bpd2XNWC.js";import{j as a}from"./RechartsWrapper-Cs-3N8QT.js";import{R as p}from"./zIndexSlice-BTu_B7mV.js";import{C as n}from"./ComposedChart-CzZEMv_V.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CpDx9GkF.js";import{X as l}from"./XAxis-BIqIlQ9-.js";import{Y as h}from"./YAxis-CYnJfJw2.js";import{L as c}from"./Legend-ZAI74NDo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BrNdfEDm.js";import"./throttle-CxmKEgMS.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./Layer-DWU20C-K.js";import"./Curve-m791ZjIC.js";import"./types-B5zWJp34.js";import"./step-PY4SjMEk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dPJnsYL3.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./DOMUtils-CSQS_b5b.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./ZIndexLayer-BFtSzcZm.js";import"./useAnimationId-DbYR-C-O.js";import"./ActivePoints-1vR13631.js";import"./Dot-7gwjjvvE.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getRadiusAndStrokeWidthFromDot-Bgi6ZhX1.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-qQEQr_OK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DIrQYRf3.js";import"./symbol-BXNXaRuy.js";import"./useElementOffset-BXSnabaG.js";import"./uniqBy-BNdvCmS_.js";import"./iteratee-__Bf_W0o.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
