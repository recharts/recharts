import{c as e}from"./iframe-C5fgHeit.js";import{g as s}from"./zIndexSlice-Cm8Wfowt.js";import{C as p}from"./ComposedChart-BKA8oJoR.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DF1051eG.js";import{X as d}from"./XAxis-DgWVtNyr.js";import{Y as l}from"./YAxis-CoKsJgTz.js";import{R as h}from"./ReferenceArea-JqJOjMTw.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kTf3s8ve.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./get-DWrZfuk9.js";import"./resolveDefaultProps-CYeq70FN.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./CartesianAxis-DBytmeds.js";import"./Layer-Cc_zBrzh.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./Label-DviSNP2P.js";import"./ZIndexLayer-DJnVmrOS.js";import"./types-CutKYO-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CelBvebx.js";import"./useAnimationId-DkZHsCyz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
