import{R as e}from"./iframe-oJEYIYVD.js";import{R as n}from"./zIndexSlice-8Xd9ui4v.js";import{C as s}from"./ComposedChart-BIeE5g7X.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cmm1K-Qj.js";import{X as f}from"./XAxis-BGcEKdMP.js";import{Y as l}from"./YAxis-D5BvcVb4.js";import{R as d}from"./ReferenceDot-vO21XOtx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQw_TB4k.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHMesOBd.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ENwYgfgF.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./axisSelectors-CsLlIDAD.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./CategoricalChart-DFXPtrpT.js";import"./CartesianAxis-C0z7V-tm.js";import"./Layer-BCc9Twjs.js";import"./Text-CtBEPsPC.js";import"./DOMUtils-Cf8xbxEH.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./Label-BAH99IO9.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./types-qn8KP6HN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-9wHacS1O.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
