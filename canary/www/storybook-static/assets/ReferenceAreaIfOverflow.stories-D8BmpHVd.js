import{R as e}from"./iframe-Dkncjqe5.js";import{R as p}from"./zIndexSlice-3Eut4nle.js";import{C as s}from"./ComposedChart-Dy5YJ26L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BC3bQ9Jk.js";import{X as d}from"./XAxis-BAQVI_cg.js";import{Y as l}from"./YAxis-Dxbos16T.js";import{R as h}from"./ReferenceArea-usyhA8Ri.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fiJaoKIv.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./axisSelectors-DzgXC3ir.js";import"./d3-scale-D7_DItYV.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-DULW3GES.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./Label-V2ZN4uKZ.js";import"./ZIndexLayer-DaEkt6aU.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-A_cS0CAA.js";import"./useAnimationId-MEfDv_ZE.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
