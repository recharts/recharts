import{e}from"./iframe-DvdxI6dC.js";import{R as n}from"./arrayEqualityCheck-DXUAObl0.js";import{C as s}from"./ComposedChart-YdiELtKV.js";import{C as p}from"./CartesianGrid-DGiABNyR.js";import{X as c}from"./XAxis-DJowtDGC.js";import{Y as f}from"./YAxis-Qq9BKQtQ.js";import{R as l}from"./ReferenceDot-CnVVegqD.js";import{R as h}from"./RechartsHookInspector-B_PrFdYH.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./PolarUtils-BY4iZmOi.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./CartesianAxis-CptW6PK3.js";import"./Layer-QQplstvs.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./types-8AXfgSIv.js";import"./Dot-DSDPr-6Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
