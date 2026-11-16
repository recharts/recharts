import{R as e}from"./iframe-ChMBHEXU.js";import{R as a}from"./zIndexSlice-Cd2z3Eer.js";import{C as p}from"./ComposedChart-B7Dgc5aq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CdPJwPLH.js";import{X as f}from"./XAxis-BEcsoff8.js";import{Y as l}from"./YAxis-CnSUrpEe.js";import{L as d}from"./Line-DFvVHptl.js";import{R as h}from"./ReferenceLine-Cm22-pEi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-X_3NC_87.js";import"./throttle-Cnp_ppL_.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./RechartsWrapper-DPxS5GGe.js";import"./axisSelectors-CyYfX19F.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_LSdR1o.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./CartesianAxis-8eiEJoC1.js";import"./Layer-Db_exIRl.js";import"./Text-BiLv0S0Y.js";import"./ZIndexLayer-OHuleK-j.js";import"./Label-ZGXU1are.js";import"./types-DgDe6MQb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C_M0JkPD.js";import"./step-BAe_ZTJZ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BARWQZ2-.js";import"./ActivePoints-mf0f4bpo.js";import"./Dot-DD7kJ9X3.js";import"./activeStyles-BxZootHE.js";import"./useAnimationId-CSNfiiSW.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./ErrorBarContext-BeNGW58S.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getRadiusAndStrokeWidthFromDot-CwS8CmXh.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
