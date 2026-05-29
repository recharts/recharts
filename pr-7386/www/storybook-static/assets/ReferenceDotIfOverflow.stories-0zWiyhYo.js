import{c as e}from"./iframe-DmBQ8HMz.js";import{g as n}from"./zIndexSlice-DIRHIjeL.js";import{C as s}from"./ComposedChart-DNElitZJ.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DF0OJWzH.js";import{X as f}from"./XAxis-BaDVYnrk.js";import{Y as l}from"./YAxis-D8ss-GGA.js";import{R as d}from"./ReferenceDot-C2ExSZE-.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvETSy6i.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./get-Ckx5uNL8.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./Label-C1M61kae.js";import"./ZIndexLayer-eAbRrt0r.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-nij0AL23.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
