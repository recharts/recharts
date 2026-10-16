import{R as e}from"./iframe-Dgm4gy-U.js";import{R as p}from"./zIndexSlice-CiwacDpC.js";import{C as s}from"./ComposedChart-ByttuQ_a.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DYn3gq4M.js";import{X as d}from"./XAxis-CfrEw3PN.js";import{Y as l}from"./YAxis-mX4prg2G.js";import{R as h}from"./ReferenceArea-Ba-TKw4p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zAOqa1T8.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./axisSelectors-mj5UOSEK.js";import"./d3-scale-CRCwBtC_.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./CartesianAxis-B7Oepgsg.js";import"./Layer-BihfHLDn.js";import"./Text-8gs2XgOQ.js";import"./pageBackground-Cm2lHn8y.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./Label-D7CpXrZ4.js";import"./ZIndexLayer-IYsblH0Q.js";import"./types-BUhHmnCY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-jgrU2osW.js";import"./useAnimationId-Bq4IYhf5.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
