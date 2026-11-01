import{R as e}from"./iframe-D4WxERWR.js";import{R as m}from"./zIndexSlice-Ctb-XE3r.js";import{C as s}from"./ComposedChart-Bw102KtD.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bl7Cq_Cu.js";import{X as f}from"./XAxis-CSUQYPZm.js";import{Y as l}from"./YAxis-oI30KIzY.js";import{R as d}from"./ReferenceDot-BDdlKgkh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./throttle-YSLka_uT.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./RechartsWrapper-BABrVhwD.js";import"./axisSelectors-CDo6nEPG.js";import"./polarAxisSelectors-29BSG3By.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUPxeW1L.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./CartesianAxis-CWiuRNLE.js";import"./Layer-Cql_Pemo.js";import"./Text-DwZS23az.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./Label-DI6ASMtN.js";import"./types-Bl0q8uU6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot--NIPiAHj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
