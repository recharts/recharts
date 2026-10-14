import{R as e}from"./iframe-Cy0y2ns8.js";import{R as p}from"./zIndexSlice-DIpYS2pc.js";import{C as s}from"./ComposedChart-CZFSAvco.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-vQeV11Fy.js";import{X as d}from"./XAxis-I6ByZryQ.js";import{Y as l}from"./YAxis-CsAJfuiU.js";import{R as h}from"./ReferenceArea-CQZ75i_o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tnntysZI.js";import"./axisSelectors-B794UmHN.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./Label-VahG2YbD.js";import"./ZIndexLayer-DfeIwWxW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BAcsN_iB.js";import"./useAnimationId-DaE5gtmK.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
