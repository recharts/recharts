import{R as e}from"./iframe-z45XlhiT.js";import{R as m}from"./zIndexSlice-rByxwPq2.js";import{C as s}from"./ComposedChart-C_oOM-_x.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BcNDHnb_.js";import{X as f}from"./XAxis-yN0YOhJu.js";import{Y as l}from"./YAxis-C3VQiLjy.js";import{R as d}from"./ReferenceDot-B8cbXV57.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./RechartsWrapper-CkIduI85.js";import"./axisSelectors-DZIpCEiW.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./Label-CmK6wYAn.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-C9aR3nF8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
