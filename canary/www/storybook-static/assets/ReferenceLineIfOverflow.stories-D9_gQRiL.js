import{R as e}from"./iframe-ESIqq74j.js";import{R as a}from"./zIndexSlice-CKvG1btl.js";import{C as p}from"./ComposedChart-L_mLjP39.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D9DsUXb8.js";import{X as f}from"./XAxis-DazJCOyK.js";import{Y as l}from"./YAxis-DKsjzmyR.js";import{L as d}from"./Line-BfPK1q22.js";import{R as h}from"./ReferenceLine-DfMXcq2x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./throttle-s6zM-TSz.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./axisSelectors-Dt46-i8H.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-RU_yJ5H-.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./CartesianAxis-B_kntHFz.js";import"./Layer-Bde02su5.js";import"./Text-SrX2-qRa.js";import"./ZIndexLayer-C_1IKv4J.js";import"./Label-BX7H8p4m.js";import"./types-CKUWabzj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./Curve-DSZOr6BZ.js";import"./step-CinInmIp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CU93DU9D.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./activeStyles-rtMeimPT.js";import"./useAnimationId-Fts_Wu3I.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./ErrorBarContext-ckgpu_x8.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
