import{R as e}from"./iframe-3EJ0a-7l.js";import{R as n}from"./zIndexSlice-c2FXiYNl.js";import{C as p}from"./ComposedChart-D-953FuV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-RxuE0wOS.js";import{X as f}from"./XAxis-C3QGe7ZQ.js";import{Y as l}from"./YAxis-DWgMRUiY.js";import{L as d}from"./Line-C2MKmrJp.js";import{R as h}from"./ReferenceLine-9S4vho1W.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CPX4UzZG.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./renderedTicksSlice-gv74no8c.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./CartesianAxis-Bfa5m128.js";import"./Layer-DpkyIzcZ.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./Label-C0w-bdKA.js";import"./ZIndexLayer-DNvDkown.js";import"./types-CU0G9DUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BO7dzXGY.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_aFnnDci.js";import"./useAnimationId-BfMO6PtV.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
