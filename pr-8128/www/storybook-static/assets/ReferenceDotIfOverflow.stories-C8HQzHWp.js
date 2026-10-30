import{R as e}from"./iframe-BwLZw-_M.js";import{R as m}from"./zIndexSlice-ChI0kTlF.js";import{C as p}from"./ComposedChart-CIavBfkK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SrRv5sp5.js";import{X as f}from"./XAxis-D6rGR5iH.js";import{Y as l}from"./YAxis-CM5oOvq7.js";import{R as d}from"./ReferenceDot-8fD0Nc7C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BegzgTjS.js";import"./throttle-DvL4FsEQ.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./RechartsWrapper-C2SzhBqG.js";import"./axisSelectors-kUTEWjAI.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DGzUJoIU.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./CartesianAxis-CE8eP4oM.js";import"./Layer-DuW_QRN1.js";import"./Text-CBZN8k_S.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./Label-U4vkciLv.js";import"./types-tzWyPHwG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-sw4Y96Vm.js";import"./fillDefinitions-B6DD0NTj.js";import"./Dot-P4orGxiz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
