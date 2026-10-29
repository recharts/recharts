import{R as e}from"./iframe-DlbVoy8b.js";import{R as a}from"./zIndexSlice-DIPR8J8Q.js";import{C as p}from"./ComposedChart-kpOOzPnf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ba7QntMw.js";import{X as f}from"./XAxis-S-cm4cjH.js";import{Y as l}from"./YAxis-BhrY96Pd.js";import{L as d}from"./Line-BDb9qYvA.js";import{R as h}from"./ReferenceLine-BiTXVVh6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXzjMp61.js";import"./throttle-DlhUrerR.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./axisSelectors-C1oz2VfT.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wuSABge9.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./Text-D-UClZ_j.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./Label-Db_JATF8.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CwM7Cya8.js";import"./step-D9Q180Zj.js";import"./path-DyVhHtw_.js";import"./LabelList-DZdmLQwZ.js";import"./ActivePoints-nWjJ13Ya.js";import"./Dot-C73t_xwp.js";import"./activeStyles-68fYVlFc.js";import"./useAnimationId-69ly1h0S.js";import"./dataEntryStyles-CWf0jd4a.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./ErrorBarContext-DTMhIhTa.js";import"./SetGraphicalItem--R52djyG.js";import"./getRadiusAndStrokeWidthFromDot-BM1c-Ckc.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
