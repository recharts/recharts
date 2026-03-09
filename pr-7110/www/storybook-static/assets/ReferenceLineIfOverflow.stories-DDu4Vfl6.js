import{e}from"./iframe-CE_u6gw7.js";import{R as n}from"./arrayEqualityCheck-DrWQ_zH1.js";import{C as p}from"./ComposedChart-BtdcIjSh.js";import{C as s}from"./CartesianGrid-Cc4ioig5.js";import{X as c}from"./XAxis-CLmHv_2r.js";import{Y as f}from"./YAxis-Bs0Yklvo.js";import{L as l}from"./Line-C8DzJEYg.js";import{R as d}from"./ReferenceLine-DaXoAgl-.js";import{R as h}from"./RechartsHookInspector-Dl79BROd.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./immer-B4lMi1z1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6u2BPsd.js";import"./index-CxjNEs9W.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./d3-scale-DJKgZxBp.js";import"./zIndexSlice-BphKS-MH.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./CartesianAxis-CWIyTumo.js";import"./Layer-DWHUvPCA.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./Label-B0RF5qp9.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./types-BY4GBGia.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DKt0JvWb.js";import"./ActivePoints-hrEYGtat.js";import"./Dot-CRKbFyPB.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./ErrorBarContext-Cf8SIugI.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./useAnimationId-Ey9rpLv3.js";import"./getRadiusAndStrokeWidthFromDot-CYfIvNV9.js";import"./ActiveShapeUtils-bsQr1W6P.js";import"./isPlainObject-B1Oby2ns.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CJD0TK60.js";import"./Trapezoid-3IU8o-1x.js";import"./Sector-DrGniStY.js";import"./Symbols-BcL7Z710.js";import"./symbol-CRUhxG3e.js";import"./step-CYcDECZ0.js";import"./Curve-VV1uNtUT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BnKoqAo2.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./OffsetShower-Dg42jmMc.js";import"./PlotAreaShower-Dg2xDHUw.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
