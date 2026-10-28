import{R as e}from"./iframe-B5-NOQ5t.js";import{R as a}from"./zIndexSlice-CRh8M764.js";import{C as p}from"./ComposedChart-Cs-WfBMv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BsxI9W-f.js";import{X as f}from"./XAxis-BFljSmnb.js";import{Y as l}from"./YAxis-BxGdoYHh.js";import{L as d}from"./Line-DcgWWTAC.js";import{R as h}from"./ReferenceLine-CKngTXdV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./throttle-BmJCRGcn.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./RechartsWrapper-DlDVaHKU.js";import"./axisSelectors-CoB8fX7y.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BV3y_nyi.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./CartesianAxis-BQONH3FI.js";import"./Layer-vSXC9HFp.js";import"./Text-B1H13EKo.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./Label-Buxp0onk.js";import"./types-BMOXg_-b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-JcmdhaiD.js";import"./step-CC8FisnC.js";import"./path-DyVhHtw_.js";import"./LabelList-D_E_aw3e.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./activeStyles-DCKEH4qZ.js";import"./useAnimationId-CsdMGkaP.js";import"./dataEntryStyles-DTbCoLqH.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./ErrorBarContext-x4ks4uU4.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
