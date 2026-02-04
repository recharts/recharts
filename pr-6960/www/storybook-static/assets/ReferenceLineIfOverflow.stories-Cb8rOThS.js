import{e}from"./iframe-CU9XYLf3.js";import{R as n}from"./arrayEqualityCheck-eFaqPFyI.js";import{C as p}from"./ComposedChart-DmX0UFL1.js";import{C as s}from"./CartesianGrid-D5isxS3W.js";import{X as c}from"./XAxis-Bcv7Mskw.js";import{Y as f}from"./YAxis-BemMrlFL.js";import{L as l}from"./Line-C8QgLygJ.js";import{R as d}from"./ReferenceLine-Clx1jqN3.js";import{R as h}from"./RechartsHookInspector-_W3CqC5M.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMA78OKy.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./CartesianAxis-D8E3unsA.js";import"./Layer-DY220JH0.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D-xpVFtM.js";import"./ActivePoints-B2pGhw2h.js";import"./Dot-B5sv6NYe.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./ErrorBarContext-asfsfUUV.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./useAnimationId-VWf3KASX.js";import"./getRadiusAndStrokeWidthFromDot-CFQCYzj3.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wboqG7.js";import"./Trapezoid-BbNzWkoD.js";import"./Sector-CkX8bkkx.js";import"./Symbols-DqoOcyix.js";import"./Curve-_cbPrSga.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
