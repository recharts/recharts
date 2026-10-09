import{R as e}from"./iframe-B-SNMp2P.js";import{R as a}from"./zIndexSlice-MJVhEUVa.js";import{C as p}from"./ComposedChart-CkeRhKHK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BboA69Qq.js";import{X as f}from"./XAxis-DbFPHXfw.js";import{Y as l}from"./YAxis-Cm6hvxXf.js";import{L as d}from"./Line-COMV_M1P.js";import{R as h}from"./ReferenceLine-DV6XEG_S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gPNydgch.js";import"./axisSelectors-_pmBWC24.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./CartesianAxis-D1aWQaVv.js";import"./Layer-CVSv3BXM.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./Label-yF0NhCgr.js";import"./ZIndexLayer-DTIKWgf_.js";import"./types-BNVaobqj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CJXjFqV6.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-Mi-zOF.js";import"./useAnimationId-CiVfXoZZ.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
