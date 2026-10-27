import{R as e}from"./iframe-B87OnEHe.js";import{R as p}from"./zIndexSlice-CayLxsD5.js";import{C as s}from"./ComposedChart-CPmtdHf0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-2Uj5TCaq.js";import{X as d}from"./XAxis-P4dvE_Lf.js";import{Y as l}from"./YAxis-CIV2IRSG.js";import{R as h}from"./ReferenceArea-BnqwEHOO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./RechartsWrapper-C4kU4M5n.js";import"./axisSelectors-DZJywaTf.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./Label-CCuY2Era.js";import"./dataEntryStyles-B54Iq7xi.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-XssNjNyZ.js";import"./useAnimationId-DHS0idNw.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
