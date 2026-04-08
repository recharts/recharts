import{e}from"./iframe-DCw0tqQR.js";import{R as s}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{C as p}from"./ComposedChart-wlPyi7zj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BiADxqRp.js";import{X as l}from"./XAxis-DMq4si8_.js";import{Y as h}from"./YAxis-C3HUNKiJ.js";import{R as d}from"./ReferenceArea-Bbxcnvw9.js";import{R as x}from"./RechartsHookInspector-Da0J_Xb_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./immer-DgwGzr0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./zIndexSlice-pEXw6d_M.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./CartesianAxis-oFVfgyCE.js";import"./Layer-DecK4sAB.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./Label-CVZgdgXC.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./types-DB1MifHz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CriYIqhs.js";import"./useAnimationId-S3q8t8Nn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
