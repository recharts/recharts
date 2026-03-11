import{e}from"./iframe-D86QwX9l.js";import{R as n}from"./arrayEqualityCheck-CgXO-ZuA.js";import{C as s}from"./ComposedChart-CSnYCF8C.js";import{C as p}from"./CartesianGrid-CHsoccTH.js";import{X as c}from"./XAxis-BmsupeL1.js";import{Y as f}from"./YAxis-Dp7U47F6.js";import{R as l}from"./ReferenceDot-DHdQ87b8.js";import{R as h}from"./RechartsHookInspector-BUpx_xVe.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./immer-8-oQo3xP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./CartesianAxis-DxWgPgnd.js";import"./Layer-7ZFhhqEA.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./ZIndexLayer-UcIV_jcl.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Bkmwyapo.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
