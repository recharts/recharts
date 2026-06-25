import{R as e}from"./iframe-Bbgfrsw7.js";import{R as s}from"./zIndexSlice-CQlXcDAc.js";import{C as p}from"./ComposedChart-D5u7NNSO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C9P6-ADH.js";import{X as d}from"./XAxis-B3CRQ6u6.js";import{Y as l}from"./YAxis-p6BAB9xn.js";import{R as h}from"./ReferenceArea-D4fNIMeF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BnwOCZg8.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./get-CGUpvFiU.js";import"./resolveDefaultProps-o6njxdDq.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./index-Dgahjeym.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./CartesianAxis-D1v9Dkeg.js";import"./Layer-8m_pE-_A.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./Label-BiRqfMN5.js";import"./ZIndexLayer-6gPnMOeu.js";import"./types-8gz_-wr5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Tqtw105A.js";import"./useAnimationId-DUfU26_x.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
