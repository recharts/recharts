import{e}from"./iframe-E6stEF2S.js";import{R as n}from"./arrayEqualityCheck-CwuTMurj.js";import{C as s}from"./ComposedChart-E1uEID_9.js";import{C as p}from"./CartesianGrid-S_-5ZoSZ.js";import{X as c}from"./XAxis-Bwrfz7AR.js";import{Y as f}from"./YAxis-ChoODXTv.js";import{R as l}from"./ReferenceDot-fgfD2_q2.js";import{R as h}from"./RechartsHookInspector-DWDZSsYq.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpBS-wta.js";import"./PolarUtils-BcxrLtWd.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./CartesianAxis-Ji6qmxj-.js";import"./Layer-BegbPFb9.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./Label-rhvib36b.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./types-FSWLiQQw.js";import"./Dot-DgZWwon8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
