import{R as e}from"./iframe-DW88jlWE.js";import{R as p}from"./zIndexSlice-DVK4421h.js";import{C as s}from"./ComposedChart-CCOYdmsW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C75CGIfw.js";import{X as d}from"./XAxis-DR4MLdhh.js";import{Y as l}from"./YAxis-uwKRdj5s.js";import{R as h}from"./ReferenceArea-BucYSB9z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdwERQOb.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./axisSelectors-BvsqhHdG.js";import"./d3-scale-B9KsqEcg.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./Text-BEy-xjYS.js";import"./pageBackground-D5Jdtqol.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./Label-woFms0xV.js";import"./ZIndexLayer-NojUaQJi.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BTJIjFU2.js";import"./useAnimationId-CJ2VkiZA.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
