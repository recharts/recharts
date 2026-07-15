import{R as e}from"./iframe-BcyvxDDm.js";import{R as s}from"./zIndexSlice-CjqwPb4I.js";import{C as p}from"./ComposedChart-C6Y2kg6Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-r9xfU8Bh.js";import{X as d}from"./XAxis-hKqegIsy.js";import{Y as l}from"./YAxis-DWNExzo5.js";import{R as h}from"./ReferenceArea-D4p3ZToJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Da4mYIun.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DYK2TugC.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./Label-DKWc-r2Z.js";import"./ZIndexLayer-O4JEDRQM.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Df6t51Wj.js";import"./useAnimationId-UCivMRaV.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
