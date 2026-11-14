import{R as e}from"./iframe-ULtY-NVK.js";import{R as m}from"./zIndexSlice-jBtZtiCi.js";import{C as s}from"./ComposedChart-BLU8rp3_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bx2isx_J.js";import{X as f}from"./XAxis-BxexlvNE.js";import{Y as l}from"./YAxis-BQ0jDyxm.js";import{R as d}from"./ReferenceDot-B8BDTD8H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./RechartsWrapper-JXy35Des.js";import"./axisSelectors-DyOG1uRh.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./Label-RNo0-Kup.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-D81fGPmQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
