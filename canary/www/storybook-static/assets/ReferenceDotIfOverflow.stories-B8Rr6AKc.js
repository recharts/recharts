import{R as e}from"./iframe-L3U4PXsg.js";import{R as n}from"./zIndexSlice-DEY0PQhJ.js";import{C as s}from"./ComposedChart-Dkixnof2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BM8MKiJH.js";import{X as f}from"./XAxis-Cr6XecvK.js";import{Y as l}from"./YAxis-f7uBkTcv.js";import{R as d}from"./ReferenceDot-D2DU8VOG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-1AGwrNmW.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./Label-B7Q2YiAq.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B_tF6fjU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
