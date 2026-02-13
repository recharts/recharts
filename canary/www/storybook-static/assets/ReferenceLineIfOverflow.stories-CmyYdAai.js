import{e}from"./iframe-DDewu6bn.js";import{R as n}from"./arrayEqualityCheck-DXTExga0.js";import{C as p}from"./ComposedChart-A2O41DUS.js";import{C as s}from"./CartesianGrid-Bh2qCtop.js";import{X as c}from"./XAxis-8FAWklv8.js";import{Y as f}from"./YAxis-D9vEUw1w.js";import{L as l}from"./Line-Bn8-TD5I.js";import{R as d}from"./ReferenceLine-DtzVk_TD.js";import{R as h}from"./RechartsHookInspector-CD3vvvGL.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./CartesianAxis-D7kXIk58.js";import"./Layer-DqLbE6Uv.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./Label-J4ZfWAib.js";import"./ZIndexLayer-mUyPWZcK.js";import"./types-BJyKbQEz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DtjzxdpY.js";import"./ActivePoints-6rWUYf_F.js";import"./Dot-CCTp0i8d.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./useAnimationId-CjgQOJMR.js";import"./getRadiusAndStrokeWidthFromDot-dhATJ_xE.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./Symbols-DzJjx9Jp.js";import"./Curve-BBC21-sm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
