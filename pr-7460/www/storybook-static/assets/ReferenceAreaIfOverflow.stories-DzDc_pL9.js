import{R as e}from"./iframe-D-d0UxKx.js";import{R as s}from"./zIndexSlice-BzS2rwPG.js";import{C as p}from"./ComposedChart-CxbWr-tb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C8-alLqA.js";import{X as d}from"./XAxis-D-U3c8PB.js";import{Y as l}from"./YAxis-AsX76kO1.js";import{R as h}from"./ReferenceArea-BQmwPBM7.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bcymh1Oy.js";import"./index-hrPGNLyo.js";import"./index-Ch_o8Zsm.js";import"./get-DvwB2phC.js";import"./resolveDefaultProps-BULhiKbt.js";import"./isWellBehavedNumber-Cwzb-39K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eUO8gZBV.js";import"./index-BFabSAMq.js";import"./index-CSjSfLNV.js";import"./renderedTicksSlice-Dhujer-i.js";import"./axisSelectors-gJCz_NoR.js";import"./d3-scale-CAmzDAEa.js";import"./CartesianChart-CfHu0MoO.js";import"./chartDataContext-SgkfnsQg.js";import"./CategoricalChart-_USPwHCV.js";import"./CartesianAxis-BYNBLpS-.js";import"./Layer-DoiILNSz.js";import"./Text-BFbCMtys.js";import"./DOMUtils-BKfb6-ez.js";import"./Label-1pCxWysR.js";import"./ZIndexLayer-ikBJbvxL.js";import"./types-CjTc4pGQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DBqM3f2v.js";import"./useAnimationId-TLS-J4It.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
