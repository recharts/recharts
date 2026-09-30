import{R as e}from"./iframe-CgcESoS_.js";import{R as p}from"./zIndexSlice-C9Cb6Bbs.js";import{C as s}from"./ComposedChart-WZ7M5LR1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-lHaZRYHs.js";import{X as d}from"./XAxis-DGXMp8Is.js";import{Y as l}from"./YAxis-Bq6E-73C.js";import{R as h}from"./ReferenceArea-B9X-TRRJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQ8B3fUq.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-veeYoS0W.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./axisSelectors-C7-DsMGo.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./index-C9UQ_w7z.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./CartesianAxis-CyNZQ6so.js";import"./Layer-Dw6zZzpv.js";import"./Text-BcEh6RFZ.js";import"./DOMUtils-Cw9s48Kn.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./Label-_q8lYILX.js";import"./ZIndexLayer-DED1yjXT.js";import"./types-8FiI2U_s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-C3dp6HRo.js";import"./useAnimationId-C9QrN9Yt.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
