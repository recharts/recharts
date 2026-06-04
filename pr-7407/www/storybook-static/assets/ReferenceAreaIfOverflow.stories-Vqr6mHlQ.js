import{R as e}from"./iframe-cxp8IH44.js";import{R as s}from"./zIndexSlice-DVvPLO9J.js";import{C as p}from"./ComposedChart-1IEnSR6b.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CDO8L1GF.js";import{X as d}from"./XAxis-BkiXq_ih.js";import{Y as l}from"./YAxis-cx-UkRCp.js";import{R as h}from"./ReferenceArea-BdR9GBlM.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpTgB28d.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./get-nRRBkHtC.js";import"./resolveDefaultProps-BXDigy9W.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./CategoricalChart-xGtZpTrE.js";import"./CartesianAxis-HJMOOyg_.js";import"./Layer-B0Ha3WJZ.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./Label-C4cvj6qY.js";import"./ZIndexLayer-jeREbB3U.js";import"./types-CPiShJxU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-ktcnKzBw.js";import"./useAnimationId-B_RJXvak.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
