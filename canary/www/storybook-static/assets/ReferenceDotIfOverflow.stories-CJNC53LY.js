import{R as e}from"./iframe-DnFxx7IH.js";import{R as n}from"./zIndexSlice-DMQesRjL.js";import{C as s}from"./ComposedChart-nZqnVWXT.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CF1ZFW_G.js";import{X as f}from"./XAxis-IDSfm9bg.js";import{Y as l}from"./YAxis-CEWgAKNT.js";import{R as d}from"./ReferenceDot-Vcr0zZns.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9ypYn8O.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrQSc28h.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./axisSelectors-5k6UVVXW.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./CartesianAxis-BE4Vor5z.js";import"./Layer-D_Gfp3eA.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./Label--8_ga_Yz.js";import"./ZIndexLayer-DWUDk33_.js";import"./types-BDVRIOHN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CMt5bDBr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
