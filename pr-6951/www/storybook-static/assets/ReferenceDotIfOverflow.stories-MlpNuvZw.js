import{e}from"./iframe-Cce3OzqZ.js";import{R as n}from"./arrayEqualityCheck-Db-Wlt3-.js";import{C as s}from"./ComposedChart-D9Jq7hVy.js";import{C as p}from"./CartesianGrid-xJPuKkvE.js";import{X as c}from"./XAxis-DnzcawyL.js";import{Y as f}from"./YAxis-Dzu8TGr_.js";import{R as l}from"./ReferenceDot-B2g2HiKW.js";import{R as h}from"./RechartsHookInspector-eGeMVAmo.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clrD5nAI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./zIndexSlice-Cor1sHRq.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./CartesianAxis-D93mj95O.js";import"./Layer-CFkQXCn1.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./Label-C4rMK4zH.js";import"./ZIndexLayer-BKOy02ft.js";import"./types-b_fBODQO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BemQcXpQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DVt7NuEo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
