import{c as e}from"./iframe-eXOzs3YY.js";import{g as s}from"./zIndexSlice-CuY-7AxA.js";import{C as p}from"./ComposedChart-zMtNTxE8.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DrtA-ndd.js";import{X as d}from"./XAxis-25xD-jfg.js";import{Y as l}from"./YAxis-DwsIXpqe.js";import{R as h}from"./ReferenceArea-BMsqhUnN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DwC3AsAE.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./get-DyNLp3_i.js";import"./resolveDefaultProps-DFOijNU4.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./CartesianAxis-DRLBBJED.js";import"./Layer-VPMddfpg.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./Label-A2hDBNkM.js";import"./ZIndexLayer-NeCcTin-.js";import"./types-ty1UrU8J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-B8la5sgf.js";import"./useAnimationId-B5pCqy41.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
