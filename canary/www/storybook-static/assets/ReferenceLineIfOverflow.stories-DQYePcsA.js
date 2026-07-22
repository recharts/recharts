import{R as e}from"./iframe-DZAd3BLm.js";import{R as n}from"./zIndexSlice-DDhKiy1V.js";import{C as p}from"./ComposedChart-CXjXh9x0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-R5ihndfA.js";import{X as f}from"./XAxis-5nXxnrK2.js";import{Y as l}from"./YAxis-CI4kUv4b.js";import{L as d}from"./Line-CAxB2TgS.js";import{R as h}from"./ReferenceLine-Cn9s8NRN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CxrkEaDJ.js";import"./index-DpSoO6Ha.js";import"./index-Cx0mUDGV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D9KqOm2-.js";import"./isWellBehavedNumber-dz6lCIva.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3K_a1sL.js";import"./index-CrgUN8tp.js";import"./index-DE0KsAyL.js";import"./renderedTicksSlice-CX0U1NQS.js";import"./axisSelectors-BxAq0Acb.js";import"./d3-scale-CqJYvWj_.js";import"./CartesianChart-D6ylJNpo.js";import"./chartDataContext-qN5e6uaD.js";import"./CategoricalChart-CsBU8lh_.js";import"./CartesianAxis-Cc4EZfV0.js";import"./Layer-BfiQlN-H.js";import"./Text-Q1Wur-Yf.js";import"./DOMUtils-DWsppMFw.js";import"./Label-Dx7t0PWj.js";import"./ZIndexLayer-CmOHtK31.js";import"./types-CcoYjlf-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BGXYHzuU.js";import"./step-CHKBUDm2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C7LWLCES.js";import"./useAnimationId-CWfIJf2v.js";import"./ActivePoints-DJ9bpUbD.js";import"./Dot-DlyPxXLd.js";import"./RegisterGraphicalItemId-DxWgL3YR.js";import"./ErrorBarContext-BoJHJa4K.js";import"./GraphicalItemClipPath-CynJPOAi.js";import"./SetGraphicalItem-Bs1R-JeP.js";import"./getRadiusAndStrokeWidthFromDot-DGJvqL22.js";import"./ActiveShapeUtils-Tj5AoBDs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
