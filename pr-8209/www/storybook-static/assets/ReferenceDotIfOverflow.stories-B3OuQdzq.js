import{R as e}from"./iframe-Ct1svimm.js";import{R as m}from"./zIndexSlice-DuTNyMvu.js";import{C as s}from"./ComposedChart-Cy6iJ-vC.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Xmo33PVK.js";import{X as f}from"./XAxis-DQtY80zm.js";import{Y as l}from"./YAxis-DJ-mdmri.js";import{R as d}from"./ReferenceDot-Dsv-1rey.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./throttle-pNdBRgo_.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./RechartsWrapper-D0VQQHcg.js";import"./axisSelectors-CIwgaX7y.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./Label-B2Mk85O5.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CCM7dYWU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
