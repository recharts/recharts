import{R as e}from"./iframe-J6essBJs.js";import{R as s}from"./zIndexSlice-BsmeZsA8.js";import{C as p}from"./ComposedChart-Bs7sztQ5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Kfur7uCV.js";import{X as d}from"./XAxis-Oxu4uJGF.js";import{Y as l}from"./YAxis-Ou9wZ7uM.js";import{R as h}from"./ReferenceArea-D6Szpwen.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./throttle-rB4iKGhW.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./RechartsWrapper-CQZiUgoa.js";import"./axisSelectors-COh-2QwC.js";import"./polarAxisSelectors-DoWbS56a.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-mCWeQZGc.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./Label-DrwYb9eR.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-D7oaCIG9.js";import"./useAnimationId-TXNHUPXz.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
