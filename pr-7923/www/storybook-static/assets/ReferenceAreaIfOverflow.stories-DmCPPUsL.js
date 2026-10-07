import{R as e}from"./iframe-BMzdo2OO.js";import{R as p}from"./zIndexSlice-ChqivVgc.js";import{C as s}from"./ComposedChart-DSKFy6An.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Da3I8a2m.js";import{X as d}from"./XAxis-D0FZw3tk.js";import{Y as l}from"./YAxis-BNMn58Qu.js";import{R as h}from"./ReferenceArea-ClzWJpIx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./Label-DXGFYQ6y.js";import"./ZIndexLayer-J0q0oOXM.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CYGVySvu.js";import"./useAnimationId-DMkWUgfv.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
