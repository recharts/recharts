import{R as e}from"./iframe-BZg1zG5B.js";import{R as n}from"./zIndexSlice-CkkPSViG.js";import{C as p}from"./ComposedChart-Czc2DQcq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-u5mMmC7M.js";import{X as f}from"./XAxis-BFO1dJFq.js";import{Y as l}from"./YAxis-CworNICM.js";import{L as d}from"./Line-DHT37We-.js";import{R as h}from"./ReferenceLine-RhBKE9Iv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFHrPmFV.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CI_HL12t.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyRofC5m.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./axisSelectors-CZQj26DE.js";import"./d3-scale-CHbHYnH2.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./CartesianAxis-CqYm8UKw.js";import"./Layer-AM2ZERM9.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./Label-D1KCxb60.js";import"./ZIndexLayer-oU6a0KMz.js";import"./types-CP45QuEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BscR4dmI.js";import"./step-DGy1Mip9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C9XnYXoB.js";import"./useAnimationId-D8zRqkvh.js";import"./ActivePoints-kipmWAm6.js";import"./Dot-BCNxr43y.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./ErrorBarContext-HRURTUgd.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./getRadiusAndStrokeWidthFromDot-Wk5YU4K6.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
