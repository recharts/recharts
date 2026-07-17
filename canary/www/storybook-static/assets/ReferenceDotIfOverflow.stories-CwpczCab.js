import{R as e}from"./iframe-556vb-qw.js";import{R as n}from"./zIndexSlice-Dx_8tKSl.js";import{C as s}from"./ComposedChart-C3GwbD-o.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D7o76xak.js";import{X as f}from"./XAxis-C8oxlX6U.js";import{Y as l}from"./YAxis-CUYZIBQF.js";import{R as d}from"./ReferenceDot-BI_LeIq5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bki2cXyV.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./d3-scale-D2li86P1.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./Label-BaM1U3dt.js";import"./ZIndexLayer-BOwqliX9.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-J7G-brXT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
