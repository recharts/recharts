import{R as e}from"./iframe-CIi4aQFr.js";import{R as n}from"./zIndexSlice-Dh5k7YSi.js";import{C as p}from"./ComposedChart-B_APHvQA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CqgviFUZ.js";import{X as f}from"./XAxis-CiR2CsZh.js";import{Y as l}from"./YAxis-NZvB3wWl.js";import{L as d}from"./Line-miPkldaS.js";import{R as h}from"./ReferenceLine-B8R80Q-o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DwQobNkr.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./index-DQ9ajMSc.js";import"./axisSelectors-B5t0SRDA.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./CartesianAxis-DFqSm48C.js";import"./Layer--pVrB_zY.js";import"./Text-MCLT9Uur.js";import"./DOMUtils-BGqmQoYm.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./Label-_CQ4siSe.js";import"./ZIndexLayer-1sxgmC4q.js";import"./types-jFK-aXqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CmPgMf6O.js";import"./step-WUQpfHT0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDFnApNF.js";import"./useAnimationId-DYWYqd07.js";import"./ActivePoints-B-l9jXx9.js";import"./Dot-D1RE6CX3.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./ErrorBarContext-Dx6F5PJo.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getRadiusAndStrokeWidthFromDot-Bp1zRMUA.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
