import{e}from"./iframe-Db4zTqbk.js";import{R as n}from"./arrayEqualityCheck-3CRW7fvn.js";import{C as s}from"./ComposedChart-b8DT5qpX.js";import{C as p}from"./CartesianGrid-B9AADoff.js";import{X as c}from"./XAxis-2YmY08Fs.js";import{Y as f}from"./YAxis-C58kpuB1.js";import{R as l}from"./ReferenceDot-D_afvt0T.js";import{R as h}from"./RechartsHookInspector-CrEL5moc.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9skBriC.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-FQCKz-X1.js";import"./hooks-ryz_uIK2.js";import"./axisSelectors-blz0ZUDW.js";import"./zIndexSlice-CrYwnyyD.js";import"./CartesianChart-YyNzumgC.js";import"./chartDataContext-C75QL-LK.js";import"./CategoricalChart-CqxC4z6s.js";import"./CartesianAxis-CUgWXt_R.js";import"./Layer-Cflbp2vf.js";import"./Text-B-BVNWA6.js";import"./DOMUtils-CXvwiz2o.js";import"./Label-CqrigLpP.js";import"./ZIndexLayer-BUznzSNs.js";import"./types-BTyyhFf_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CXLbb6f5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bol23Ne6.js";import"./ChartSizeDimensions-CMbAaaLi.js";import"./OffsetShower-n4gU0hEx.js";import"./PlotAreaShower-Dgj_k8x2.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
