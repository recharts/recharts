import{R as e}from"./iframe-v0-Os2yM.js";import{R as a}from"./zIndexSlice-_iZ3OTIR.js";import{C as p}from"./ComposedChart-COVjVMYb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B_mQPiyV.js";import{X as f}from"./XAxis-DNiYKSvx.js";import{Y as l}from"./YAxis-CgkQKIAn.js";import{L as d}from"./Line-CMP1V8O2.js";import{R as h}from"./ReferenceLine-CCjWM7Yz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./throttle-CSC07CA1.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./RechartsWrapper-DpMxjJPI.js";import"./axisSelectors-Db_FhKX_.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dv-uHWFd.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./CartesianAxis-BkO3xjcX.js";import"./Layer--oy12MjQ.js";import"./Text-CJd7Lo81.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./Label-DI0UjsSd.js";import"./types-BJeT-aZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-NJea3yIB.js";import"./step-DpC9Q9rs.js";import"./path-DyVhHtw_.js";import"./LabelList-lSE4rpjb.js";import"./ActivePoints-B5HER2Lt.js";import"./Dot-D0cTKtS9.js";import"./activeStyles-CbGGlVk2.js";import"./useAnimationId-CXPH24GZ.js";import"./dataEntryStyles-DfwnSxIB.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./ErrorBarContext-Dj2syV2g.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getRadiusAndStrokeWidthFromDot-BkVmaDqw.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
