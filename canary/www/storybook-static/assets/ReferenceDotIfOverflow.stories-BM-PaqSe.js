import{R as e}from"./iframe-C20wDroG.js";import{R as n}from"./zIndexSlice-Dn977bIM.js";import{C as s}from"./ComposedChart-fc9zkA9M.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DhTGlh1s.js";import{X as f}from"./XAxis-bncj55mF.js";import{Y as l}from"./YAxis-Dregax_Z.js";import{R as d}from"./ReferenceDot-BJc_-ERP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_pKwmSO.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./axisSelectors-D2d7y5tB.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./CartesianAxis-BCVPeUYs.js";import"./Layer-DDCJtugd.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./Label-DkS9BWG5.js";import"./ZIndexLayer-DPgbR3ka.js";import"./types-BDuMvVkF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-tDq1zpNX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
