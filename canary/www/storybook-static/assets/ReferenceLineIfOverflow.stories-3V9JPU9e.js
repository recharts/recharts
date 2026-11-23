import{R as e}from"./iframe-rIGtWy7o.js";import{R as a}from"./zIndexSlice-eSFvIDPB.js";import{C as p}from"./ComposedChart-R6AzKio4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-KlYM2iOH.js";import{X as f}from"./XAxis-DpQ4g3Lr.js";import{Y as l}from"./YAxis-CD9Zrxmn.js";import{L as d}from"./Line-BfyEqFnX.js";import{R as h}from"./ReferenceLine-zZoZU8tb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CESzkdGA.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./RechartsWrapper-CnGTSvJE.js";import"./axisSelectors-DWDjUcOc.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./CartesianAxis-DicS6pKh.js";import"./Layer-BDOLwd71.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./Label-BEKXXJOd.js";import"./types-BNwRi5Vr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Curve-DqTam_xv.js";import"./step-CBJGjOOI.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BBWs-HQj.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./activeStyles-CzQ969KV.js";import"./useAnimationId-BWpujR0E.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./ErrorBarContext-B8qTxBlT.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
