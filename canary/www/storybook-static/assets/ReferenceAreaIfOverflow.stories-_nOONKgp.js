import{R as e}from"./iframe-CuGhPmlk.js";import{R as s}from"./zIndexSlice-BOf55cXv.js";import{C as p}from"./ComposedChart-BaRxWhmE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dm2DOXaA.js";import{X as d}from"./XAxis-CKjURUro.js";import{Y as l}from"./YAxis-DLBgWodt.js";import{R as h}from"./ReferenceArea-BI9iKM4C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./RechartsWrapper-CkD6y7S6.js";import"./axisSelectors-Bzh2qDn8.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./Label-B62wTY7D.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CA1kt8UJ.js";import"./useAnimationId-DwU2Zwh7.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
