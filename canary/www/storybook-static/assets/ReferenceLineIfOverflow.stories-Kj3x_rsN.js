import{e}from"./iframe-Cz5RPrzo.js";import{R as n}from"./arrayEqualityCheck-DuhA3hrU.js";import{C as p}from"./ComposedChart-kzL2mx6f.js";import{C as s}from"./CartesianGrid-DNfR-JtA.js";import{X as c}from"./XAxis-Dad-gt40.js";import{Y as f}from"./YAxis-Dvw6k3XO.js";import{L as l}from"./Line-pgE5fomn.js";import{R as d}from"./ReferenceLine-0n9LZytH.js";import{R as h}from"./RechartsHookInspector-DP8xCOal.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./PolarUtils-BqV0Lm0k.js";import"./RechartsWrapper-cu-FIaeq.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./zIndexSlice-CcJ--Fig.js";import"./CartesianChart-eteQYMRm.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./CartesianAxis-D-RjJSot.js";import"./Layer-CngTgEke.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./Label-XMPDelhI.js";import"./ZIndexLayer-DopQY-kA.js";import"./types-D1v_Rc2a.js";import"./ReactUtils-BQq-yyvu.js";import"./ActivePoints-DbZXc6w0.js";import"./Dot-ChSBHykE.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./ErrorBarContext-BeejT6aM.js";import"./GraphicalItemClipPath-apQ9eD6L.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./useAnimationId-ifmUbYmC.js";import"./getRadiusAndStrokeWidthFromDot-BufAZu8L.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./Symbols-R3z9Gbft.js";import"./Curve-C0KXugLq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
