import{e}from"./iframe-Dh_IuGPW.js";import{R as n}from"./arrayEqualityCheck-7YZsQ9Yt.js";import{C as s}from"./ComposedChart-BT1Cqczr.js";import{C as p}from"./CartesianGrid-BjJCRgc8.js";import{X as c}from"./XAxis-BVn7zGv-.js";import{Y as f}from"./YAxis-FBaKUNO9.js";import{R as l}from"./ReferenceDot-Bs_d4Ej4.js";import{R as h}from"./RechartsHookInspector--VVdTSeU.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./PolarUtils-ByAhdJKw.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./zIndexSlice-Bln6WQdm.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./CartesianAxis-LyuwKeVQ.js";import"./Layer-0hKCd9Go.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./Label-CwPC6lqR.js";import"./ZIndexLayer-DgCIyG2A.js";import"./types-C1SnlukV.js";import"./Dot-C1cga5mV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DsFYMPMW.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./OffsetShower-DaKIwyBr.js";import"./PlotAreaShower-xnDTqs4e.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
