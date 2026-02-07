import{e}from"./iframe-BH4WSVJq.js";import{R as n}from"./arrayEqualityCheck-CP7zdH6j.js";import{C as s}from"./ComposedChart-DfoszhwC.js";import{C as p}from"./CartesianGrid-ChShBsrG.js";import{X as c}from"./XAxis-Co1hN3iA.js";import{Y as f}from"./YAxis-Dj6UBB19.js";import{R as l}from"./ReferenceDot-CSed6UHc.js";import{R as h}from"./RechartsHookInspector-C-rHiQ21.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-YH6ur84t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cR6befFD.js";import"./hooks-CsAFpvHN.js";import"./axisSelectors-DWE-oxLu.js";import"./zIndexSlice-DQh671qs.js";import"./CartesianChart-CnXNKoh0.js";import"./chartDataContext-px_EklfT.js";import"./CategoricalChart-BvpoJ5FY.js";import"./CartesianAxis-6RsVZvqn.js";import"./Layer-FSItnfZD.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./Label-BSQQrDO-.js";import"./ZIndexLayer-CiVdec-B.js";import"./types-BEfpPHVi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-KeJkGvxa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cisc0CQR.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
