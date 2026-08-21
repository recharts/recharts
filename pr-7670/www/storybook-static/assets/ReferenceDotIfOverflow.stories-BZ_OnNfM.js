import{R as e}from"./iframe-DQS4myAB.js";import{R as n}from"./zIndexSlice-CRKGO7km.js";import{C as s}from"./ComposedChart-BOQH8a6E.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bt2pjDXm.js";import{X as f}from"./XAxis-BNsLkqf_.js";import{Y as l}from"./YAxis-DYkI96_x.js";import{R as d}from"./ReferenceDot-CRM_BeJG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsoZ_hEn.js";import"./index-C2aL9BgM.js";import"./index-DDMxvxUH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIteYQ9K.js";import"./isWellBehavedNumber-zK_PJpDu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A-SxCpKR.js";import"./index-Bqu6H91U.js";import"./index-CvvA9CVv.js";import"./axisSelectors-DX4jdBfR.js";import"./d3-scale-5kESFzKL.js";import"./renderedTicksSlice-C2h8Z4jj.js";import"./CartesianChart-T2RwwuUW.js";import"./chartDataContext-BIeQL6Ui.js";import"./CategoricalChart-bL4PqON3.js";import"./CartesianAxis-C-8QqbQf.js";import"./Layer-BZTFzIOK.js";import"./Text-GAhVF71G.js";import"./DOMUtils-DInenL_7.js";import"./useId-BeKVfcQc.js";import"./useBackwardsCompatibleTheme-CRkmgrCS.js";import"./Label-BA6rOHS2.js";import"./ZIndexLayer-HtJhw_Ro.js";import"./types-lJpcgJl2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DsGcbXq1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
