import{R as e}from"./iframe-pNwHFSPW.js";import{R as n}from"./zIndexSlice-DugJPvbP.js";import{C as s}from"./ComposedChart-AJqQajBW.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dvq79oxD.js";import{X as f}from"./XAxis-KNJz3bpH.js";import{Y as l}from"./YAxis-BhLAmjxa.js";import{R as d}from"./ReferenceDot-DG9MmlRQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B5IaBbRH.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./isWellBehavedNumber-DROlGubD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./axisSelectors-BSoQDh0E.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./Label-Bzd_UlcO.js";import"./ZIndexLayer-CUbdM7HK.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-ByamxSDz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
