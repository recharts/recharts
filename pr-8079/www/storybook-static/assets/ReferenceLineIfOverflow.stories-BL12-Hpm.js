import{R as e}from"./iframe-CatpbanJ.js";import{R as a}from"./zIndexSlice-BMWzHmEu.js";import{C as p}from"./ComposedChart-KfrZJSX3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-hnosjuGP.js";import{X as f}from"./XAxis-D8aO7K4u.js";import{Y as l}from"./YAxis-BZ1k9Ood.js";import{L as d}from"./Line-Dd-G5LHq.js";import{R as h}from"./ReferenceLine-NSnlUyDJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BADc_Fld.js";import"./throttle-CW9K2jjI.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./RechartsWrapper-DLFC9k-P.js";import"./axisSelectors-ByEpyZG7.js";import"./polarAxisSelectors-BGfelowG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWpKPZRY.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./CartesianAxis-D1ZUqzID.js";import"./Layer-ElswMSOx.js";import"./Text-CG59Fli3.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./Label-CA5ryIJW.js";import"./dataEntryStyles-DxsZOfoL.js";import"./types-BWsJ_4qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CPjpKaHf.js";import"./step-uDZ4fNKk.js";import"./path-DyVhHtw_.js";import"./activeStyles-RllIEBru.js";import"./useAnimationId-BwwRxKkz.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
