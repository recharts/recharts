import{R as e}from"./iframe-DsM5Snoh.js";import{R as n}from"./zIndexSlice-Bw64GR0n.js";import{C as s}from"./ComposedChart-CAcZP5zH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CR69ad4g.js";import{X as f}from"./XAxis-BP59MRl4.js";import{Y as l}from"./YAxis-AiKtCrqX.js";import{R as d}from"./ReferenceDot-8nIwT2kr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxJwdddW.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./CartesianAxis-CVbxoQSN.js";import"./Layer-DJ-_hZeS.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./Label-COWFM_3h.js";import"./ZIndexLayer-8J4UOhVH.js";import"./types-C3s_AHHw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-F9GzLPgD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
