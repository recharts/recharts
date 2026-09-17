import{R as e}from"./iframe-Bcl-Wsua.js";import{R as m}from"./zIndexSlice-CAQaUmZK.js";import{C as p}from"./ComposedChart-BCODivHJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B2dFGKDr.js";import{X as f}from"./XAxis-BkzTF5vO.js";import{Y as l}from"./YAxis-DiEiYw2x.js";import{R as d}from"./ReferenceDot-ZEyhoN54.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ByTEOgqW.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAZxuN02.js";import"./axisSelectors-HkZtvUb3.js";import"./d3-scale-Bz3uBv2F.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./renderedTicksSlice-BjEraSyi.js";import"./index-D0zdUyje.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./CartesianAxis-C4G_M4Jp.js";import"./Layer-DZWwUS0u.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./Label-CKR6MZGL.js";import"./ZIndexLayer-j6jNc8g-.js";import"./types-DyxZGeRY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BL8fSCF8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
