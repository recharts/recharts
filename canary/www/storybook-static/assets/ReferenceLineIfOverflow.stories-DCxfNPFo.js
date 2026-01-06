import{e}from"./iframe-CKmpfOpL.js";import{R as n}from"./arrayEqualityCheck-CGTamc7H.js";import{C as p}from"./ComposedChart-CicuSwT1.js";import{C as s}from"./CartesianGrid-Cq5KhU9R.js";import{X as c}from"./XAxis-BBRqfJxe.js";import{Y as f}from"./YAxis-ho-us9Q5.js";import{L as l}from"./Line-DaQHc97g.js";import{R as d}from"./ReferenceLine-DC7_iR40.js";import{R as h}from"./RechartsHookInspector-DZtkbE0Z.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./PolarUtils-BmD-XZwK.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./zIndexSlice-CQqF6s7B.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./CartesianAxis-DmTSqBS2.js";import"./Layer-DhYkCEVl.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./Label-DnuO6Rjq.js";import"./ZIndexLayer-B_sQwTbu.js";import"./types-BLY5tRwt.js";import"./ReactUtils-BXryAzdD.js";import"./ActivePoints-ClWX87Gp.js";import"./Dot-CHqdM_F0.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./ErrorBarContext-gRwVRTek.js";import"./GraphicalItemClipPath-78XXJvtR.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./useAnimationId-DzZ8q-8e.js";import"./getRadiusAndStrokeWidthFromDot-DvxIC_MO.js";import"./ActiveShapeUtils-DCJZv5Uu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_zs00yx.js";import"./Trapezoid-PdOQHAco.js";import"./Sector-DbmZtSEy.js";import"./Symbols-CFHhg7rN.js";import"./Curve-Bys97J5V.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
