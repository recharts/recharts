import{c as e}from"./iframe-DcZ25aZq.js";import{g as n}from"./zIndexSlice-Bx385Wu5.js";import{C as p}from"./ComposedChart-DlgAAB8M.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-C0VQBDvF.js";import{X as f}from"./XAxis-DyhIsrPh.js";import{Y as l}from"./YAxis-C_fkHFUI.js";import{L as d}from"./Line-CAf-fyij.js";import{R as h}from"./ReferenceLine-BK5Y9zDN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CNH0Qykv.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./get-BBHPk0wF.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./Label-madSHGhS.js";import"./ZIndexLayer-CX9fDFPC.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-C4CaZCwE.js";import"./step-BUy109CO.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BfQpQwdE.js";import"./ActivePoints-mSOk-v2V.js";import"./Dot-Ci7H-Wks.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./useAnimationId-wbWpU06B.js";import"./getRadiusAndStrokeWidthFromDot-CxfGK76v.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
