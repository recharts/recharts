import{R as e}from"./iframe-DUrhAGem.js";import{R as n}from"./zIndexSlice-DdMK3B0N.js";import{C as s}from"./ComposedChart-ymO5UTEI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DS7fbmD7.js";import{X as f}from"./XAxis-RIRw3T0L.js";import{Y as l}from"./YAxis--wp8j7v5.js";import{R as d}from"./ReferenceDot-D1BYidpI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3vyfJ8U.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./d3-scale-SkNolWO8.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./Label-Y4Dm0VZ7.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./Dot-pQkDRCWY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
