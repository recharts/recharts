import{R as e}from"./iframe-BFFmTTDr.js";import{R as p}from"./zIndexSlice-DQM058wc.js";import{C as s}from"./ComposedChart-SSXf6_RY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-27H1Xe6J.js";import{X as d}from"./XAxis-CUKTZ0Q0.js";import{Y as l}from"./YAxis-zUGAKEHc.js";import{R as h}from"./ReferenceArea-CzVek-Bj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C1mDwWe8.js";import"./index-B0ZyvmjF.js";import"./index-p_2WOCPr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4cHyrTj.js";import"./isWellBehavedNumber-EAZXLIW4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-W63MnO3r.js";import"./axisSelectors-BasDhOYS.js";import"./d3-scale-CB2_PHYv.js";import"./index-DQJjMFyh.js";import"./index-BkJjG_2i.js";import"./renderedTicksSlice-CucX-QZC.js";import"./index-C0jb6csl.js";import"./CartesianChart-lCgugd9d.js";import"./chartDataContext-CP53CgNH.js";import"./CategoricalChart-mbieolFi.js";import"./CartesianAxis-nbQLlPRi.js";import"./Layer-BuPOal-_.js";import"./Text-m1jHD_i9.js";import"./DOMUtils-DhZiPaLo.js";import"./useId-ByStve5U.js";import"./useBackwardsCompatibleTheme-EBoDvW3e.js";import"./Label-CVuMucY6.js";import"./ZIndexLayer-V0Jr5gGg.js";import"./types-CeA3gQcd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BKcyOIbb.js";import"./useAnimationId-CSU3KRrf.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
