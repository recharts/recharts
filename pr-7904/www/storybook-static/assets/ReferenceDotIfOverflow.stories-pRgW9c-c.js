import{R as e}from"./iframe-DeP4Wy7i.js";import{R as m}from"./zIndexSlice-nnPIR1gF.js";import{C as p}from"./ComposedChart-CJez4X5P.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DHkC3FJy.js";import{X as f}from"./XAxis-D55ujQEE.js";import{Y as l}from"./YAxis-Blw3_-Cc.js";import{R as d}from"./ReferenceDot-DsDUGICK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./CartesianAxis-CZDdo6k-.js";import"./Layer-CBmTHU88.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./Label-BDn5In4u.js";import"./ZIndexLayer-46z2Emao.js";import"./types-CanfrVuk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BLQMwT0r.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
