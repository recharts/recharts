import{e}from"./iframe-0lTGunMW.js";import{R as n}from"./arrayEqualityCheck-BcVHM6kB.js";import{C as s}from"./ComposedChart-B3dKlHYG.js";import{C as p}from"./CartesianGrid-C3bTOkY1.js";import{X as c}from"./XAxis-Cfcoth7C.js";import{Y as f}from"./YAxis-lXYEyZz1.js";import{R as l}from"./ReferenceDot-ibSjbw81.js";import{R as h}from"./RechartsHookInspector-Dk1C8jj5.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./PolarUtils-mWliNy-S.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./zIndexSlice-D-YSqdMJ.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./CartesianAxis-Co_LHUOm.js";import"./Layer-BnXp22uo.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./ZIndexLayer-DWGlhSed.js";import"./types-WsTRE19v.js";import"./Dot-7hrVu7_8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
