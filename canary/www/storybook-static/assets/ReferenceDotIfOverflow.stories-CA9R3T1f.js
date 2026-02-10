import{e}from"./iframe-BJmj21Iv.js";import{R as n}from"./arrayEqualityCheck-DUr5Baor.js";import{C as s}from"./ComposedChart-Qt-NTGDC.js";import{C as p}from"./CartesianGrid-C729DxfB.js";import{X as c}from"./XAxis-B-U8Jsdu.js";import{Y as f}from"./YAxis-BnZN_5Sd.js";import{R as l}from"./ReferenceDot-DSOBJuG2.js";import{R as h}from"./RechartsHookInspector-niLfVp7l.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbAa2EPs.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./CartesianAxis-BAnw5oBq.js";import"./Layer-CfTs1qEr.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./Label-B5aPNwUF.js";import"./ZIndexLayer-h8hw7e3y.js";import"./types-BB2yvksg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C-sAwJUZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
