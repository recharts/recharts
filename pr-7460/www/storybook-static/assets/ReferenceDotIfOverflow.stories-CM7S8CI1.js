import{R as e}from"./iframe-sORstnao.js";import{R as n}from"./zIndexSlice-D4nSzQXG.js";import{C as s}from"./ComposedChart-BlA17Ulf.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CoCW4h36.js";import{X as f}from"./XAxis-CLx5zWj1.js";import{Y as l}from"./YAxis-B0nIj3Rm.js";import{R as d}from"./ReferenceDot-DaTdWWxq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-6f0a2Itz.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./get-41kC8iMv.js";import"./resolveDefaultProps-CiA9punn.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./Label-SYMy3G3-.js";import"./ZIndexLayer-BEh4PufB.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-EjXLgxI9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
