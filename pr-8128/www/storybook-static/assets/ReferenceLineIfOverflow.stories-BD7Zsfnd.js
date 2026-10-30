import{R as e}from"./iframe-C9xnj3fa.js";import{R as a}from"./zIndexSlice-CcurngJa.js";import{C as p}from"./ComposedChart-CPJRa0Xe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bgu7WhU1.js";import{X as f}from"./XAxis-CqLpIx_r.js";import{Y as l}from"./YAxis-CZieiH3_.js";import{L as d}from"./Line-CeHzBY0l.js";import{R as h}from"./ReferenceLine-C0wU_mdD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./RechartsWrapper-BTsf-RRm.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./CartesianAxis-CWptnmGh.js";import"./Layer-DDMBpFba.js";import"./Text-BlDPHkKw.js";import"./DOMUtils-rMdb-gP0.js";import"./pageBackground-BZHE6_vS.js";import"./ZIndexLayer-BqHotqUl.js";import"./Label-BDFDhH9S.js";import"./types-DG6esOZW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-JiW6eW7Z.js";import"./Curve-CKzhw-Lm.js";import"./step-FdCzkuxT.js";import"./path-DyVhHtw_.js";import"./LabelList-Dl-1RIBv.js";import"./ActivePoints-CONJtR6k.js";import"./Dot-GKhzlTQm.js";import"./activeStyles-D9Ul1Rn7.js";import"./useAnimationId-CE3S5svQ.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./Symbols-Cm6DVkmF.js";import"./symbol-B6aiZ8Bc.js";import"./ErrorBarContext-CpFpfUyn.js";import"./SetGraphicalItem-CW9QGr42.js";import"./getRadiusAndStrokeWidthFromDot-BiTQJ7fn.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
