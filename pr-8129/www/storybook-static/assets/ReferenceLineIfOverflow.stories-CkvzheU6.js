import{R as e}from"./iframe-BvC_nX2I.js";import{R as a}from"./zIndexSlice-Deux2KLj.js";import{C as p}from"./ComposedChart-D6o-RTOM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SNfuGx3f.js";import{X as f}from"./XAxis-DJblgq_P.js";import{Y as l}from"./YAxis-Dnd7ECK6.js";import{L as d}from"./Line-DlYE1LdE.js";import{R as h}from"./ReferenceLine-CIHQ5Q-t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DT691zhh.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./RechartsWrapper-YXBLwPUp.js";import"./axisSelectors-D1Op89Ra.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./Label-CNqVbewr.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CZGVPI6N.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./path-DyVhHtw_.js";import"./LabelList-CRaDVB5f.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./activeStyles-D5yKyFeN.js";import"./useAnimationId-CfSQBeBZ.js";import"./dataEntryStyles-DH8AExSk.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./ErrorBarContext-p-ctGfT-.js";import"./SetGraphicalItem-P596Nxos.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,ue as __namedExportsOrder,xe as default};
