import{R as e}from"./iframe-CThZUbdE.js";import{R as n}from"./zIndexSlice-BDry6QRp.js";import{C as p}from"./ComposedChart-BYeWN0El.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CxJg4bzA.js";import{X as f}from"./XAxis-Czxsq92a.js";import{Y as l}from"./YAxis-COnF85r4.js";import{L as d}from"./Line-PXaX8gsH.js";import{R as h}from"./ReferenceLine-Uq1za3Lu.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-6NPp0ZGq.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./get-VHoxVJrE.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./CartesianAxis-BM-bncSs.js";import"./Layer-C1XMVqEx.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./Label-CE0t5kQZ.js";import"./ZIndexLayer-LL2CdfOc.js";import"./types-BBvrAdrd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CddvI1GC.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-PV5URjHV.js";import"./useAnimationId-DzTn0J9i.js";import"./ActivePoints-NvSpkC2T.js";import"./Dot-n9UR6iqn.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getRadiusAndStrokeWidthFromDot-CteGZ8Gy.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
