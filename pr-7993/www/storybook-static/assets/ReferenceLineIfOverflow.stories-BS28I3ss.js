import{R as e}from"./iframe-CXO7LpG4.js";import{R as a}from"./zIndexSlice-DfFYBEeE.js";import{C as p}from"./ComposedChart-CX86GF1x.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BQWzY8ya.js";import{X as f}from"./XAxis-BMVFXruj.js";import{Y as l}from"./YAxis-DOeYdqQk.js";import{L as d}from"./Line-CZ0CBwDd.js";import{R as h}from"./ReferenceLine-UOj3hmK3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaNNjE4n.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sOQIHtEN.js";import"./axisSelectors-PR70UCKy.js";import"./d3-scale-DchtYoFX.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-C9lYrgEX.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./CartesianAxis-C3NdPzIM.js";import"./Layer-D31-Hvub.js";import"./Text-CQgXuSK-.js";import"./pageBackground-C22aj54-.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./Label-CPCjl1xH.js";import"./ZIndexLayer-8oHJlBan.js";import"./types-B806ejcH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B0_ANcrk.js";import"./step-4HDWVyZ1.js";import"./path-DyVhHtw_.js";import"./activeStyles-BJ4YqvBn.js";import"./useAnimationId-BbnDDjkN.js";import"./dataEntryStyles-VHSSmKTo.js";import"./ActivePoints-D48l0kHu.js";import"./Dot-zqLpNykC.js";import"./ErrorBarContext-DEed49-o.js";import"./GraphicalItemClipPath-Bdz9TeZ1.js";import"./SetGraphicalItem-DftB5RCs.js";import"./getRadiusAndStrokeWidthFromDot-CRQLZCgz.js";import"./ActiveShapeUtils-B5MsqJFC.js";import"./useEffectiveDataKey-B0ZkPejj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
