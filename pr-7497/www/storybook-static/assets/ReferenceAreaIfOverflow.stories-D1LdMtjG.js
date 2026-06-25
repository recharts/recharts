import{R as e}from"./iframe-B87NFlIP.js";import{R as s}from"./zIndexSlice-BXFzXSCA.js";import{C as p}from"./ComposedChart-B90Uqp-u.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CCVqM5KV.js";import{X as d}from"./XAxis-B3Q4Ss-r.js";import{Y as l}from"./YAxis-DEe_988n.js";import{R as h}from"./ReferenceArea-C4715XLn.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QFj5HQLb.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./get-D4uUMniQ.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./index-CacHHN54.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./CartesianAxis-fmozs-7p.js";import"./Layer-DtWSIRkx.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./Label-jdUwmN2T.js";import"./ZIndexLayer-D6XfIW9f.js";import"./types-D1UBNpSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BoHjQjL7.js";import"./useAnimationId-a9uwME5U.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
