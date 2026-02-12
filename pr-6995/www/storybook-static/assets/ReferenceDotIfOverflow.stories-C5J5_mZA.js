import{e}from"./iframe-D8RsH_ZD.js";import{R as n}from"./arrayEqualityCheck-DfUQQqNG.js";import{C as s}from"./ComposedChart-D5T5b3BK.js";import{C as p}from"./CartesianGrid-BLNF8xBj.js";import{X as c}from"./XAxis-9qpGEcGJ.js";import{Y as f}from"./YAxis-C3MuBlcJ.js";import{R as l}from"./ReferenceDot-CFunu88K.js";import{R as h}from"./RechartsHookInspector-DuFREeNP.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./CartesianAxis-ewa7ZF2u.js";import"./Layer-BDdUxbHF.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./Label-DsxuCRwy.js";import"./ZIndexLayer-DiTXvVi3.js";import"./types-Dyd5Crad.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-k8-aBSGQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
