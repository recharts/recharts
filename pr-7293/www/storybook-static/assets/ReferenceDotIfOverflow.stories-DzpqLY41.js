import{e}from"./iframe-BBzssXFz.js";import{R as n}from"./arrayEqualityCheck-Bjl1KGHu.js";import{C as s}from"./ComposedChart-BNnTKuEE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BQfmrOwT.js";import{X as f}from"./XAxis-BKkUGHg6.js";import{Y as l}from"./YAxis-DM7CZp2-.js";import{R as h}from"./ReferenceDot-C5Avq0XO.js";import{R as d}from"./RechartsHookInspector-Cq_u8Fnd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Csr8SK85.js";import"./immer-7XFVXXFB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./zIndexSlice-BlJdEm2b.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./CartesianAxis-Dax8GbgD.js";import"./Layer-CAh1Kgp_.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./Label-B9ZSBmHd.js";import"./ZIndexLayer-C1_Q11sr.js";import"./types-CER3-J_V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BOUDlr0E.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
