import{R as e}from"./iframe-B89lyy_-.js";import{R as a}from"./zIndexSlice-BefUx2Nd.js";import{C as p}from"./ComposedChart-BsssixLG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B0LoWWAc.js";import{X as f}from"./XAxis-CSc3N7hL.js";import{Y as l}from"./YAxis-CnBxKCbE.js";import{L as d}from"./Line-_gevD_1B.js";import{R as h}from"./ReferenceLine-QzS1R5uh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CABzBelW.js";import"./throttle-BZuMAyb2.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./RechartsWrapper-VgXxR9hf.js";import"./axisSelectors-DR4qXUjK.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgC9WZfP.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./Label-C15axuMc.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-3TxFGWdO.js";import"./step-BRjfFT26.js";import"./path-DyVhHtw_.js";import"./LabelList-6ZaFDz_R.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./activeStyles-CQvoijJ0.js";import"./useAnimationId-CrfHw1CS.js";import"./dataEntryStyles-C4pyloN-.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./ErrorBarContext-CHzFixYj.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
