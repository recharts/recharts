import{R as e}from"./iframe-Dk9ZDdT1.js";import{R as n}from"./zIndexSlice-DeceblpS.js";import{C as p}from"./ComposedChart-BKh5yr5N.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B7u57R78.js";import{X as f}from"./XAxis-A_28Fvyn.js";import{Y as l}from"./YAxis-BG4jVm_S.js";import{R as d}from"./ReferenceDot-w99jLjkV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zYTWecoa.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DP2ymT_2.js";import"./axisSelectors-DxLef304.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./CartesianAxis-DltOMyOx.js";import"./Layer-DmyqVj_Z.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./Label-B5fu-9Ux.js";import"./ZIndexLayer-DeueZom8.js";import"./types-B5p8Vh7N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dxbx8gos.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
