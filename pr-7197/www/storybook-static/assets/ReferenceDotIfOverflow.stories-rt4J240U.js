import{e}from"./iframe-C2tGGjcA.js";import{R as n}from"./arrayEqualityCheck-BU-juwUe.js";import{C as s}from"./ComposedChart-DayldmqV.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CCLgVJuJ.js";import{X as f}from"./XAxis-B3stUdiP.js";import{Y as l}from"./YAxis-BWTDEGMA.js";import{R as h}from"./ReferenceDot-aMR0K3KY.js";import{R as d}from"./RechartsHookInspector-OVWL5RuZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8hWxOXb.js";import"./immer-_oM2zjxd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3vVxtfU.js";import"./index-D-_8hcei.js";import"./hooks-BZM1IfiG.js";import"./axisSelectors-hCgVeVzv.js";import"./d3-scale-BwpTFf5Z.js";import"./zIndexSlice-C7QkOMmM.js";import"./renderedTicksSlice-DflWSLZG.js";import"./CartesianChart-JwGyw0GC.js";import"./chartDataContext-Mxcb3X27.js";import"./CategoricalChart-CloeZ4Py.js";import"./CartesianAxis-C6X8qFWR.js";import"./Layer-DkBbKCaQ.js";import"./Text-Bh-qeukp.js";import"./DOMUtils-CeJzVK9F.js";import"./Label-CR6_Nrr4.js";import"./ZIndexLayer-CwH7lvHt.js";import"./types-BqNjVw0B.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DIQAy5B9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BLdpS26r.js";import"./ChartSizeDimensions-DbZPdrpK.js";import"./OffsetShower-CCVPYATS.js";import"./PlotAreaShower-p59PN-FQ.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
