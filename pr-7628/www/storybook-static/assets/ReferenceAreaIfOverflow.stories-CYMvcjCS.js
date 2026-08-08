import{R as e}from"./iframe-D_g4F33S.js";import{R as s}from"./zIndexSlice-qk_W91LH.js";import{C as p}from"./ComposedChart-DYa_RjMP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C9Qjx1Qy.js";import{X as d}from"./XAxis-D0V-DbQJ.js";import{Y as l}from"./YAxis-BeSx8PLK.js";import{R as h}from"./ReferenceArea-DjqhZwtk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8ol7TbU.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMNeBin1.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./CartesianAxis-eoFvh8zn.js";import"./Layer-CZAafMyB.js";import"./Text-dC5bBnrz.js";import"./DOMUtils-D15rvujY.js";import"./Label-mwDIEaZu.js";import"./ZIndexLayer-CBemJ52Z.js";import"./types-E4fDsamD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DEVDikLO.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CYZZnEwA.js";import"./useAnimationId-F97RPKrS.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
