import{R as e}from"./iframe-KlB-4IG1.js";import{R as a}from"./zIndexSlice-BVLPARW-.js";import{C as p}from"./ComposedChart-UXSSMqzW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BmUZdcHW.js";import{X as f}from"./XAxis-Ca5TUmhH.js";import{Y as l}from"./YAxis-DfRBNhMM.js";import{L as d}from"./Line-DthVYZE5.js";import{R as h}from"./ReferenceLine-b-1pIqJF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RcNfk3jW.js";import"./get-CjriyByo.js";import"./throttle-DXJsY_uT.js";import"./index-CwL9CPkI.js";import"./index-DAOJlBpl.js";import"./RechartsWrapper-CD7r0FUc.js";import"./axisSelectors-ThjGeQP_.js";import"./polarAxisSelectors-DkMb5oL8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BgndSVNB.js";import"./index-CX7x-S-w.js";import"./index-DNDuIT5t.js";import"./renderedTicksSlice-BREhx7Gk.js";import"./index-CUyiC2Ny.js";import"./fillDefinitions-Cx2SilO3.js";import"./CartesianChart-DYMMc77U.js";import"./chartDataContext-Dajtit_0.js";import"./CategoricalChart-DQDRiNPc.js";import"./CartesianAxis-CVzE0EQ3.js";import"./Layer-Cl7yX3if.js";import"./Text-Bpt3PNfo.js";import"./ZIndexLayer-DgEHrsgR.js";import"./Label-DqUMyvUu.js";import"./types-rdPmYL5R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DjAs6uXs.js";import"./Curve-P8knzJBH.js";import"./step-CgkxMamK.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-D-8l4rOK.js";import"./ActivePoints-iLZwRPS_.js";import"./Dot-CS5HZsDP.js";import"./activeStyles-BijthCg6.js";import"./useAnimationId-C1lHvxQb.js";import"./Symbols-DP3kQoeZ.js";import"./symbol-Nq8AM552.js";import"./ErrorBarContext-J4PcI6d4.js";import"./SetGraphicalItem-BaH0crAE.js";import"./ActiveShapeUtils-DFwShdCc.js";import"./useEffectiveDataKey-BXp8Go_I.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
