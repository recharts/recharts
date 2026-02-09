import{e}from"./iframe-B5r3cecm.js";import{R as n}from"./arrayEqualityCheck-Czqc1yJH.js";import{C as s}from"./ComposedChart-C_4RZTQj.js";import{C as p}from"./CartesianGrid-DNHyoKf7.js";import{X as c}from"./XAxis-BkMRDr4M.js";import{Y as f}from"./YAxis-TYBY8JO1.js";import{R as l}from"./ReferenceDot-CJjWEd1e.js";import{R as h}from"./RechartsHookInspector-DV5jRegM.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CS6LSkHo.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./CartesianAxis-Xf3h13YN.js";import"./Layer-5sA9M2a_.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./Label-CuwvUyc2.js";import"./ZIndexLayer-CK5fYLk5.js";import"./types-0ytZb3l6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DgWJfR-O.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkOLfLi3.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
