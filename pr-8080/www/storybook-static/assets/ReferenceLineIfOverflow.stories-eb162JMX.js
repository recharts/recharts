import{R as e}from"./iframe-Dckhh8TP.js";import{R as a}from"./zIndexSlice-DvqxU_fJ.js";import{C as p}from"./ComposedChart-CwkBXCx2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B58hkoEe.js";import{X as f}from"./XAxis-DZSKVUHO.js";import{Y as l}from"./YAxis-C2iUlU97.js";import{L as d}from"./Line-B8-PDDhu.js";import{R as h}from"./ReferenceLine-CJ8tRbV1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./throttle-nSMGIYBk.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./RechartsWrapper-DN3bSeN0.js";import"./axisSelectors-iU-8zlMU.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVKSBoJ3.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./CartesianAxis-B8NfN4oe.js";import"./Layer-Gqc-Z-cf.js";import"./Text-ixAKnQea.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./Label-BPfiwVrc.js";import"./dataEntryStyles-C1y9indW.js";import"./types-orR6Wh5t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CPC4BdrH.js";import"./step-Be2Z97Jg.js";import"./path-DyVhHtw_.js";import"./activeStyles-DNDVPQVu.js";import"./useAnimationId-DwypxVGS.js";import"./ActivePoints-DqM_7cwl.js";import"./Dot-DLFfnKNz.js";import"./Symbols-CuFQCUW8.js";import"./symbol-DC65CFDy.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./ErrorBarContext-D50rt7ip.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getRadiusAndStrokeWidthFromDot-BPZD6QvL.js";import"./ActiveShapeUtils-CZclTza4.js";import"./useEffectiveDataKey-Dh_S8XsG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
