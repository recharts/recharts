import{R as e}from"./iframe-OWn8oF1A.js";import{R as n}from"./zIndexSlice-CwJzB82v.js";import{C as p}from"./ComposedChart-DQm885rX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dfups2-I.js";import{X as f}from"./XAxis-CCMr852Y.js";import{Y as l}from"./YAxis-CRJnLbnO.js";import{L as d}from"./Line-DkBHzBVs.js";import{R as h}from"./ReferenceLine-CToIEfxo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DWaXsXNb.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-IEje57sC.js";import"./isWellBehavedNumber-BZ7ES7WU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./axisSelectors-BcSe1XYn.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./CategoricalChart-CCczjnIs.js";import"./CartesianAxis-DE3Bauq7.js";import"./Layer-CqyZBrFC.js";import"./Text-P3K5HdaU.js";import"./DOMUtils-DW9lfnAW.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./Label-AqmTYyGt.js";import"./ZIndexLayer-C9URSHi7.js";import"./types-qoS_u5dB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CeJvEjjA.js";import"./step-D_RWTSpX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_CvB9alV.js";import"./useAnimationId-B2Oo-Kvv.js";import"./ActivePoints-nFn7e4bI.js";import"./Dot-COcUPaQ9.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getRadiusAndStrokeWidthFromDot-DqQ5ADme.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
