import{e}from"./iframe-BVwI20TL.js";import{R as n}from"./arrayEqualityCheck-q35BrOAH.js";import{C as s}from"./ComposedChart-gqrKgpX-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DjH5RQr0.js";import{X as f}from"./XAxis-Luh5ls2c.js";import{Y as l}from"./YAxis-CkI3VGvs.js";import{R as h}from"./ReferenceDot-DIF_Y8_2.js";import{R as d}from"./RechartsHookInspector-DZcmofN9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./immer-CKYyw7I3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./CartesianAxis-lBH2hlA3.js";import"./Layer-BmJqKhGN.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./Label-3Z8b_JxM.js";import"./ZIndexLayer-BZIg8_TU.js";import"./types-BIqLm2SJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DeCDV3Wq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DF74iLY4.js";import"./ChartSizeDimensions-BbmTVycb.js";import"./OffsetShower-DUJyuqc9.js";import"./PlotAreaShower-Dc_-yokV.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
