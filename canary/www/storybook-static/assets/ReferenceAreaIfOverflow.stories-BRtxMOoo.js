import{R as e}from"./iframe-CMIMGlWj.js";import{R as p}from"./zIndexSlice-wuzXiITR.js";import{C as s}from"./ComposedChart-m-Ee8JHE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-3hhx0pRp.js";import{X as d}from"./XAxis-D-eD-ZKH.js";import{Y as l}from"./YAxis-QT5bDNHN.js";import{R as h}from"./ReferenceArea-BGhF5Nsd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./ZIndexLayer-D_EAZsge.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BZX9uaas.js";import"./useAnimationId-x76x2OiL.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
