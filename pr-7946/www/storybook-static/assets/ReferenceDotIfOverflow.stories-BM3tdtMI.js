import{R as e}from"./iframe-Cz1yxjbp.js";import{R as m}from"./zIndexSlice-DX3VWAAP.js";import{C as p}from"./ComposedChart-B3FIpviW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C2xiZsRS.js";import{X as f}from"./XAxis-DTtwNRvk.js";import{Y as l}from"./YAxis-YGbQi-tl.js";import{R as d}from"./ReferenceDot-xELK9UcE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8kMLDgG.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./CartesianAxis-C6EZvJj2.js";import"./Layer-DX0-A7eX.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./Label-CKYWHIAB.js";import"./ZIndexLayer-CpvAEusS.js";import"./types-CaS-TM-K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-FtP_Pc_K.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
