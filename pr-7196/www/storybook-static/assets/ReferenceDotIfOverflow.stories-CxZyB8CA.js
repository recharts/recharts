import{e}from"./iframe-BOzdYMSK.js";import{R as n}from"./arrayEqualityCheck-C-L8EdU9.js";import{C as s}from"./ComposedChart-CMGQFiN-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-EB-7kOGj.js";import{X as f}from"./XAxis-BCEpc3K6.js";import{Y as l}from"./YAxis-FsZJz6tV.js";import{R as h}from"./ReferenceDot-Cnp4r4Am.js";import{R as d}from"./RechartsHookInspector-BxQ7npCV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2gE7AyU9.js";import"./immer-BswUgWWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKlBI8B-.js";import"./index-DlDmkRAf.js";import"./hooks-DABVmJA-.js";import"./axisSelectors-D0SqUNzA.js";import"./d3-scale-BLmRkdBI.js";import"./zIndexSlice-C7XasEZZ.js";import"./renderedTicksSlice-Br0n-FAv.js";import"./CartesianChart-CYCDZmDe.js";import"./chartDataContext-CLnWO5Qo.js";import"./CategoricalChart-DnUtLsS8.js";import"./CartesianAxis-CvCr5PgT.js";import"./Layer-B9qQTSv5.js";import"./Text-BrQPjMdx.js";import"./DOMUtils-BtSYpCvp.js";import"./Label-Dx_BRROg.js";import"./ZIndexLayer-DSuS-vq3.js";import"./types-o0ZEOggY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-B9xnb9v8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DozVodwh.js";import"./ChartSizeDimensions-DfVhVyBn.js";import"./OffsetShower-Cv0VvbUT.js";import"./PlotAreaShower-DAwEQHde.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
