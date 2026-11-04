import{R as e}from"./iframe-C1xjtyup.js";import{R as a}from"./zIndexSlice-CK_7sDhl.js";import{C as p}from"./ComposedChart-9HbcDPNP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ch_IT64k.js";import{X as f}from"./XAxis-yfo5ibqs.js";import{Y as l}from"./YAxis-D19WlBcl.js";import{L as d}from"./Line-BWnpbJBY.js";import{R as h}from"./ReferenceLine-Ye-IxO_8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BW194xym.js";import"./throttle-DeB2d41h.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./axisSelectors-CL5t64V7.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfSN9o3v.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./CartesianAxis-gqJanQvj.js";import"./Layer-DgAL7HSK.js";import"./Text-dB1JvKf5.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./Label-rlFXaG67.js";import"./types-BMA5Z4Oj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BG_HxKHy.js";import"./step-pIDDNbPT.js";import"./path-DyVhHtw_.js";import"./LabelList-DlsMy8UK.js";import"./ActivePoints-CaE7-5dE.js";import"./Dot-D0EtM9Lh.js";import"./activeStyles-MqObX4-I.js";import"./useAnimationId-BHg-nTIp.js";import"./dataEntryStyles-CoAbyOEr.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getRadiusAndStrokeWidthFromDot-Cp452xPJ.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
