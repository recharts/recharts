import{R as t}from"./iframe-dnbYLFAD.js";import{j as a}from"./RechartsWrapper-CUiYn_74.js";import{R as p}from"./zIndexSlice-Tzq48rK3.js";import{C as s}from"./ComposedChart-CVfDUoKF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cp5WLj85.js";import{X as l}from"./XAxis-BSFcOfEW.js";import{Y as h}from"./YAxis-BETlZVB5.js";import{L as c}from"./Legend-C0D7u4Zg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DaDkCz04.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BxcK-66k.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./isWellBehavedNumber-B4er61T0.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./Layer-BJ7lSbQt.js";import"./Curve-By68icMD.js";import"./types-ryOPFJaw.js";import"./step-Mew-CIDE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CZJCXzZR.js";import"./Label-DfEdNEi7.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./ZIndexLayer-DjGyUWfd.js";import"./useAnimationId-p2irW4JC.js";import"./ActivePoints-D6BTfiYQ.js";import"./Dot-BOs-mB4N.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./ErrorBarContext-Bpb4kfuY.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getRadiusAndStrokeWidthFromDot-BaTLVLjz.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-sVyuEsJd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hFj9E-ak.js";import"./symbol-Dp_lWvy3.js";import"./useElementOffset-CJAJZDYH.js";import"./uniqBy-Bsh6QpSm.js";import"./iteratee-CdEqff0I.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
