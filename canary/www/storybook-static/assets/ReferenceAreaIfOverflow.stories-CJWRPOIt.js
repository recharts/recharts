import{e}from"./iframe-BJmj21Iv.js";import{R as s}from"./arrayEqualityCheck-DUr5Baor.js";import{C as p}from"./ComposedChart-Qt-NTGDC.js";import{C as c}from"./CartesianGrid-C729DxfB.js";import{X as f}from"./XAxis-B-U8Jsdu.js";import{Y as l}from"./YAxis-BnZN_5Sd.js";import{R as h}from"./ReferenceArea-B0VGs5Ar.js";import{R as d}from"./RechartsHookInspector-niLfVp7l.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbAa2EPs.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./CartesianAxis-BAnw5oBq.js";import"./Layer-CfTs1qEr.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./Label-B5aPNwUF.js";import"./ZIndexLayer-h8hw7e3y.js";import"./types-BB2yvksg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BtPz-Bf1.js";import"./useAnimationId-BtjxpnPj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
