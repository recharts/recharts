import{c as e}from"./iframe-CR5xUcH4.js";import{g as s}from"./zIndexSlice-Coakq-0y.js";import{C as p}from"./ComposedChart-DbazSM9x.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DwdQhCQQ.js";import{X as d}from"./XAxis-CPvIxoVT.js";import{Y as l}from"./YAxis-7a5sZdUx.js";import{R as h}from"./ReferenceArea-DHhmXKtD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./get-CdpBIjqV.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./CartesianAxis-CM2xAnRM.js";import"./Layer-DDAYqTxx.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./Label-gV3sJO-c.js";import"./ZIndexLayer-Br2sJvd3.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-IJojDNZ6.js";import"./useAnimationId-qfC-4EnL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
