import{R as e}from"./iframe-BX5cRibr.js";import{R as n}from"./zIndexSlice-AZuYl_vp.js";import{C as p}from"./ComposedChart-ySsto5-f.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BEN8mmtg.js";import{X as f}from"./XAxis-DwJ67tbd.js";import{Y as l}from"./YAxis-LHNvPj5J.js";import{L as d}from"./Line-Ble_dEe_.js";import{R as h}from"./ReferenceLine-HQq0i9Up.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zmqWqRK4.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./Label-DaxsWVsm.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DB2Kv5XX.js";import"./step-DSSF95ZQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm8c3RW5.js";import"./useAnimationId-CcWR-JA_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
