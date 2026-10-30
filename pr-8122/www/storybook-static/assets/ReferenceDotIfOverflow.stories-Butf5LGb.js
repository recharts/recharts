import{R as e}from"./iframe-DTgRciqJ.js";import{R as m}from"./zIndexSlice-DVbLmSgB.js";import{C as s}from"./ComposedChart-BUWqBVBV.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DI64TJvK.js";import{X as f}from"./XAxis-GGlBaKPK.js";import{Y as l}from"./YAxis-Bbi7V5fP.js";import{R as d}from"./ReferenceDot-DMUoFA53.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./axisSelectors-CM_jcbgZ.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./Layer-uwDyCJ97.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./Label-ClRWPO-B.js";import"./types-D-ekNx8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Dot-BnzqQ9RW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
