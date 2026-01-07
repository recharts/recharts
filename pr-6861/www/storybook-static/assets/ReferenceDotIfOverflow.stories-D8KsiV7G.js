import{e}from"./iframe-BzK4IM4O.js";import{R as n}from"./arrayEqualityCheck-DntSlYRe.js";import{C as s}from"./ComposedChart-DeS0V09V.js";import{C as p}from"./CartesianGrid-D-ISYqWZ.js";import{X as c}from"./XAxis-BEioX7l9.js";import{Y as f}from"./YAxis-FFHKkbRQ.js";import{R as l}from"./ReferenceDot-CdfOX3Mo.js";import{R as h}from"./RechartsHookInspector-Blpd2IS8.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./RechartsWrapper-G-7uZuvB.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./CartesianAxis-Bvc9afGW.js";import"./Layer-D3djBZrj.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./Label-Cw9dZn4K.js";import"./ZIndexLayer-CvqQuagi.js";import"./types-CR25OGX1.js";import"./Dot-CeVvwLNa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
