import{R as e}from"./iframe-B3TE-nU3.js";import{R as a}from"./zIndexSlice-CTTS6cFj.js";import{C as p}from"./ComposedChart-CoUJ-8Kk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-tLBHG-0r.js";import{X as f}from"./XAxis-h5fh4YlR.js";import{Y as l}from"./YAxis-DsQMJ5Zr.js";import{L as d}from"./Line-C9ocvs2A.js";import{R as h}from"./ReferenceLine-CyGhQ7ao.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZyWFquG.js";import"./throttle-CbHIruzi.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./RechartsWrapper-Cj-eh_A9.js";import"./axisSelectors-DZCqrQSM.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXmLRtz9.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./CartesianAxis-98BHMJXj.js";import"./Layer-ChziGKVJ.js";import"./Text-Dg5b12Q4.js";import"./ZIndexLayer-CcszVre3.js";import"./Label-CBnDrrJb.js";import"./types-DiSBkFzd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Curve-DakK0sdO.js";import"./step-DFLs3YCD.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DR0RxE_5.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./activeStyles-P5uz91Wl.js";import"./useAnimationId-CxiMpo3b.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
