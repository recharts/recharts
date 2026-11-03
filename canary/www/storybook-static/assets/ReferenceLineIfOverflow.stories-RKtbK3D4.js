import{R as e}from"./iframe-XIWN-8LW.js";import{R as a}from"./zIndexSlice-CeTDvnmV.js";import{C as p}from"./ComposedChart-FUL524Wp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B5DJtemm.js";import{X as f}from"./XAxis-xF4zDX5U.js";import{Y as l}from"./YAxis-DaPhatN5.js";import{L as d}from"./Line-B6hIzkaB.js";import{R as h}from"./ReferenceLine-BnAQJAn9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5b48pxf.js";import"./throttle-DRx8DeZx.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./RechartsWrapper-BeCgk11S.js";import"./axisSelectors-Ct9ZEPSa.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./CartesianAxis-BxPz-Jvl.js";import"./Layer-CxaTRkgO.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./Label-DO8sqqdZ.js";import"./types-CnZsW2lD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BDW_2Enz.js";import"./step-D7Gnf8qO.js";import"./path-DyVhHtw_.js";import"./LabelList-DPGWqLfL.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./activeStyles-C-BzGRm8.js";import"./useAnimationId-BQkOAk0c.js";import"./dataEntryStyles-GFsHahL2.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./SetGraphicalItem-DypkohdD.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./useEffectiveDataKey-qss65ryL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
