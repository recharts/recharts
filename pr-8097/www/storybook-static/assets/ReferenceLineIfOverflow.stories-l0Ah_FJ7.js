import{R as e}from"./iframe-DNsV3xvw.js";import{R as a}from"./zIndexSlice-BkDmHlXx.js";import{C as p}from"./ComposedChart-DUPDtyKq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DGcV3WTC.js";import{X as f}from"./XAxis-BbuAR6XK.js";import{Y as l}from"./YAxis-B4nJYauW.js";import{L as d}from"./Line-Dt-wl3vw.js";import{R as h}from"./ReferenceLine-CQ9V8DMh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./throttle-CpyfnSH3.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./RechartsWrapper-BitdsUuz.js";import"./axisSelectors-DtPl2Lwd.js";import"./polarAxisSelectors-wmmlw52W.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Y31MRKoT.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./CartesianAxis-BNXXsiE3.js";import"./Layer-CxNpu0Gw.js";import"./Text-D6nhI6eC.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./Label-DxEHX6q3.js";import"./dataEntryStyles-BPFhmlnt.js";import"./types-En29vQtS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CuwsmGsN.js";import"./step-Bt130Gb4.js";import"./path-DyVhHtw_.js";import"./LabelList-Dxbb0X28.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./activeStyles-BmYbBsXF.js";import"./useAnimationId-BFFnWfJy.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./ErrorBarContext-BojgDOr6.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
