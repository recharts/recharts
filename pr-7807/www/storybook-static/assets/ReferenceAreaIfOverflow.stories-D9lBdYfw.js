import{R as e}from"./iframe-CpojRMYz.js";import{R as p}from"./zIndexSlice-D1ADf7PX.js";import{C as s}from"./ComposedChart-B6PO2aMu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Btdhmk74.js";import{X as d}from"./XAxis-DrbaoPhb.js";import{Y as l}from"./YAxis-emyLb2hw.js";import{R as h}from"./ReferenceArea-C_pthOP3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2TOI5CL8.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CF4JxjLb.js";import"./axisSelectors-BWpXFhCq.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./Text-l7Cxp-9T.js";import"./DOMUtils-Bwqm48A6.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./Label-C3-HdBMA.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DMpLU3WW.js";import"./useAnimationId-CwhUANii.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
