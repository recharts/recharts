import{c as e}from"./iframe-Bw01G05S.js";import{g as s}from"./zIndexSlice-BVJPDscV.js";import{C as p}from"./ComposedChart-DiZxKxJ7.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-khQZXWx3.js";import{X as d}from"./XAxis-TrLbUf6y.js";import{Y as l}from"./YAxis-leBvxI0P.js";import{R as h}from"./ReferenceArea-CvHjnz77.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-vKd3rXCH.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./get-PLF287kI.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./isWellBehavedNumber-BdaQsoH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./axisSelectors-CYrXIzpV.js";import"./d3-scale-C81Lq6p_.js";import"./CartesianChart-CmfxvnV2.js";import"./chartDataContext-DTGe0ZBk.js";import"./CategoricalChart-CJ_zmDdd.js";import"./CartesianAxis-D2bv38Ox.js";import"./Layer-_mE6wvdm.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./Label-0YWOaiFB.js";import"./ZIndexLayer-CUHrFVWb.js";import"./types-BkmoQN99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BFTblrQi.js";import"./useAnimationId-DfklYMDy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
