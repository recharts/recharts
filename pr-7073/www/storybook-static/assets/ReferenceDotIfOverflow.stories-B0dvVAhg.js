import{e}from"./iframe-DNAE1NhS.js";import{R as n}from"./arrayEqualityCheck-mXK7KdlW.js";import{C as s}from"./ComposedChart-B76NVtIH.js";import{C as p}from"./CartesianGrid-DynNJww8.js";import{X as c}from"./XAxis-BXzG9_su.js";import{Y as f}from"./YAxis-Cl8JaIdm.js";import{R as l}from"./ReferenceDot-Dc5l8BaW.js";import{R as h}from"./RechartsHookInspector-CXdTs72e.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjxP23mN.js";import"./immer-CgyYfbuD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./CartesianAxis-ya5SmFCu.js";import"./Layer-D_bZVw-_.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./ZIndexLayer-NBg0M_kA.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Cr144KYy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
