import{R as e}from"./iframe-DeM0Qb4B.js";import{R as n}from"./zIndexSlice-CiNLGVRc.js";import{C as s}from"./ComposedChart-Q8wzdF4e.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-De-sYFa2.js";import{X as f}from"./XAxis-D6dtEk3_.js";import{Y as l}from"./YAxis-GdnxXDj_.js";import{R as d}from"./ReferenceDot-CuXn_3YG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CXrDBfBc.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./get-CMIg51n-.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./CartesianAxis-C8MJ9nCV.js";import"./Layer-B3W7tn4T.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./Label-C5gMwwTi.js";import"./ZIndexLayer-DorZCPdG.js";import"./types-C10ohCRK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DnzKtKhK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
