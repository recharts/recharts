import{R as e}from"./iframe-n-o_GhOg.js";import{R as m}from"./zIndexSlice-rH1Vz5Mp.js";import{C as p}from"./ComposedChart-B569yWTF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BW163_LZ.js";import{X as f}from"./XAxis-D3N7JqFL.js";import{Y as l}from"./YAxis-CMjiedBc.js";import{R as d}from"./ReferenceDot-DNGXf9ND.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C59GD_w_.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_cU67sC5.js";import"./axisSelectors-CZyPeZLC.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./CartesianAxis-_Tflg6Fj.js";import"./Layer-DpixjnOX.js";import"./Text-SNR8n6Fx.js";import"./DOMUtils-c7gF72Lb.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./Label-CNUZ8IJr.js";import"./ZIndexLayer-RuyYCT_q.js";import"./types-D19g2GXX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-NFpTkrs-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
