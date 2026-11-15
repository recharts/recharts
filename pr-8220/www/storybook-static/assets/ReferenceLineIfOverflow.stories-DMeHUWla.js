import{R as e}from"./iframe-DNXhgPY2.js";import{R as a}from"./zIndexSlice-C_G2hm8X.js";import{C as p}from"./ComposedChart-X9xQAOg_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-lmi37WIP.js";import{X as f}from"./XAxis-CJs7Huhu.js";import{Y as l}from"./YAxis-DAJ4SxQ-.js";import{L as d}from"./Line-DrXCd3ny.js";import{R as h}from"./ReferenceLine-BRbB1bBa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./throttle-OaXA1Z9W.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./RechartsWrapper-C4y6DVLx.js";import"./axisSelectors-CTPBeHC3.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./CartesianAxis-Dr28b-wt.js";import"./Layer-EsfR_jDG.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./Label-Ds6wWWz7.js";import"./types-DuvV7zSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DQsYvz2A.js";import"./step-DKewonm6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./ActivePoints-B_3_DJ4t.js";import"./Dot-BLhlTrFS.js";import"./activeStyles-DSoUr8Vz.js";import"./useAnimationId-CljrEDcm.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getRadiusAndStrokeWidthFromDot-CP6kgx-1.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
