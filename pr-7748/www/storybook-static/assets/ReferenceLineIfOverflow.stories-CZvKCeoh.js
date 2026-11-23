import{R as e}from"./iframe-B5lEY8zD.js";import{R as a}from"./zIndexSlice-BgROAb6p.js";import{C as p}from"./ComposedChart-Bet3bhVW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DEJZ4SeJ.js";import{X as f}from"./XAxis-DFQPNyZu.js";import{Y as l}from"./YAxis-B84b5tRH.js";import{L as d}from"./Line-UBoMUVJK.js";import{R as h}from"./ReferenceLine-B8w1a9OP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./axisSelectors-BghrQiEU.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./Label-BcoGvPAa.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./ErrorBarContext-BW17ZVEc.js";import"./SetGraphicalItem-BlbgEltH.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
