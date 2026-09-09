import{R as e}from"./iframe-E8y1LHOl.js";import{R as m}from"./zIndexSlice-CP2K5fjd.js";import{C as p}from"./ComposedChart-LbzptMCb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CfUCRFt7.js";import{X as f}from"./XAxis-CQma6gAW.js";import{Y as l}from"./YAxis-DUr2r86j.js";import{R as d}from"./ReferenceDot-BHyLq2WB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BI-R_Jee.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8PWTH_z.js";import"./axisSelectors-Bx3EdZdn.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./CartesianAxis-Cha6t-QP.js";import"./Layer-Bg2OEiKj.js";import"./Text-BdpTntNA.js";import"./DOMUtils-8lkeZOFq.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./Label-DN0LsbYZ.js";import"./ZIndexLayer-m7llBpH3.js";import"./types-Din7IpfN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-C5og9dHv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
