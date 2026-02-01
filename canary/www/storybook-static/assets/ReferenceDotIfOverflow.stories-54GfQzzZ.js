import{e}from"./iframe-CJsZiOdQ.js";import{R as n}from"./arrayEqualityCheck-DmoSYxVB.js";import{C as s}from"./ComposedChart-BnSciooP.js";import{C as p}from"./CartesianGrid-DcZcYl5q.js";import{X as c}from"./XAxis-8z1ahuYp.js";import{Y as f}from"./YAxis-CY7M7u2R.js";import{R as l}from"./ReferenceDot-BBELKu-G.js";import{R as h}from"./RechartsHookInspector-Cp7SH18f.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C6hoNl5r.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./zIndexSlice-DOwFRgwN.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./CartesianAxis-Bxrejv1n.js";import"./Layer-saDXbA70.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./Label-B5dudWmS.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./types--3K6j7TR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C-IcEIkw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B5U_62lg.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
