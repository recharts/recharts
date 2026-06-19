import{R as e}from"./iframe-C7jIZL6o.js";import{R as s}from"./zIndexSlice-BnlSqkDK.js";import{C as p}from"./ComposedChart-BKTk_vyX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CZbDpfb8.js";import{X as d}from"./XAxis-CTYxjOVZ.js";import{Y as l}from"./YAxis-w5VbFl9t.js";import{R as h}from"./ReferenceArea-62pF4dy0.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BOr4g5Y7.js";import"./index-B3xQbeZu.js";import"./index-Bovuavvd.js";import"./get-H_VCaiK7.js";import"./resolveDefaultProps-DUb7sDlC.js";import"./isWellBehavedNumber-C3vUk83l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dl0_CiQp.js";import"./index-B-BRc6T6.js";import"./index-B9TBnend.js";import"./renderedTicksSlice-Birh5NDk.js";import"./axisSelectors-EwOPdfxu.js";import"./d3-scale-CRcY7xoU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DrR5EsNs.js";import"./chartDataContext-CAMuJJ0l.js";import"./CategoricalChart-CUzYs4pg.js";import"./CartesianAxis-iRUdZDvI.js";import"./Layer-BCVE1kDT.js";import"./Text-olerkQs4.js";import"./DOMUtils-yTKptuJ8.js";import"./Label-D0um-vtH.js";import"./ZIndexLayer-BRAdfR1Z.js";import"./types-DLi_I9qn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CRO6EB0t.js";import"./useAnimationId-B6ozUAwY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
