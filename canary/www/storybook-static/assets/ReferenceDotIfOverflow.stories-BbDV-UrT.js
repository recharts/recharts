import{R as e}from"./iframe-2TbE3qYT.js";import{R as m}from"./zIndexSlice-CDl_l-89.js";import{C as s}from"./ComposedChart-Dv9sDNdE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Br04DuFw.js";import{X as f}from"./XAxis-J5474B1k.js";import{Y as l}from"./YAxis-DJiyoeoo.js";import{R as d}from"./ReferenceDot-zYuWmtl2.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./RechartsWrapper-DSdhDIUK.js";import"./axisSelectors-BRsQeeHB.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./CartesianAxis-DY1zMkgy.js";import"./Layer-7DEP56Bj.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./Label-BqpWbzgg.js";import"./types-Dx30sS-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-_rUk0L2M.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
