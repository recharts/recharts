import{R as e}from"./iframe-C_T02oQn.js";import{R as n}from"./zIndexSlice-PaMIo_4H.js";import{C as s}from"./ComposedChart-D2veWJ82.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-JkXasBLp.js";import{X as f}from"./XAxis-9hDWnVEM.js";import{Y as l}from"./YAxis-CAA9Sn25.js";import{R as d}from"./ReferenceDot-LGpQK05d.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B6lblpQa.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./get-C7erGA50.js";import"./resolveDefaultProps-m_js62KJ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./CategoricalChart-DJkiCneY.js";import"./CartesianAxis-Du2JQot0.js";import"./Layer-DjmjZ8nK.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./Label-PISAROHv.js";import"./ZIndexLayer-BEphblF2.js";import"./types-BgdJMLXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BqWNwI4e.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
