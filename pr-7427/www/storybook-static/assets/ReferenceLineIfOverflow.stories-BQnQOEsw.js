import{R as e}from"./iframe-gLXjAGh2.js";import{R as n}from"./zIndexSlice-BiRgg5Ku.js";import{C as p}from"./ComposedChart-JJ7W0sdT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B_jcyNg_.js";import{X as f}from"./XAxis-DwB13nw6.js";import{Y as l}from"./YAxis-sdrrSkAr.js";import{L as d}from"./Line-CYHfJ8Mx.js";import{R as h}from"./ReferenceLine-C21HHxVe.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-JN2QralJ.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./get-Qcb7JOLO.js";import"./resolveDefaultProps-CF7N32I5.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./renderedTicksSlice-xzybHrTF.js";import"./axisSelectors-CZIlY7LR.js";import"./d3-scale-Ce8TMAGR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./CartesianAxis-FCBmPftJ.js";import"./Layer-BmcxLaEj.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./Label-CJgHZQsX.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./types-BTt0M0gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D6HNQ0fs.js";import"./step-DHNiqqKo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BahKKeqN.js";import"./useAnimationId-Cl5wMxi-.js";import"./ActivePoints-gwX5g1ZR.js";import"./Dot-B_5lkSZo.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getRadiusAndStrokeWidthFromDot--8r5PZrP.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
