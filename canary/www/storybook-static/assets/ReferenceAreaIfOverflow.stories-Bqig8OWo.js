import{R as e}from"./iframe-z45XlhiT.js";import{R as s}from"./zIndexSlice-rByxwPq2.js";import{C as p}from"./ComposedChart-C_oOM-_x.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BcNDHnb_.js";import{X as d}from"./XAxis-yN0YOhJu.js";import{Y as l}from"./YAxis-C3VQiLjy.js";import{R as h}from"./ReferenceArea-B4amVEWd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./RechartsWrapper-CkIduI85.js";import"./axisSelectors-DZIpCEiW.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./Label-CmK6wYAn.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-H7M7KGkC.js";import"./useAnimationId-DASBPoZY.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
