import{R as e}from"./iframe-B0yo2V4n.js";import{R as m}from"./zIndexSlice-B7uClMUs.js";import{C as p}from"./ComposedChart-B_AnK-ab.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-AP7zhjfS.js";import{X as f}from"./XAxis-DsnV8ZqK.js";import{Y as l}from"./YAxis-DL4kDslF.js";import{R as d}from"./ReferenceDot-BWve82Ha.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQikX2jp.js";import"./axisSelectors-CMjYVwhk.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./CartesianAxis-DRTEDz7X.js";import"./Layer-BkWM3RIH.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./Label-CnUHNStt.js";import"./ZIndexLayer-DLG58JCm.js";import"./types-L-bd4Nc-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-OL_y42KN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
