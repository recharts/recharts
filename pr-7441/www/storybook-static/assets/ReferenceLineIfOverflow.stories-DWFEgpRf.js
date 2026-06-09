import{R as e}from"./iframe-DDZvWz04.js";import{R as n}from"./zIndexSlice-Dl_4acsk.js";import{C as p}from"./ComposedChart-DP1ubrAE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BOvGQ8vv.js";import{X as f}from"./XAxis-Dq8ay66-.js";import{Y as l}from"./YAxis-DzAaZg6g.js";import{L as d}from"./Line-gYyeMRzs.js";import{R as h}from"./ReferenceLine-DyhHLZjS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DcmssRfV.js";import"./index-DmZKUkji.js";import"./index-BmsWrTVR.js";import"./get-Dd2obrAg.js";import"./resolveDefaultProps-BL5_8bl7.js";import"./isWellBehavedNumber-BqwSOCro.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgX57Ihb.js";import"./index-DdYDVMgh.js";import"./index-DEl5rper.js";import"./renderedTicksSlice-D1_yHzJs.js";import"./axisSelectors-M3yg6AJ9.js";import"./d3-scale-BmewetN_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C1c9k30X.js";import"./chartDataContext-hTPBvtpR.js";import"./CategoricalChart-DTcOD6T5.js";import"./CartesianAxis-CHHSHG1a.js";import"./Layer-C4SWy0Ia.js";import"./Text-dGyvvmq0.js";import"./DOMUtils-EJWG7PRQ.js";import"./Label-Cyb3kyRK.js";import"./ZIndexLayer-Dxkr3Ydq.js";import"./types-Du07Jl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-sIzeAZHK.js";import"./step-BEPub2ZD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJruvPbG.js";import"./useAnimationId-CXggq5FE.js";import"./ActivePoints-VMcsu_Fc.js";import"./Dot-CtB54zVw.js";import"./RegisterGraphicalItemId-CPL9aXD0.js";import"./ErrorBarContext-BYuEjy_F.js";import"./GraphicalItemClipPath-1JKRh9Qz.js";import"./SetGraphicalItem-DQRf2yyu.js";import"./getRadiusAndStrokeWidthFromDot-Ba3A1cdU.js";import"./ActiveShapeUtils-C9HYZ7qc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
