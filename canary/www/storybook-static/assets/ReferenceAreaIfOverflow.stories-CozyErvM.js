import{R as e}from"./iframe-D7yt-ZhS.js";import{R as s}from"./zIndexSlice-B3_xMC6k.js";import{C as p}from"./ComposedChart-Bl4WegRH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-NZR0fGHL.js";import{X as d}from"./XAxis-dYNJxVBm.js";import{Y as l}from"./YAxis-C5MIsZgm.js";import{R as h}from"./ReferenceArea-xqcNb95j.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-HxqS16dW.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./get-Cebs6l6-.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./CartesianAxis-CuPdOLrD.js";import"./Layer-B34T8oTs.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./Label-C0p1CWe9.js";import"./ZIndexLayer-BjlE0UF2.js";import"./types-CuLQosun.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-KnaRg_aq.js";import"./useAnimationId-gSm0_FsD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
