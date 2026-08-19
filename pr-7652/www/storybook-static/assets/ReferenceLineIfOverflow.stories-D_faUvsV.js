import{R as e}from"./iframe-CgwPoQay.js";import{R as n}from"./zIndexSlice-Cwvky78x.js";import{C as p}from"./ComposedChart-Co7sgDaS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CL2Ap030.js";import{X as f}from"./XAxis-DOtySNzv.js";import{Y as l}from"./YAxis-D2N4RV8b.js";import{L as d}from"./Line-CMHOXWP-.js";import{R as h}from"./ReferenceLine-BZBjYyXc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sMY3RlhH.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CD_cqqva.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./axisSelectors-D5ccOzPk.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./CartesianAxis-DLTPH4hp.js";import"./Layer-DjRO5iA4.js";import"./Text-DLEzBygV.js";import"./DOMUtils-DewFbXuK.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./Label-CwBi1oPN.js";import"./ZIndexLayer-BiLuwpYl.js";import"./types-D2pCS11Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-a8euvDpU.js";import"./step-DTTmkP9p.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9ERF5uBB.js";import"./useAnimationId-C35lEnnz.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
