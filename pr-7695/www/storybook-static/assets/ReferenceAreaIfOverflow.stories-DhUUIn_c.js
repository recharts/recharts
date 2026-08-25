import{R as e}from"./iframe-DqR9Wcc8.js";import{R as p}from"./zIndexSlice-xGZRRsol.js";import{C as s}from"./ComposedChart-mWNBd2dn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DnLHzwag.js";import{X as d}from"./XAxis-D6ZHtCxW.js";import{Y as l}from"./YAxis-aADwIUIe.js";import{R as h}from"./ReferenceArea-dyqmVJ1O.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Die-14D_.js";import"./index-CbJoLlYH.js";import"./index-D7HcE4ER.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CE9KWHQ7.js";import"./isWellBehavedNumber-CwOhzfGR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1r2IRn89.js";import"./index-BM32474r.js";import"./index-Dri9MlSm.js";import"./axisSelectors-C4f15nEZ.js";import"./d3-scale-CAWaFyWJ.js";import"./renderedTicksSlice-D_2jrhVU.js";import"./CartesianChart-sKen-XIs.js";import"./chartDataContext-CtOkxvrA.js";import"./CategoricalChart-IMV6Cr9c.js";import"./CartesianAxis-1hhq5YML.js";import"./Layer-DIEU6Rsu.js";import"./Text-CCjVuIgd.js";import"./DOMUtils-gqBnduPC.js";import"./useId-DKdBWodA.js";import"./useBackwardsCompatibleTheme-CwCCGp3S.js";import"./Label-BYPDwyti.js";import"./ZIndexLayer-CGt7Qqz1.js";import"./types-CwWmwHzD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-rLnjQriQ.js";import"./useAnimationId-BRWCn8G_.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
