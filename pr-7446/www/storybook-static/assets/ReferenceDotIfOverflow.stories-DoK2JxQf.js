import{R as e}from"./iframe-DR9JYvo9.js";import{R as n}from"./zIndexSlice-C8us_33i.js";import{C as s}from"./ComposedChart-DKmeLx_e.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BcdMj9Ha.js";import{X as f}from"./XAxis-CkTBv7Vq.js";import{Y as l}from"./YAxis-njpk2nvi.js";import{R as d}from"./ReferenceDot-B2FzhwId.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BibliqvJ.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./get-cu4HmN_G.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./Label-De6_no0_.js";import"./ZIndexLayer-BgzJVSii.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-CdELZcZx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
