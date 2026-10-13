import{R as e}from"./iframe-CRWpOW02.js";import{R as m}from"./zIndexSlice-BeAe48-I.js";import{C as p}from"./ComposedChart-CnCPKGvA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C-9gYDrC.js";import{X as f}from"./XAxis-D1dQPR-6.js";import{Y as l}from"./YAxis-DHYidPrE.js";import{R as d}from"./ReferenceDot-CyfhL5Bj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYPAZ-oY.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIU9TwkO.js";import"./axisSelectors-CEaTU0uL.js";import"./d3-scale-d-dAzt7l.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-CqBbZHkF.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./Label-C0mxneHa.js";import"./ZIndexLayer-CE46bnfu.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CX4mMU05.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
