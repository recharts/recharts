import{R as e}from"./iframe-BuvSZiBU.js";import{R as a}from"./zIndexSlice-CQnbxV7B.js";import{C as p}from"./ComposedChart-C5RBlYP6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CnOEuHER.js";import{X as f}from"./XAxis-BOfa2s22.js";import{Y as l}from"./YAxis-BWzjkf00.js";import{L as d}from"./Line-BUpD7j4-.js";import{R as h}from"./ReferenceLine-CcYxMrHR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Csayz_X_.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMwFRg1j.js";import"./axisSelectors-DGKzkChq.js";import"./d3-scale-B4_DxsXg.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-Coj2gvLu.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./Text-BkZYuu7y.js";import"./pageBackground-BDR7TGLv.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./Label-w8cJkoy5.js";import"./ZIndexLayer-CF-B9exK.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DvYuS0m6.js";import"./step-ozWCT_4L.js";import"./path-DyVhHtw_.js";import"./activeStyles-BmupzAye.js";import"./useAnimationId-CdC3v3R9.js";import"./dataEntryStyles-C1ODZzqS.js";import"./ActivePoints-CYsghgN3.js";import"./Dot-BP5vqlI3.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getRadiusAndStrokeWidthFromDot-JbdAO9HR.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./useEffectiveDataKey-DUlUrCLD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
