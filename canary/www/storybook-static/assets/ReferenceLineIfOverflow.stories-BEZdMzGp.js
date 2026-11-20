import{R as e}from"./iframe-CMFw787F.js";import{R as a}from"./zIndexSlice-DW-R_9mL.js";import{C as p}from"./ComposedChart-jPjAixDx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-2hktgjYs.js";import{X as f}from"./XAxis-C_WTSptP.js";import{Y as l}from"./YAxis-CRwIRJrx.js";import{L as d}from"./Line-Bw4mZerm.js";import{R as h}from"./ReferenceLine-DPpoLG5H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOABxk_y.js";import"./throttle-CR0jnMre.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./RechartsWrapper-AThag0NN.js";import"./axisSelectors-rk7JAHS6.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CNeDjyej.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./CartesianAxis-DJ5NbueU.js";import"./Layer-DoofO9Zt.js";import"./Text-DneUrFCx.js";import"./ZIndexLayer-zQQZbbdp.js";import"./Label-CYtvKaSn.js";import"./types-DA1V6lfX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./Curve-BOyetQ0I.js";import"./step-Droy7KkJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CcaQQEAi.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./activeStyles-DP81Qo_e.js";import"./useAnimationId-DwVwC1xb.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./ErrorBarContext-tb4T2KmR.js";import"./SetGraphicalItem-B5x77PpV.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
