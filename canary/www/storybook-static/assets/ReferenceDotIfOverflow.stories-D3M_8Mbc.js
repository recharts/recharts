import{e}from"./iframe-BrTwOhsr.js";import{R as n}from"./arrayEqualityCheck-CfVGBoS6.js";import{C as s}from"./ComposedChart-Br1-FoJi.js";import{C as p}from"./CartesianGrid-CyCZ17TZ.js";import{X as c}from"./XAxis-DQVoLVBJ.js";import{Y as f}from"./YAxis-DRNSDCDv.js";import{R as l}from"./ReferenceDot-A20Pcs9t.js";import{R as h}from"./RechartsHookInspector-wr1qbxN7.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D38DG274.js";import"./hooks-CwxxJRu9.js";import"./axisSelectors-DyCazfsW.js";import"./zIndexSlice-q9T-BB65.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./CartesianAxis-BnpVD6GC.js";import"./Layer-B-9J2nmA.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./Label-Bx9GqcNI.js";import"./ZIndexLayer-vpi4acAX.js";import"./types-CgBItb-S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-2FtraOao.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
