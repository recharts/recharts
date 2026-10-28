import{R as e}from"./iframe-DEalUshl.js";import{R as s}from"./zIndexSlice-CAksOI_1.js";import{C as p}from"./ComposedChart-CdALL1sF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CkISHoQE.js";import{X as d}from"./XAxis-BITqqVCe.js";import{Y as l}from"./YAxis-DlX9l8Ve.js";import{R as h}from"./ReferenceArea-C5UAbUE7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./throttle-DufRm-wd.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./RechartsWrapper-BK5G7zbx.js";import"./axisSelectors-DjgJ2Mrx.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./Text-DnHyAqDr.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./Label-CBgDJ6T5.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CnZc9_Rc.js";import"./useAnimationId-_MrDTWeG.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
