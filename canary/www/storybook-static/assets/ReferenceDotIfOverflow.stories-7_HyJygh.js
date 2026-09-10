import{R as e}from"./iframe-IxvRXYOM.js";import{R as m}from"./zIndexSlice-Dia8XTL2.js";import{C as p}from"./ComposedChart-BzuXDUIC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DebB53wC.js";import{X as f}from"./XAxis-R0eKTQQ1.js";import{Y as l}from"./YAxis-31y7ZHQJ.js";import{R as d}from"./ReferenceDot-CVNm2AT6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoVSkdKP.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DouzT1Jm.js";import"./axisSelectors-CsegCW8b.js";import"./d3-scale-FVb6w9iL.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./renderedTicksSlice-CchY5W_H.js";import"./index-C1qZei_h.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./CartesianAxis-BJBAf6Tc.js";import"./Layer-DXPk_QPv.js";import"./Text-VVpkyRHU.js";import"./DOMUtils-7IYxeTO_.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./Label-DYJa0Pce.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./types-D8hPxmLy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Ckx8C-Ql.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
