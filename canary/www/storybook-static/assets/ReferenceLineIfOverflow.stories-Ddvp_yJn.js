import{R as e}from"./iframe-U4mOrMwe.js";import{R as n}from"./zIndexSlice-BlSgM3ea.js";import{C as p}from"./ComposedChart-BfGdMqnm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bq9tg7lR.js";import{X as f}from"./XAxis-DG6xcemZ.js";import{Y as l}from"./YAxis-DLdDDS3Z.js";import{L as d}from"./Line-3uFaqECT.js";import{R as h}from"./ReferenceLine-DssSuFjy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C66Yjghp.js";import"./index-DUYa25JH.js";import"./index-BegtHHbP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DeLH2ecz.js";import"./isWellBehavedNumber-K_DMN0Z2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ccy1_TNc.js";import"./index-CECNT87F.js";import"./index-CnEU82E2.js";import"./renderedTicksSlice-DIBgsBMZ.js";import"./axisSelectors-D_j8BHYk.js";import"./d3-scale-DcD2sPeq.js";import"./CartesianChart-BwiXZARa.js";import"./chartDataContext-ClSkA-dc.js";import"./CategoricalChart-wt8G0fhK.js";import"./CartesianAxis-B1Bb8VCA.js";import"./Layer-Dh2FttVt.js";import"./Text-5DtlWUUA.js";import"./DOMUtils-CsYBkNDR.js";import"./Label-CcnC99yA.js";import"./ZIndexLayer-yVDcLD3J.js";import"./types-B0fbEwRP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dsu_AJtV.js";import"./step-Dg4X7SdR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Moj_u834.js";import"./useAnimationId-R6vuYPvP.js";import"./ActivePoints-BNwDYYZl.js";import"./Dot-BvSFkLq2.js";import"./RegisterGraphicalItemId-BryVNAH7.js";import"./ErrorBarContext-_tOLdnG2.js";import"./GraphicalItemClipPath-IA0cC_pI.js";import"./SetGraphicalItem-BzboYsPC.js";import"./getRadiusAndStrokeWidthFromDot-BPAj830K.js";import"./ActiveShapeUtils--yBfM0nT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
