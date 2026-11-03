import{R as e}from"./iframe-DfQVKpWf.js";import{R as a}from"./zIndexSlice-BRoA5zbQ.js";import{C as p}from"./ComposedChart-UT8hODIU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bl5PtFny.js";import{X as f}from"./XAxis--NVg5Wna.js";import{Y as l}from"./YAxis-DMHv-5gA.js";import{L as d}from"./Line-DBhsIsTX.js";import{R as h}from"./ReferenceLine-CvZaTHWi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./throttle-D0VENALV.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./RechartsWrapper-CbT_vqZg.js";import"./axisSelectors-nkYWEth-.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC9kPgul.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./renderedTicksSlice-COJW81My.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./CartesianAxis-bSSjBH_Z.js";import"./Layer-Dxd39IZi.js";import"./Text-BguVyW-T.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./Label-Dx4XJGMM.js";import"./types-B0IgcrJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BjBiMZvK.js";import"./step-BYgu61ra.js";import"./path-DyVhHtw_.js";import"./LabelList-BjeX7Zh8.js";import"./ActivePoints-BKczNKsQ.js";import"./Dot-BJaFOnh2.js";import"./activeStyles-BlB0_IoV.js";import"./useAnimationId-Co3_Oxtg.js";import"./dataEntryStyles-pydJZJI0.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./ErrorBarContext-DMnuYRqA.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getRadiusAndStrokeWidthFromDot-BVeK6Pqm.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./useEffectiveDataKey-BuvFv_YU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
