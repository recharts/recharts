import{R as e}from"./iframe-29nHamCu.js";import{R as p}from"./zIndexSlice-CZafadFX.js";import{C as s}from"./ComposedChart-DXLvIz9U.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CMpWW_VU.js";import{X as d}from"./XAxis-cHqDX1J9.js";import{Y as l}from"./YAxis-bbUKYKRn.js";import{R as h}from"./ReferenceArea-B1kY0xDX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMJYFYDy.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./CartesianAxis-BV_FsFXh.js";import"./Layer-DIXDf-ah.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./Label-BEXPduDP.js";import"./ZIndexLayer-DAa-R99d.js";import"./types-DxO-1x0s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-VhVaxtJC.js";import"./useAnimationId-BJ08w86T.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
