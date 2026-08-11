import{R as e}from"./iframe-NVmT8fNw.js";import{R as s}from"./zIndexSlice-oXJaNZSv.js";import{C as p}from"./ComposedChart-Dt5Lfngq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DKoVBLjh.js";import{X as d}from"./XAxis-hjQAsG8m.js";import{Y as l}from"./YAxis-C2Jyljrh.js";import{R as h}from"./ReferenceArea-C8P3DfG3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cfz3FXws.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./isWellBehavedNumber-DXLqj9yd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./axisSelectors-tCKXm7jn.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./CategoricalChart-Dxp6zY9P.js";import"./CartesianAxis-CwxpTfpR.js";import"./Layer-BD2Ls3O_.js";import"./Text-C5xVRdeB.js";import"./DOMUtils-CDTGDYSn.js";import"./RechartsThemeContext-awS4vi70.js";import"./Label-DfDRyr69.js";import"./ZIndexLayer-B6fWtNzq.js";import"./types-DCTQ4Lzc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DMIOlDxR.js";import"./useAnimationId-d1ULQyIN.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
