import{R as e}from"./iframe-FwppTpHM.js";import{R as a}from"./zIndexSlice-Cdyw1_Nw.js";import{C as p}from"./ComposedChart-B8bgAvdx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-_rwk_E_z.js";import{X as f}from"./XAxis-Dfnm77SQ.js";import{Y as l}from"./YAxis-XAPAfHiU.js";import{L as d}from"./Line-LRONPAn4.js";import{R as h}from"./ReferenceLine-CepjbS6i.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DynP12Or.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm03yWw.js";import"./axisSelectors-CYDcyh2t.js";import"./d3-scale-CvbHukpk.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-BJCItLgT.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./CartesianAxis-DkQ_2z38.js";import"./Layer-RexR8ZVM.js";import"./Text-BHYGaRJX.js";import"./pageBackground-b_qu_h6D.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./Label-CAlmg9Ax.js";import"./ZIndexLayer-DRZokez8.js";import"./types-X--Y4OUw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DWgCdSwb.js";import"./step-CMSN2AEQ.js";import"./path-DyVhHtw_.js";import"./activeStyles-BjBEPVwb.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./ActivePoints-Dq2ONYdH.js";import"./Dot-DDum5Zjk.js";import"./ErrorBarContext-DXeoB9w9.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getRadiusAndStrokeWidthFromDot-C9HuDRcP.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./useEffectiveDataKey-edM5h020.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
