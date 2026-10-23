import{R as e}from"./iframe-Daqq5Gjo.js";import{R as a}from"./zIndexSlice-BPRhy0xE.js";import{C as p}from"./ComposedChart-nQXSo27c.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BrsktYCO.js";import{X as f}from"./XAxis-BQYmhAVN.js";import{Y as l}from"./YAxis-DuMidNRF.js";import{L as d}from"./Line-BUz4FFba.js";import{R as h}from"./ReferenceLine-P1PYV8su.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWDQ4DPb.js";import"./index-b63f_pX_.js";import"./index-TeDug2B7.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B2-XJuyk.js";import"./isWellBehavedNumber-D9gMW2_W.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DaLU39bO.js";import"./axisSelectors-CxfQkhDh.js";import"./d3-scale-CqOqSRGC.js";import"./index-aYBLVk0i.js";import"./index-DrcM2r0T.js";import"./renderedTicksSlice-CgHqHKUq.js";import"./index-_CQPpMIB.js";import"./CartesianChart-CsvRURM2.js";import"./chartDataContext-BsJkFnDQ.js";import"./CategoricalChart-DFQLj_IQ.js";import"./CartesianAxis-C_4O2on1.js";import"./Layer-ypMbTgoN.js";import"./Text-CnYREx4K.js";import"./pageBackground-CQ6SoF4P.js";import"./useId-Zrpp900Y.js";import"./useBackwardsCompatibleTheme-NW4H3-d4.js";import"./Label-BEbt6EJA.js";import"./ZIndexLayer-CsxY4uLP.js";import"./dataEntryStyles-D69McnEv.js";import"./types-t5uFUre1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BTl2XcXk.js";import"./step-CMbaEgxT.js";import"./path-DyVhHtw_.js";import"./activeStyles-CfAxM8dt.js";import"./useAnimationId-DHlojTvw.js";import"./ActivePoints-C4gCSMjf.js";import"./Dot-BB5hopw1.js";import"./RegisterGraphicalItemId-DR1l3pXT.js";import"./ErrorBarContext-DV8sm0DW.js";import"./GraphicalItemClipPath-CdmoWeX0.js";import"./SetGraphicalItem-B-kJZLux.js";import"./getRadiusAndStrokeWidthFromDot-BHbtIZis.js";import"./ActiveShapeUtils-C9mR-tcp.js";import"./useEffectiveDataKey-P6ZrBAcn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
