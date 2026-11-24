import{R as e}from"./iframe-Be1JwYLB.js";import{R as a}from"./zIndexSlice-CgSPm-wc.js";import{C as p}from"./ComposedChart-aW1EvLk8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cw6_LUYb.js";import{X as f}from"./XAxis-BsHOKRoe.js";import{Y as l}from"./YAxis-B8XW_V0R.js";import{L as d}from"./Line-BfWisHme.js";import{R as h}from"./ReferenceLine-Dg5GkYEP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./throttle-DjxQctYo.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./RechartsWrapper-BztyyuwI.js";import"./axisSelectors-rS5FKSRX.js";import"./polarAxisSelectors-petp68tp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_iM0uvU.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./CartesianAxis-CBnwQrVI.js";import"./Layer-L6JSSqUT.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./Label-Cm4G9M_4.js";import"./types-DiTos3ch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-B_Y3WA9D.js";import"./Curve-DQRadQHz.js";import"./step-Dq96qlXf.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./ActivePoints-BUYZbsLY.js";import"./Dot-C-gvMhjL.js";import"./activeStyles-CdOMMJXp.js";import"./useAnimationId-DZ7icYC0.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./ErrorBarContext-CuYC5cVX.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
