import{e}from"./iframe-Dq2D9WMR.js";import{g as s}from"./zIndexSlice-CMIgpwRl.js";import{C as p}from"./ComposedChart-Ctt5r4_8.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-Cf14918y.js";import{X as d}from"./XAxis-BEqsZJa-.js";import{Y as l}from"./YAxis-CJVhWVm-.js";import{R as h}from"./ReferenceArea-B-FBjxAI.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./CartesianAxis-9djuB4O0.js";import"./Layer-CNg3jf3H.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./Label-DafpBHua.js";import"./ZIndexLayer-BazpBvjE.js";import"./types-C93vTFKm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BslqwIXI.js";import"./useAnimationId-uSyAtuoQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
