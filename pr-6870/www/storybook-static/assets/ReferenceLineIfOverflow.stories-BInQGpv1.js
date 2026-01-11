import{e}from"./iframe-BMyqBDY5.js";import{R as n}from"./arrayEqualityCheck-DuyxfREv.js";import{C as p}from"./ComposedChart-3iTOeyaD.js";import{C as s}from"./CartesianGrid-DttEQ19N.js";import{X as c}from"./XAxis-DrX_bmOT.js";import{Y as f}from"./YAxis-gYPGT0Um.js";import{L as l}from"./Line-I26hMkxG.js";import{R as d}from"./ReferenceLine-SD1olL2U.js";import{R as h}from"./RechartsHookInspector-B_A0Uap_.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./CartesianAxis-zlmGf0lm.js";import"./Layer-DWAVkTpZ.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./Label-Cc8j6S_C.js";import"./ZIndexLayer-BHQIN7jK.js";import"./types-C28cLjqk.js";import"./ReactUtils-DZSdNGLK.js";import"./ActivePoints-lrJOuCF1.js";import"./Dot-DwmjpDDG.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./ErrorBarContext-MN1I2Bli.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./useAnimationId-MgACKJ1I.js";import"./getRadiusAndStrokeWidthFromDot-CRLHMYWi.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MMr5z6jI.js";import"./Trapezoid-DUIbc0mY.js";import"./Sector-Dnl75ukO.js";import"./Symbols-DAD_VKXg.js";import"./Curve-CP_WuQoJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
