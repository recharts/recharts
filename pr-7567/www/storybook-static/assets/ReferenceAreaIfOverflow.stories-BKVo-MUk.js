import{R as e}from"./iframe-C99kJ-sM.js";import{R as s}from"./zIndexSlice-C3R-krej.js";import{C as p}from"./ComposedChart-DWJvatn-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D2bYDD2A.js";import{X as d}from"./XAxis-DIG4p09Q.js";import{Y as l}from"./YAxis-CdUPhVFa.js";import{R as h}from"./ReferenceArea-qtW2uo6-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TD-ujZZS.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./renderedTicksSlice-C63jCstw.js";import"./axisSelectors-D_vl6hBR.js";import"./d3-scale-BK39mUYh.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./CartesianAxis-C7o0Dblf.js";import"./Layer-DA9YNkXX.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./Label-B5axae2p.js";import"./ZIndexLayer-Cja0J2zA.js";import"./types-DQRiSjSa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-CL3tFVAP.js";import"./useAnimationId-DvmTFhVR.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
