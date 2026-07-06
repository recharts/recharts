import{R as e}from"./iframe-7XJ2xcaa.js";import{R as s}from"./zIndexSlice-Smyg0ZdR.js";import{C as p}from"./ComposedChart-CsOZpoaR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C_KCMoN3.js";import{X as d}from"./XAxis-C1fpfCfO.js";import{Y as l}from"./YAxis-BG1hFypZ.js";import{R as h}from"./ReferenceArea-LmtwXN5G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D4811UcH.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./d3-scale-BuuUT6V5.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./CartesianAxis-OiUDsUEB.js";import"./Layer-BGcXXZrK.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./Label-kaLCkxIc.js";import"./ZIndexLayer-CzQjP_gg.js";import"./types-CCvMXBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BCPFxxTI.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
