import{R as e}from"./iframe-DWz-Q7D1.js";import{R as m}from"./zIndexSlice-D4KjIdsO.js";import{C as p}from"./ComposedChart-DRhmHwTS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BoGhBG8e.js";import{X as f}from"./XAxis-BZUBECrT.js";import{Y as l}from"./YAxis--VjP9Ce5.js";import{R as d}from"./ReferenceDot-DVNNgGCm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CiqOC1ip.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYzgORH.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTtBamZ0.js";import"./axisSelectors-Ce2rWziX.js";import"./d3-scale-B1h-c6nn.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./Text-Rsbaz2Nf.js";import"./pageBackground-Bn_EUSju.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./Label-DNBocu_e.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DC9IrQq5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
