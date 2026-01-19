import{e}from"./iframe-CxI43GLZ.js";import{R as n}from"./arrayEqualityCheck-BfVdm9jV.js";import{C as s}from"./ComposedChart-4DvSTtTI.js";import{C as p}from"./CartesianGrid-DQNW5f0G.js";import{X as c}from"./XAxis-DH2Q1e34.js";import{Y as f}from"./YAxis-C-oWd5yq.js";import{R as l}from"./ReferenceDot-D6nGHr5x.js";import{R as h}from"./RechartsHookInspector-DtRN3lc4.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UONb-avO.js";import"./PolarUtils-DHQUPcK8.js";import"./RechartsWrapper--eelc2ZG.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./zIndexSlice-DIL5Sqm1.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./CartesianAxis-CGSh7ZG4.js";import"./Layer-CmGdcww6.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./Label-B09Q27rq.js";import"./ZIndexLayer-B1TtTzTT.js";import"./types-KA7-71SW.js";import"./Dot-KNUzVwuJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
