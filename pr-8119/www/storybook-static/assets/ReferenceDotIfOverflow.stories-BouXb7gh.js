import{R as e}from"./iframe-CNzr7bRc.js";import{R as m}from"./zIndexSlice-BXquQra7.js";import{C as s}from"./ComposedChart-CHYxJs3d.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BBE-PR7v.js";import{X as f}from"./XAxis-BqePxvtA.js";import{Y as l}from"./YAxis-B3tsMqyp.js";import{R as d}from"./ReferenceDot-DOV2yCIm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eALPB1-k.js";import"./throttle-D60XWAz6.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./RechartsWrapper-BDCqiBvb.js";import"./axisSelectors-Cj1w7XZO.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaY54_t1.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./Text-DNGP5VRJ.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./Label-DK5ffKtI.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CUKZE6AE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
