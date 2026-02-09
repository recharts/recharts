import{e}from"./iframe-B5r3cecm.js";import{R as s}from"./arrayEqualityCheck-Czqc1yJH.js";import{C as p}from"./ComposedChart-C_4RZTQj.js";import{C as c}from"./CartesianGrid-DNHyoKf7.js";import{X as f}from"./XAxis-BkMRDr4M.js";import{Y as l}from"./YAxis-TYBY8JO1.js";import{R as h}from"./ReferenceArea-D_ES0xDR.js";import{R as d}from"./RechartsHookInspector-DV5jRegM.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CS6LSkHo.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./CartesianAxis-Xf3h13YN.js";import"./Layer-5sA9M2a_.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./Label-CuwvUyc2.js";import"./ZIndexLayer-CK5fYLk5.js";import"./types-0ytZb3l6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CEg1ZuEo.js";import"./useAnimationId-BDFPsv26.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkOLfLi3.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
