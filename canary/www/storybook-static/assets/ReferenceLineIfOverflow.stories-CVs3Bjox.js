import{R as e}from"./iframe-B0MhV86h.js";import{R as a}from"./zIndexSlice-JhYmjiRs.js";import{C as p}from"./ComposedChart-Bh5N048-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cz0GsxYj.js";import{X as f}from"./XAxis-mSUHawKI.js";import{Y as l}from"./YAxis-fXjE14Qf.js";import{L as d}from"./Line-CWasAWgS.js";import{R as h}from"./ReferenceLine-CCFzGMPI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BiG1uYFs.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_6wPZYR.js";import"./axisSelectors-CrrgMfKB.js";import"./d3-scale-CR10n00v.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./Label-DtBWxW0-.js";import"./ZIndexLayer-OiTLfYLd.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BkmryfS-.js";import"./step-D52lSMQ-.js";import"./path-DyVhHtw_.js";import"./activeStyles-DryRBlXh.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./useEffectiveDataKey-DkWEBp9n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
