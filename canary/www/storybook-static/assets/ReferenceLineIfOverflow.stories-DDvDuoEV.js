import{R as e}from"./iframe-CmqkAU55.js";import{R as n}from"./zIndexSlice-DttPm2yG.js";import{C as p}from"./ComposedChart-B_dZznJ_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DMSAsOQ5.js";import{X as f}from"./XAxis-iMrKHVYZ.js";import{Y as l}from"./YAxis-DokLpr5R.js";import{L as d}from"./Line-DushgwKA.js";import{R as h}from"./ReferenceLine-CGufz7RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-45H0AIAq.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CdZHTDnE.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./CartesianAxis--fgQsGIr.js";import"./Layer-JlYR6W_Z.js";import"./Text-DFCCUK93.js";import"./DOMUtils-DDl9EDuG.js";import"./Label-CI9Aa94q.js";import"./ZIndexLayer-B8NE7f7O.js";import"./types-DD7WKq2Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C9_zddkn.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CGQeDOz5.js";import"./step-CxyVRtQl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CEenLt2d.js";import"./useAnimationId-DOKlurUN.js";import"./ActivePoints-DX-T5XFy.js";import"./Dot-BQXlip-b.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./ErrorBarContext-BQBXXX5z.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./getRadiusAndStrokeWidthFromDot-h0JWGKQ2.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
