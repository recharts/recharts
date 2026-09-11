import{R as e}from"./iframe-C3lSaTFw.js";import{R as m}from"./zIndexSlice-CVjGcfFW.js";import{C as p}from"./ComposedChart-ByMiL3yy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SM9K3Eb0.js";import{X as f}from"./XAxis-MYsgX6vB.js";import{Y as l}from"./YAxis-CGdCh3qj.js";import{R as d}from"./ReferenceDot-s1gO0AuK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BAVesAqd.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./CartesianAxis-BQ-frZs4.js";import"./Layer-DCoygAxl.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./Label-DRjcihT7.js";import"./ZIndexLayer-BIuAiCXb.js";import"./types-BmaDYfeO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-zciZMpDM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
