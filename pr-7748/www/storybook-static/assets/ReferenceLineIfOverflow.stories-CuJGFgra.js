import{R as e}from"./iframe-BRuR_Aem.js";import{R as a}from"./zIndexSlice-Bj7VXWF6.js";import{C as p}from"./ComposedChart-BfbWwovc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C2jaiA8O.js";import{X as f}from"./XAxis-DkgTjfQy.js";import{Y as l}from"./YAxis-CTNE1Ach.js";import{L as d}from"./Line-CIteCgCI.js";import{R as h}from"./ReferenceLine-BgB-UOKW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CB_4huk8.js";import"./throttle-Bze-tpN5.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./axisSelectors-vJ_QG27E.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D-1jLUlb.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./CartesianAxis-khCvplyM.js";import"./Layer-DH8vqzA_.js";import"./Text-DCSoJ6K5.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./Label-BRU8Jowp.js";import"./types-LyIymARE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-COuDjPMk.js";import"./Curve-2VjViydv.js";import"./step-DSV5xix0.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D3durKHg.js";import"./ActivePoints-DjHxL6MU.js";import"./Dot-BB75ixWu.js";import"./activeStyles-ddHtcBjm.js";import"./useAnimationId-CqnKfWIo.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./ErrorBarContext-BSmlh0M0.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
