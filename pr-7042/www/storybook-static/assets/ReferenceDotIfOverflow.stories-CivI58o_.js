import{e}from"./iframe-Dr9hlnt0.js";import{R as n}from"./arrayEqualityCheck-dGE5_Gdx.js";import{C as s}from"./ComposedChart-C3ymMAIf.js";import{C as p}from"./CartesianGrid-C-DxZLwk.js";import{X as c}from"./XAxis-DVCekQJU.js";import{Y as f}from"./YAxis-oVvY9CD_.js";import{R as l}from"./ReferenceDot-B-3vacxR.js";import{R as h}from"./RechartsHookInspector-DqXSZ2_4.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./immer-B0cgghQh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DInH99Th.js";import"./index-IE9LPIX3.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./CartesianAxis-zfjDIuu9.js";import"./Layer-Dau6qZl4.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./ZIndexLayer-bo4FLnP8.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-G9S3vDXU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
