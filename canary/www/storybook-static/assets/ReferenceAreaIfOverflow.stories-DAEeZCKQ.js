import{e}from"./iframe-DvRa5dgx.js";import{R as s}from"./arrayEqualityCheck-Bp8MITA_.js";import{C as p}from"./ComposedChart-BwcJtZel.js";import{C as c}from"./CartesianGrid-RFV0CIne.js";import{X as f}from"./XAxis-B9F7R6N6.js";import{Y as l}from"./YAxis-CxgNkaty.js";import{R as h}from"./ReferenceArea-CF8gZj7K.js";import{R as d}from"./RechartsHookInspector-BA8H9BQA.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMf934kH.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./zIndexSlice-DOVBAap6.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./CartesianAxis-EG33R3Ra.js";import"./Layer-D1P67DdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./Label-Btvu6YdH.js";import"./ZIndexLayer-DYz5TQmP.js";import"./types-B9z2jnxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BNOkSbEV.js";import"./useAnimationId-BFi3XFtV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
