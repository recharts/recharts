import{e}from"./iframe-CsUpRRwn.js";import{R as n}from"./arrayEqualityCheck-Df4uzLw-.js";import{C as s}from"./ComposedChart-DOflCuOV.js";import{C as p}from"./CartesianGrid-Da4wFyBU.js";import{X as c}from"./XAxis-DUx64kuA.js";import{Y as f}from"./YAxis-FNiiJ-AQ.js";import{R as l}from"./ReferenceDot-Dser0vrc.js";import{R as h}from"./RechartsHookInspector-D2kAWSRM.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./PolarUtils-B4KHlE6s.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./zIndexSlice-Cey6hWeC.js";import"./CartesianChart-k_KAObT0.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./CartesianAxis-BncnjfCs.js";import"./Layer-DS1Wp5Ew.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./Label-B_KIKWwL.js";import"./ZIndexLayer-VR9NNsxL.js";import"./types-B0LA1FfJ.js";import"./Dot-z1jDOX5V.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
