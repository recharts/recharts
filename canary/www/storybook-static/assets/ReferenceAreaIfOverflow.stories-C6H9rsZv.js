import{R as e}from"./iframe-DyrNzYfG.js";import{R as s}from"./zIndexSlice-BxcBivH8.js";import{C as p}from"./ComposedChart-CU6tXOSz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BOQAsPrY.js";import{X as d}from"./XAxis-BfZ0zCU8.js";import{Y as l}from"./YAxis-D2470_wO.js";import{R as h}from"./ReferenceArea-DdNJqpZT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cm4al6R2.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./get-cagOI5AH.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./CartesianAxis-DqWwR38e.js";import"./Layer-BL2D6iSn.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./Label-mQIBMRk4.js";import"./ZIndexLayer-BkddZKJi.js";import"./types-DDNG0zv9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CK9rNIIm.js";import"./useAnimationId-AVj-rcCC.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
