import{R as e}from"./iframe-CjYP3ojB.js";import{R as s}from"./zIndexSlice-Cy7CLl9Z.js";import{C as p}from"./ComposedChart-Bpv-zdhu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DU9XZ5iM.js";import{X as d}from"./XAxis-Blplutoc.js";import{Y as l}from"./YAxis-Bt-Cr0Xc.js";import{R as h}from"./ReferenceArea-DjiXHMtF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./RechartsWrapper-UTu-k1rT.js";import"./axisSelectors-CPJSjERY.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./Label-CaJS6zCA.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Cr5lBSuf.js";import"./useAnimationId-C3slNkW8.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
