import{R as e}from"./iframe-83g2bT9h.js";import{R as a}from"./zIndexSlice-CfRH_Gkg.js";import{C as p}from"./ComposedChart-MoKKZ9CA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CMZ2k9Kj.js";import{X as f}from"./XAxis-CPLb-uD7.js";import{Y as l}from"./YAxis-DKEYM08g.js";import{L as d}from"./Line-D5Z7nKk5.js";import{R as h}from"./ReferenceLine-wriO9DJf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4AZ4DRQb.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpxedNkM.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p2KZrAJR.js";import"./axisSelectors-C8tSZ6WQ.js";import"./d3-scale-CVvcmCdK.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-D-OQyWuZ.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./Text-DUBqVL79.js";import"./pageBackground-DKLyt_8U.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./Label-DfuHALhb.js";import"./ZIndexLayer-DeHUv8B_.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BzUWFYb9.js";import"./step-BklymoVp.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdFniEfO.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./ActivePoints-DPZpTkVA.js";import"./Dot-CmrA2XZR.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getRadiusAndStrokeWidthFromDot-CQHfNXLK.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./useEffectiveDataKey-B2aQWgd3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
