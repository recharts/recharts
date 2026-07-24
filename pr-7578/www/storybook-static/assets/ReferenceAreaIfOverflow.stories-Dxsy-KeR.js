import{R as e}from"./iframe-Dz-8xobX.js";import{R as s}from"./zIndexSlice-DLGpG8sy.js";import{C as p}from"./ComposedChart-gmjevVFY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CtOV40V3.js";import{X as d}from"./XAxis-DMj3Kvex.js";import{Y as l}from"./YAxis-BHn5bCj9.js";import{R as h}from"./ReferenceArea-D-q1ulz9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BhiZXvYf.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./axisSelectors-RA5EatZ8.js";import"./d3-scale-Eu5vW6Yz.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./CartesianAxis-BSXwVKyu.js";import"./Layer-DM8xvsTO.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./Label-CUth2UOL.js";import"./ZIndexLayer-BepkwV1X.js";import"./types-B2b4Ay33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-BjULrVDC.js";import"./useAnimationId-DHQotoBY.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
