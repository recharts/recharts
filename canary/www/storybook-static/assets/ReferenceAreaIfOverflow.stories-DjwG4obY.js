import{R as e}from"./iframe-jpw6hTzP.js";import{R as s}from"./zIndexSlice-0hywYSss.js";import{C as p}from"./ComposedChart-CLKvf99S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B8YhQS5n.js";import{X as d}from"./XAxis-i-qKaY8p.js";import{Y as l}from"./YAxis-Cro589xA.js";import{R as h}from"./ReferenceArea-Bqq1pbaO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyRNR61p.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./Label-Ddiq2mWQ.js";import"./ZIndexLayer-qT8qrsoe.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-BLYrXLOh.js";import"./useAnimationId-BDRU6NIW.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
