import{R as e}from"./iframe-DktoyP0I.js";import{R as n}from"./zIndexSlice-BqxjHKrS.js";import{C as p}from"./ComposedChart-BDFJsZWU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CKU87Pn6.js";import{X as f}from"./XAxis-BxV59Hhm.js";import{Y as l}from"./YAxis-BLG3LfpU.js";import{L as d}from"./Line-DuA8ymif.js";import{R as h}from"./ReferenceLine-BOzJGHcR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-yOjEFYCA.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./get-DZQ4X22M.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./CartesianAxis-DrMR96cw.js";import"./Layer-DxVIdqTA.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./Label-BR89T_1_.js";import"./ZIndexLayer-CSsqT-BM.js";import"./types-CkRwSSe-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BuI6DO-B.js";import"./step-8xNYZUMK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-cIeOyNA6.js";import"./useAnimationId-Dyo3RN72.js";import"./ActivePoints-DwkLjVpS.js";import"./Dot-C1QvqJ8t.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./ErrorBarContext-CKA9kOcR.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getRadiusAndStrokeWidthFromDot-ByATIymF.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
