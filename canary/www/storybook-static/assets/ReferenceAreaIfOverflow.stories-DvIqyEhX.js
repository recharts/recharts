import{R as e}from"./iframe-BoZGnJw3.js";import{R as p}from"./zIndexSlice-a6rFVYjz.js";import{C as s}from"./ComposedChart-BoAZL9SR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-beTFWkXo.js";import{X as d}from"./XAxis-DaJlL1eX.js";import{Y as l}from"./YAxis-DWoSckNu.js";import{R as h}from"./ReferenceArea-z0uQY56t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./throttle-DtDTnxHB.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./axisSelectors-D380Rkbk.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./CartesianAxis-LiXL0IDn.js";import"./Layer-DWrdDLVq.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./Label-hjfvRRRs.js";import"./types-VJa2wa64.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BsU8vkw-.js";import"./useAnimationId-DhSaM75t.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
