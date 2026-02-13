import{e}from"./iframe-DDewu6bn.js";import{R as n}from"./arrayEqualityCheck-DXTExga0.js";import{C as s}from"./ComposedChart-A2O41DUS.js";import{C as p}from"./CartesianGrid-Bh2qCtop.js";import{X as c}from"./XAxis-8FAWklv8.js";import{Y as f}from"./YAxis-D9vEUw1w.js";import{R as l}from"./ReferenceDot-BJTT010i.js";import{R as h}from"./RechartsHookInspector-CD3vvvGL.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./CartesianAxis-D7kXIk58.js";import"./Layer-DqLbE6Uv.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./Label-J4ZfWAib.js";import"./ZIndexLayer-mUyPWZcK.js";import"./types-BJyKbQEz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CCTp0i8d.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
