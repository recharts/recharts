import{e}from"./iframe-5gSlIHH4.js";import{R as s}from"./arrayEqualityCheck-BEqt-CBJ.js";import{C as p}from"./ComposedChart-Bu_3gnIH.js";import{C as c}from"./CartesianGrid-cQLUWQqD.js";import{X as f}from"./XAxis-CJFZHxba.js";import{Y as l}from"./YAxis-BedJogos.js";import{R as h}from"./ReferenceArea-DsOYTh-8.js";import{R as d}from"./RechartsHookInspector-DIk6ks1k.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6JQB65s.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./zIndexSlice-BvmJeHFk.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./CartesianAxis-BR-I9vbL.js";import"./Layer-OyNvh1Ue.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./Label-A5hrmEss.js";import"./ZIndexLayer-CgtyelTd.js";import"./types-D2uPaQlB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CsjrTG3t.js";import"./useAnimationId-CiuthG3f.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BT-ezfJz.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
