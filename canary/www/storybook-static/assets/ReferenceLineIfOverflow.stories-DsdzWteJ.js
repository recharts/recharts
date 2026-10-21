import{R as e}from"./iframe-CQZPQf4O.js";import{R as a}from"./zIndexSlice-BxTiYWdU.js";import{C as p}from"./ComposedChart-BrH5TOj4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-9KogdII6.js";import{X as f}from"./XAxis-vMRVH8Ao.js";import{Y as l}from"./YAxis-BXIOSjAZ.js";import{L as d}from"./Line-DjUB_QE1.js";import{R as h}from"./ReferenceLine-BihHsZGB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-AnGuXVWW.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./axisSelectors-Or82bYZb.js";import"./d3-scale-Dh160Q_7.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./Label-CwpPaPRc.js";import"./ZIndexLayer-BKLTAFCk.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CEf8Z_wT.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
