import{R as e}from"./iframe-YX8o2v6C.js";import{R as n}from"./zIndexSlice-DdFbRU-_.js";import{C as p}from"./ComposedChart-CuekEZUs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bm0phJiH.js";import{X as f}from"./XAxis-DQ2uOSag.js";import{Y as l}from"./YAxis-Be6O_CQ7.js";import{L as d}from"./Line-Dmxs4MTa.js";import{R as h}from"./ReferenceLine-BEDLdSpI.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D9wrmu0j.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./get-BycinDno.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./CartesianAxis-CKLUnXwa.js";import"./Layer-BIbmWem6.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./Label-MzgVsBeP.js";import"./ZIndexLayer-jNA71lIU.js";import"./types-DnEhxp69.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BvJZo-0O.js";import"./step-ChRxg50y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CRhm6WPg.js";import"./useAnimationId-CqTJac9i.js";import"./ActivePoints-DmjJPaKb.js";import"./Dot-DeMjnZzF.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./ErrorBarContext-BJw7X7Qy.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getRadiusAndStrokeWidthFromDot-wgzhKlDZ.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
