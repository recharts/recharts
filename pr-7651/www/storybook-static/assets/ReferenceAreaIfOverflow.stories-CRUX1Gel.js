import{R as e}from"./iframe-pNwHFSPW.js";import{R as s}from"./zIndexSlice-DugJPvbP.js";import{C as p}from"./ComposedChart-AJqQajBW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dvq79oxD.js";import{X as d}from"./XAxis-KNJz3bpH.js";import{Y as l}from"./YAxis-BhLAmjxa.js";import{R as h}from"./ReferenceArea-B2187QXp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B5IaBbRH.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./isWellBehavedNumber-DROlGubD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./axisSelectors-BSoQDh0E.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./Label-Bzd_UlcO.js";import"./ZIndexLayer-CUbdM7HK.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CkjZyP7u.js";import"./useAnimationId-DPXGQUo9.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
