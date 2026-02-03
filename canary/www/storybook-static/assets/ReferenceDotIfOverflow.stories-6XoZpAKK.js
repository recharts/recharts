import{e}from"./iframe-BP2nTpch.js";import{R as n}from"./arrayEqualityCheck-uIVE1gVz.js";import{C as s}from"./ComposedChart-DZabq8it.js";import{C as p}from"./CartesianGrid-DA7Rb6hV.js";import{X as c}from"./XAxis-CXtp3tfD.js";import{Y as f}from"./YAxis-nqLFZHiU.js";import{R as l}from"./ReferenceDot-Bb6m2q5R.js";import{R as h}from"./RechartsHookInspector-DAq4QekR.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-pblYALGE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B99qXj5r.js";import"./hooks-C4-fdNyt.js";import"./axisSelectors-D2SDnJRJ.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./CartesianAxis-Dig3Hc3j.js";import"./Layer-2wKCZbds.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./Label-CpYvd4nZ.js";import"./ZIndexLayer-571M2aB4.js";import"./types-7mx8q_Dg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-UJc7CKGe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B3FDMrYE.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
