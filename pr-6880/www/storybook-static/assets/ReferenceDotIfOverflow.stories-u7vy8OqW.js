import{e}from"./iframe-Cwpfa-aU.js";import{R as n}from"./arrayEqualityCheck-4s7O9CHw.js";import{C as s}from"./ComposedChart-Bjflq6a1.js";import{C as p}from"./CartesianGrid-CRtA0NQM.js";import{X as c}from"./XAxis-UZUbrGY6.js";import{Y as f}from"./YAxis-BUkK3ftj.js";import{R as l}from"./ReferenceDot-DJgTiehx.js";import{R as h}from"./RechartsHookInspector-RngvJaov.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./zIndexSlice-IilHGL9E.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./CartesianAxis-BJ_Cxbna.js";import"./Layer-C5Up6lye.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./Label-BkH8bmvn.js";import"./ZIndexLayer-MboeMBT5.js";import"./types-C0n05tvQ.js";import"./Dot-BVCmMmNN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
