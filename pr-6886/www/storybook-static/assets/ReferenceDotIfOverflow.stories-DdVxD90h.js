import{e}from"./iframe-B8YYEd9G.js";import{R as n}from"./arrayEqualityCheck-BJSPs_LU.js";import{C as s}from"./ComposedChart-4Q9duxf0.js";import{C as p}from"./CartesianGrid-Bmr_xbA1.js";import{X as c}from"./XAxis-Dznlbswx.js";import{Y as f}from"./YAxis-Bx5APNu1.js";import{R as l}from"./ReferenceDot-D-TfCdKF.js";import{R as h}from"./RechartsHookInspector-C0QywKAE.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./PolarUtils-DYWzGjDu.js";import"./RechartsWrapper-pZyt8ABU.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./zIndexSlice-BLNkJo_X.js";import"./CartesianChart-DBZcJX6H.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./CartesianAxis-BAmncUEg.js";import"./Layer-ChuaoeIg.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./Label-XqAMTaA_.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./types-CnVGCqEL.js";import"./Dot-DPdeHNxG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
