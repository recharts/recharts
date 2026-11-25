import{R as e}from"./iframe-DUAuhaDC.js";import{R as m}from"./zIndexSlice-CUoIUvAK.js";import{C as s}from"./ComposedChart-veB2s4XE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B-xmY73e.js";import{X as f}from"./XAxis-DmKgW9ez.js";import{Y as l}from"./YAxis-D6BReFW5.js";import{R as d}from"./ReferenceDot-BM8-RXjI.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./throttle-C34y-YGF.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./RechartsWrapper-C2YARZjw.js";import"./axisSelectors-DKypf8DU.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BzOzklff.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./Label-BlZKxSKy.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BAVTGvfE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
