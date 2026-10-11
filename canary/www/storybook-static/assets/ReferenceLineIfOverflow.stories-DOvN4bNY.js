import{R as e}from"./iframe-3bLAQ3jn.js";import{R as a}from"./zIndexSlice-MjxnTwUQ.js";import{C as p}from"./ComposedChart-DG0emu8-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B0Gzkh02.js";import{X as f}from"./XAxis-CHp4l0kA.js";import{Y as l}from"./YAxis-CLk6Jkaa.js";import{L as d}from"./Line-BCzFaGb7.js";import{R as h}from"./ReferenceLine-NXjCd2rd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BuQ3fxbC.js";import"./index-awsJe2Eb.js";import"./index-xiU2DbNU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aDW5W-_U.js";import"./isWellBehavedNumber-BX_nblg7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7ESk0vAy.js";import"./axisSelectors-qjgTgHdP.js";import"./d3-scale-CEKTBlSM.js";import"./index-DCRVqNzU.js";import"./index-3A7c9_Pr.js";import"./renderedTicksSlice-C8ZppDJj.js";import"./index-6Ojv9TCM.js";import"./CartesianChart-C-eExA3r.js";import"./chartDataContext-DAaLengz.js";import"./CategoricalChart-DMmsyMWW.js";import"./CartesianAxis-aAySesk6.js";import"./Layer-BIgar30Y.js";import"./Text-DqxBCtXi.js";import"./pageBackground-2DSYbj3P.js";import"./useId-BfAkDmBs.js";import"./useBackwardsCompatibleTheme-CCnkHGsk.js";import"./Label-Dn58gwL2.js";import"./ZIndexLayer-DiKAWbLw.js";import"./types-DN7oIxRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CuK08rWF.js";import"./step-ATMA922b.js";import"./path-DyVhHtw_.js";import"./activeStyles-CAdLKBhw.js";import"./useAnimationId-Bz90LZyV.js";import"./dataEntryStyles-BmtIjxjW.js";import"./ActivePoints-Cx1YGcZP.js";import"./Dot-6DZHOl7o.js";import"./ErrorBarContext-CU2IPWFH.js";import"./GraphicalItemClipPath-DfyNoqlW.js";import"./SetGraphicalItem-DodAswVv.js";import"./getRadiusAndStrokeWidthFromDot-D9mbRMV7.js";import"./ActiveShapeUtils-D6QRbruv.js";import"./useGraphicalItemIdentity-mnMFiUCN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
