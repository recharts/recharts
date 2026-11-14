import{R as e}from"./iframe-BH2TtHlY.js";import{R as m}from"./zIndexSlice-BUPzf8FY.js";import{C as s}from"./ComposedChart-DsOU5PTg.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D8q2gGGF.js";import{X as f}from"./XAxis-COZT_uqw.js";import{Y as l}from"./YAxis-B0vif2kn.js";import{R as d}from"./ReferenceDot-Cjw1dlQd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./throttle-Dx7o9_lY.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./RechartsWrapper-DzLFc6RH.js";import"./axisSelectors-DsRwL_k-.js";import"./polarAxisSelectors-CrYx-glo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXj_dWXw.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./Label-CIPQeI3a.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-yQhLEV_U.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
