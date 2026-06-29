import{R as e}from"./iframe-ClhUNVnE.js";import{R as n}from"./zIndexSlice-Bj_mEjES.js";import{C as s}from"./ComposedChart-BTSIcYKW.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DXY2--22.js";import{X as f}from"./XAxis-LUnQ02U1.js";import{Y as l}from"./YAxis-CrIc_odO.js";import{R as d}from"./ReferenceDot-iAoqEH3G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYmjgX02.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./get-Uq0DWhIe.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./renderedTicksSlice-D-beSFYC.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./Label-C7_QXzyC.js";import"./ZIndexLayer-DGNmh353.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BZCqqavc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
