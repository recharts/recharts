import{R as e}from"./iframe-Bfq89VA1.js";import{R as s}from"./zIndexSlice-CIiurCy7.js";import{C as p}from"./ComposedChart-DVfhgAYP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CUD_IRpk.js";import{X as d}from"./XAxis-XWWA5Vcg.js";import{Y as l}from"./YAxis-BKOVychP.js";import{R as h}from"./ReferenceArea-C1S3SOjG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9Dxi9p7.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./d3-scale-DNdF6BGI.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./Label-TzQ05lix.js";import"./ZIndexLayer-BNbeMphj.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-TJ7hJnR0.js";import"./useAnimationId-nFx4hlTa.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
