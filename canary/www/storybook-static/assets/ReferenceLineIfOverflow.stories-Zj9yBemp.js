import{R as e}from"./iframe-7ITK_SeI.js";import{R as a}from"./zIndexSlice-Bfez01E7.js";import{C as p}from"./ComposedChart-CXRmBdio.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-g2z_7of-.js";import{X as f}from"./XAxis-B6K6oeNG.js";import{Y as l}from"./YAxis-DKQSRoB1.js";import{L as d}from"./Line-CaFC4Px9.js";import{R as h}from"./ReferenceLine-DJOXDxgl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./axisSelectors-BYlSNMl6.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./CartesianAxis-P1lu35Vw.js";import"./Layer-x5ioE0yr.js";import"./Text-uEM3tCf7.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./Label-CsN2_Owm.js";import"./types-CwLExx_V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-SIwN0AJD.js";import"./step-DDoJ0d0M.js";import"./path-DyVhHtw_.js";import"./LabelList-DyQMPI8I.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./activeStyles-CTNWVDS5.js";import"./useAnimationId-DKK7KP9l.js";import"./dataEntryStyles-Dd39-khT.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./ErrorBarContext-Ch69wvN-.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,ue as __namedExportsOrder,xe as default};
