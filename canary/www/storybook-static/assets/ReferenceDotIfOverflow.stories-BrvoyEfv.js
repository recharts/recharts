import{R as e}from"./iframe-D9OaE0-D.js";import{R as m}from"./zIndexSlice-C6kYgFGy.js";import{C as p}from"./ComposedChart-7wLgVQR2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-k2q49IQD.js";import{X as f}from"./XAxis-jEEi2ah-.js";import{Y as l}from"./YAxis-B27MwDT8.js";import{R as d}from"./ReferenceDot-Zy4WcUbB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BdEIFooo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JOV4OxH.js";import"./axisSelectors-D_Wp4SpS.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./CartesianAxis-piiyQKSw.js";import"./Layer-D4toxw-K.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./Label-DM3WzLWy.js";import"./ZIndexLayer-D_H7NPBA.js";import"./types-CXdLVzsF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B6z8g14w.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
