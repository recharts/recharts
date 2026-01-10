import{e}from"./iframe-C7VEdwDl.js";import{R as n}from"./arrayEqualityCheck-BFuWEF_2.js";import{C as p}from"./ComposedChart-D8hmsnRR.js";import{C as s}from"./CartesianGrid-Dk9Js2CK.js";import{X as c}from"./XAxis-lTITefqV.js";import{Y as f}from"./YAxis-BhBQhR2H.js";import{L as l}from"./Line-CSu5WlAZ.js";import{R as d}from"./ReferenceLine-Cc8phRa7.js";import{R as h}from"./RechartsHookInspector-zossHO9I.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BUd4YoeE.js";import"./PolarUtils-DHfJA17M.js";import"./RechartsWrapper-DEcROWOI.js";import"./hooks-BW_tvarJ.js";import"./axisSelectors-F4Rfzy8w.js";import"./zIndexSlice-BJ_Gr8zy.js";import"./CartesianChart-Csxz-3BL.js";import"./chartDataContext-CfkWD6kk.js";import"./CategoricalChart-0Xeq1mM5.js";import"./CartesianAxis-C8p5zhNH.js";import"./Layer-CPbMT7hg.js";import"./Text-BdIA0mDm.js";import"./DOMUtils-BLCIXtr_.js";import"./Label-BR_hSEq_.js";import"./ZIndexLayer-BPo_6GDC.js";import"./types-CRh2J3nK.js";import"./ReactUtils-DGKDkYPZ.js";import"./ActivePoints-BgKx4NCy.js";import"./Dot-CHwT8mvT.js";import"./RegisterGraphicalItemId-CQVzSIpL.js";import"./ErrorBarContext-D5Rmuma9.js";import"./GraphicalItemClipPath-B3ICEpzV.js";import"./SetGraphicalItem-CDbWAttj.js";import"./useAnimationId-BiiYSys9.js";import"./getRadiusAndStrokeWidthFromDot-D0ij6tUK.js";import"./ActiveShapeUtils-DxCy-J0g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk5aROAI.js";import"./Trapezoid-CiHao4Jj.js";import"./Sector-foYN3hhu.js";import"./Symbols-HruIKh8l.js";import"./Curve-DE9HnzTx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D3VqoZ-t.js";import"./ChartSizeDimensions-DdGVjbyp.js";import"./OffsetShower-BIF6rOJj.js";import"./PlotAreaShower-YHRv7s4A.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
