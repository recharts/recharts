import{e}from"./iframe-DpWgHt6w.js";import{R as s}from"./arrayEqualityCheck-DwmAcYIn.js";import{C as p}from"./ComposedChart-D-F8RHVS.js";import{C as c}from"./CartesianGrid-DG4l4Bs6.js";import{X as f}from"./XAxis-D6yPajmq.js";import{Y as l}from"./YAxis-YoDPLsa3.js";import{R as h}from"./ReferenceArea-_88OXAkY.js";import{R as d}from"./RechartsHookInspector-6ffAoSqV.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COHSVhtV.js";import"./immer-DDDJMxmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0YIbfluk.js";import"./index-CN4qQn03.js";import"./hooks-BAFDLItO.js";import"./axisSelectors-xFLTDAtC.js";import"./d3-scale-cdM3iwUh.js";import"./zIndexSlice-QDaeSxhx.js";import"./renderedTicksSlice-DdqXW_Ob.js";import"./CartesianChart-Cb4Oxfp_.js";import"./chartDataContext-Dv1BkF7u.js";import"./CategoricalChart-Cws7_zW3.js";import"./CartesianAxis-Boaam3Pv.js";import"./Layer-CgpQp7eP.js";import"./Text-BFrtQgrO.js";import"./DOMUtils-B14zrq1j.js";import"./Label-D5phAYj6.js";import"./ZIndexLayer-CK7DJrWn.js";import"./types-DZ2OBnNV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BwaSbVPa.js";import"./useAnimationId-DyHfJJP5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DtY3ArMC.js";import"./ChartSizeDimensions-B93BH9rD.js";import"./OffsetShower-BhzT3OUi.js";import"./PlotAreaShower-BHWXXqUJ.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
