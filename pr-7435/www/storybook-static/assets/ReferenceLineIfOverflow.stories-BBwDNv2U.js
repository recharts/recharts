import{R as e}from"./iframe-h_l55m_t.js";import{R as n}from"./zIndexSlice-DtOJxrcv.js";import{C as p}from"./ComposedChart-BAup3dHc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DnUZu_hk.js";import{X as f}from"./XAxis-CsptUwef.js";import{Y as l}from"./YAxis-Db6yYFWM.js";import{L as d}from"./Line-7LYQCCSG.js";import{R as h}from"./ReferenceLine-Ce84kj6j.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-3kgM1Yrm.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./get-DBMd4dxk.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./renderedTicksSlice-CmHU-lei.js";import"./axisSelectors-DWvAkDEO.js";import"./d3-scale-D1BOaHId.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./CategoricalChart-sP3BCXGi.js";import"./CartesianAxis-CTJIWXoj.js";import"./Layer-rrxq_JkN.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./Label-Biqo5Eli.js";import"./ZIndexLayer-D7uTd8cS.js";import"./types-7ZgAaUHx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BUDj-vjw.js";import"./step-D8_8cE93.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMyeCqfp.js";import"./useAnimationId-Dn6PcdJm.js";import"./ActivePoints-BgXP9QSv.js";import"./Dot-CN1BxqM7.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getRadiusAndStrokeWidthFromDot-BDAvmvPt.js";import"./ActiveShapeUtils-DIPFKhPu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
