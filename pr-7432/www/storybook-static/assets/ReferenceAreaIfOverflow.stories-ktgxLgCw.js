import{R as e}from"./iframe-QMSevZ_Z.js";import{R as s}from"./zIndexSlice-CqmMHsGQ.js";import{C as p}from"./ComposedChart-BanYSBKC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-uhk3J4Lq.js";import{X as d}from"./XAxis-C0cN_JCK.js";import{Y as l}from"./YAxis-CX1GPX_T.js";import{R as h}from"./ReferenceArea-CCh69keJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CSWl79hr.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./get-Dt9ZBUsD.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./Label-CDZiRvSt.js";import"./ZIndexLayer-CEBsGFM8.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-lJXzMoVm.js";import"./useAnimationId-DlcOUKTA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
