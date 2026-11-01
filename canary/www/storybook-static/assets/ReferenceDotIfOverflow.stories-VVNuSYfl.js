import{R as e}from"./iframe-BoZGnJw3.js";import{R as m}from"./zIndexSlice-a6rFVYjz.js";import{C as s}from"./ComposedChart-BoAZL9SR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-beTFWkXo.js";import{X as f}from"./XAxis-DaJlL1eX.js";import{Y as l}from"./YAxis-DWoSckNu.js";import{R as d}from"./ReferenceDot-F3LS6reJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./throttle-DtDTnxHB.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./axisSelectors-D380Rkbk.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./CartesianAxis-LiXL0IDn.js";import"./Layer-DWrdDLVq.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./Label-hjfvRRRs.js";import"./types-VJa2wa64.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DvyXLuZB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
