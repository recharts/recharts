import{e}from"./iframe-uVZDwAjj.js";import{R as n}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as s}from"./ComposedChart-C98EWxS3.js";import{C as p}from"./CartesianGrid-BRZTTi6Z.js";import{X as c}from"./XAxis-DDi_F3ms.js";import{Y as f}from"./YAxis-2LEHyJIA.js";import{R as l}from"./ReferenceDot-BC8ux8W5.js";import{R as h}from"./RechartsHookInspector-B8IZQaM2.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./immer-ChwPqFH_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./CartesianAxis-D-nGvafv.js";import"./Layer-kSeehgUS.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./ZIndexLayer-B6kXppYb.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DIb3YsWy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
