import{R as e}from"./iframe-C2FiVbx6.js";import{R as s}from"./zIndexSlice-CIwOLMY2.js";import{C as p}from"./ComposedChart-Bj-Vd15E.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D1Z1SWnN.js";import{X as d}from"./XAxis-BpwUAM2i.js";import{Y as l}from"./YAxis-H-bG_GIE.js";import{R as h}from"./ReferenceArea-BZDPQnmD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./RechartsWrapper-CzRJf9wd.js";import"./axisSelectors-DzJ8Skeq.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./Label-oSfspIu2.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-COqz7K3J.js";import"./useAnimationId-DeWO3OMz.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
