import{R as e}from"./iframe-CCA1dLWD.js";import{R as p}from"./zIndexSlice-Bqs-eJ8p.js";import{C as s}from"./ComposedChart-DGmL1PWR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DNUfTvW9.js";import{X as d}from"./XAxis-B02ZLuLQ.js";import{Y as l}from"./YAxis-DVlxFbm5.js";import{R as h}from"./ReferenceArea-DgOWlMgf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3xpLLdH.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DAFAxP68.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./CartesianAxis-ClD0AQ8W.js";import"./Layer-CmH8ISrU.js";import"./Text-Cxmc4hoL.js";import"./DOMUtils-B9q-UHbd.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./Label-C7jyVHZg.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./types-B2426EfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DTCXmGfs.js";import"./useAnimationId-BZsPKArS.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
