import{R as e}from"./iframe-CVyYUHBB.js";import{R as s}from"./zIndexSlice-DQO5Hbgs.js";import{C as p}from"./ComposedChart-m9fhUeFB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BDm06sUL.js";import{X as d}from"./XAxis-L2wk8rnW.js";import{Y as l}from"./YAxis-Da2JXkbU.js";import{R as h}from"./ReferenceArea-9u_PovUo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBXZcEly.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C7voaGK7.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./axisSelectors-CMqkaAfm.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CategoricalChart-BzwwubIO.js";import"./CartesianAxis-890WjR3i.js";import"./Layer-BB5O4xlv.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./Label-DUcJCWBn.js";import"./ZIndexLayer-DBw3xiu4.js";import"./types-DESxFXXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-AHQh490H.js";import"./useAnimationId-_KC_AMgU.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
