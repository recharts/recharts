import{R as e}from"./iframe-CVu8zrUS.js";import{R as s}from"./zIndexSlice-Bq6bmQlp.js";import{C as p}from"./ComposedChart-DxlxWjOw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CYdjKJuY.js";import{X as d}from"./XAxis-Cmp_u62X.js";import{Y as l}from"./YAxis-CbExEBw4.js";import{R as h}from"./ReferenceArea-ChWrcsIz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./throttle-DhpuiNc1.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./RechartsWrapper-BMgc3fuA.js";import"./axisSelectors-Sot67Aim.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BfJtYZLb.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./Label-Cx8AJG-1.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BixLzELc.js";import"./useAnimationId-HRjjYmjj.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
