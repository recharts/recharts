import{R as e}from"./iframe-DsxZlU5r.js";import{R as a}from"./zIndexSlice-C9X4WKOn.js";import{C as p}from"./ComposedChart-DanorgSA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-MyFoq73o.js";import{X as f}from"./XAxis-CYz9D79b.js";import{Y as l}from"./YAxis-BnTqZW5t.js";import{L as d}from"./Line-35w6scH_.js";import{R as h}from"./ReferenceLine-Caue83e9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-txR9uiFl.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwO2SplL.js";import"./axisSelectors-BqZ8E3_i.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./CartesianAxis-xh5AQvWr.js";import"./Layer-C9CQXPgt.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./Label-W_BNIllg.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./types-DNLq32QI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CSIe3S-R.js";import"./step-Dj6yUh6h.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0Io6hoN.js";import"./useAnimationId-BTOaFYFg.js";import"./ActivePoints-BMZtXxjb.js";import"./Dot-CitZKaHy.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getRadiusAndStrokeWidthFromDot-Ddp4bide.js";import"./ActiveShapeUtils-DWfz214x.js";import"./useGraphicalItemIdentity-DcyTJT25.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
