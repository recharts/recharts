import{R as e}from"./iframe-COd9kUku.js";import{R as n}from"./zIndexSlice-BfP4v1bS.js";import{C as p}from"./ComposedChart-Vvr56aGu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CgOmeVcK.js";import{X as f}from"./XAxis-B5YW1-Pp.js";import{Y as l}from"./YAxis-Bz97xI6z.js";import{L as d}from"./Line-C6DX3tAD.js";import{R as h}from"./ReferenceLine-CUUDdGB8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5ro8HE4Y.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./d3-scale-uQ_gA658.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./CartesianAxis-DNJooG1E.js";import"./Layer-riiSoJFM.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./Label-BfhUPh9D.js";import"./ZIndexLayer-06cimeo-.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C2nwlVhI.js";import"./step-C5ZSArS6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-RKe26m0b.js";import"./useAnimationId-xpwU92YM.js";import"./ActivePoints-ZUmLEJxd.js";import"./Dot-DFTXaHC9.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getRadiusAndStrokeWidthFromDot-BduJCXYw.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
