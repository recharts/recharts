import{R as e}from"./iframe-Bcp8O5w9.js";import{R as n}from"./zIndexSlice-D89hrw0J.js";import{C as p}from"./ComposedChart-BTnoYdrr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B6HQ76qh.js";import{X as f}from"./XAxis-BiaLRW8b.js";import{Y as l}from"./YAxis-BfwBAog7.js";import{L as d}from"./Line-D5QNWWOp.js";import{R as h}from"./ReferenceLine-UUT50zB1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAyQB-br.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./CartesianAxis-BtWjjBG7.js";import"./Layer-be5X0p7R.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./Label-hDShUpMs.js";import"./ZIndexLayer-DGoKIl_r.js";import"./types-BoqxM4LK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CliZJ8qV.js";import"./step-BcSwTyGL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dei1yN9c.js";import"./useAnimationId-BscNfyQw.js";import"./ActivePoints-PTULrlcl.js";import"./Dot-Chi-tYTx.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getRadiusAndStrokeWidthFromDot-CozuNNm5.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
