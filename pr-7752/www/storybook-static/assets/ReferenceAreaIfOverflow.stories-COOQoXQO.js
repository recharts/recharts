import{R as e}from"./iframe-DJz24IKn.js";import{R as p}from"./zIndexSlice-CaAOW0et.js";import{C as s}from"./ComposedChart-xCfhu6hO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bi-iBoOE.js";import{X as d}from"./XAxis-BvHkm7Qz.js";import{Y as l}from"./YAxis-D-LGUrvE.js";import{R as h}from"./ReferenceArea-DC9UB92y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsbtN1cS.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DWus6mTf.js";import"./axisSelectors-Dn-i2Eyh.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./Layer-CBv-uhLi.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./Label-VNkqCN5V.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./types-DwqEhWGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BGv_Gg_1.js";import"./useAnimationId-CK0cbgiG.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
