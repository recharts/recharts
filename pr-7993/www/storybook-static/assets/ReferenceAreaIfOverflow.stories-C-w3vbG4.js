import{R as e}from"./iframe-CXO7LpG4.js";import{R as p}from"./zIndexSlice-DfFYBEeE.js";import{C as s}from"./ComposedChart-CX86GF1x.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BQWzY8ya.js";import{X as d}from"./XAxis-BMVFXruj.js";import{Y as l}from"./YAxis-DOeYdqQk.js";import{R as h}from"./ReferenceArea-BxzIb2OP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaNNjE4n.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sOQIHtEN.js";import"./axisSelectors-PR70UCKy.js";import"./d3-scale-DchtYoFX.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-C9lYrgEX.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./CartesianAxis-C3NdPzIM.js";import"./Layer-D31-Hvub.js";import"./Text-CQgXuSK-.js";import"./pageBackground-C22aj54-.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./Label-CPCjl1xH.js";import"./ZIndexLayer-8oHJlBan.js";import"./types-B806ejcH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CsIBLxAK.js";import"./useAnimationId-BbnDDjkN.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
