import{R as e}from"./iframe-RDkqVuG2.js";import{R as n}from"./zIndexSlice-C4ZKGTQh.js";import{C as p}from"./ComposedChart-n_pkeOwP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B2a8Q35-.js";import{X as f}from"./XAxis-DEACd4mi.js";import{Y as l}from"./YAxis-4GVW-TXE.js";import{L as d}from"./Line-DDxM7FUn.js";import{R as h}from"./ReferenceLine-D15yb1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-tJ0TJl6x.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./get-qTOI2Rj3.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./Label-kl9r3lv0.js";import"./ZIndexLayer-ChplAtHB.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Um8FGkl9.js";import"./step-23ddn8am.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wlRh2tbg.js";import"./useAnimationId-DWgEGQGL.js";import"./ActivePoints-C4TTqOg4.js";import"./Dot-Dlo4cfNs.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./ErrorBarContext-DhtRtcJb.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getRadiusAndStrokeWidthFromDot-ClHmJg6B.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
