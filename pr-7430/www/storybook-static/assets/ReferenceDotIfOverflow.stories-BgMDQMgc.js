import{R as e}from"./iframe-D_P_Mvdh.js";import{R as n}from"./zIndexSlice-DWG8bKuL.js";import{C as s}from"./ComposedChart-C2CR4N0a.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CXlIILXr.js";import{X as f}from"./XAxis-qMeue6_L.js";import{Y as l}from"./YAxis-DVaDEIZb.js";import{R as d}from"./ReferenceDot-tkx4LAuG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-zUUuTuVf.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./get-B4It9gJG.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./CartesianAxis-CFHvtBrK.js";import"./Layer-DPlEhKnR.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./Label-XikFYvD7.js";import"./ZIndexLayer-B_lVTO01.js";import"./types-BEWgGyLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BAS0IQWR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
