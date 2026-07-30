import{R as e}from"./iframe-BCd41l8E.js";import{R as s}from"./zIndexSlice-vwglsLr7.js";import{C as p}from"./ComposedChart-Ca4-q80H.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CjqtIjwN.js";import{X as d}from"./XAxis-B6fLtz1T.js";import{Y as l}from"./YAxis-HwtSiSZk.js";import{R as h}from"./ReferenceArea-Boo-uAj9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COzcAqD2.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./isWellBehavedNumber-By99v6ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./d3-scale-BUxy_yCJ.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./CartesianAxis-B_R0lNNU.js";import"./Layer-BlOdZtAq.js";import"./Text-rlFfv_Ik.js";import"./DOMUtils--ioWONbC.js";import"./Label-BGS-IakE.js";import"./ZIndexLayer-C4KPetXp.js";import"./types-CEIkXXH7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUnkOlSA.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DzQvr8Y1.js";import"./useAnimationId-CGoXgsW2.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
