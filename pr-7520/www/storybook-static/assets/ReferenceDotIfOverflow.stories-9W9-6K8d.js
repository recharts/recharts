import{R as e}from"./iframe-D-BXEDkQ.js";import{R as n}from"./zIndexSlice-CNOaqOPA.js";import{C as s}from"./ComposedChart-DggYfUEi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B1yDuSfR.js";import{X as f}from"./XAxis-CsYsIQZ3.js";import{Y as l}from"./YAxis-CY9nfIzq.js";import{R as d}from"./ReferenceDot-84KLPzA3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcYZZCS9.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./d3-scale-Cw0gW9iZ.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./Label-BXssQtMI.js";import"./ZIndexLayer-BMtWXslr.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-JDsRBdmy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
