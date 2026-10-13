import{R as e}from"./iframe-B33Y4kOs.js";import{R as a}from"./zIndexSlice-BV8vqz-A.js";import{C as p}from"./ComposedChart-C6iXQW_F.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Da9JiP4m.js";import{X as f}from"./XAxis-D7BTfG5w.js";import{Y as l}from"./YAxis-DoRVJcGp.js";import{L as d}from"./Line-BF6bp28v.js";import{R as h}from"./ReferenceLine-DzCitagY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dx9BFaqt.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4BmCMdI.js";import"./axisSelectors-CPTmOT_R.js";import"./d3-scale-BRwhKw_2.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index--PM34IXj.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./CartesianAxis-CldRPjzS.js";import"./Layer-DI-mGCka.js";import"./Text-CnUdOxIr.js";import"./pageBackground-CmnWJfG9.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./Label-DQnbTFco.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./types-cCXzDmUf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CcWZ_EFW.js";import"./step-CvwqDq2P.js";import"./path-DyVhHtw_.js";import"./activeStyles-VptiM0EE.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./ActivePoints-DMCMMH9m.js";import"./Dot-BLVwwgSv.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getRadiusAndStrokeWidthFromDot-BCAZrIZb.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./useEffectiveDataKey-BxhkF0gV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
