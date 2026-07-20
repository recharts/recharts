import{R as e}from"./iframe-C99kJ-sM.js";import{R as n}from"./zIndexSlice-C3R-krej.js";import{C as s}from"./ComposedChart-DWJvatn-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D2bYDD2A.js";import{X as f}from"./XAxis-DIG4p09Q.js";import{Y as l}from"./YAxis-CdUPhVFa.js";import{R as d}from"./ReferenceDot-CPBOR_Qy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TD-ujZZS.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./renderedTicksSlice-C63jCstw.js";import"./axisSelectors-D_vl6hBR.js";import"./d3-scale-BK39mUYh.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./CartesianAxis-C7o0Dblf.js";import"./Layer-DA9YNkXX.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./Label-B5axae2p.js";import"./ZIndexLayer-Cja0J2zA.js";import"./types-DQRiSjSa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-BDIAoW-L.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
