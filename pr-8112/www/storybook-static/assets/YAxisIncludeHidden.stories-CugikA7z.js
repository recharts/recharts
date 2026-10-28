import{r as f,R as e}from"./iframe-DEalUshl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DlX9l8Ve.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CAksOI_1.js";import{C as k}from"./ComposedChart-CdALL1sF.js";import{X as K}from"./XAxis-BITqqVCe.js";import{L as v}from"./Legend-DiL1Iu_V.js";import{B as a}from"./Bar-D4JelM4K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBgDJ6T5.js";import"./Text-DnHyAqDr.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./throttle-DufRm-wd.js";import"./axisSelectors-DjgJ2Mrx.js";import"./d3-scale-R09LkYsV.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BK5G7zbx.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRy_rfXg.js";import"./uniqBy-D0fLoUi4.js";import"./iteratee-aVpqpOpW.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-hToPfPST.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CnZc9_Rc.js";import"./useAnimationId-_MrDTWeG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./tooltipContext-BwZmmqwW.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./ErrorBarContext-CNmRRpz3.js";import"./activeStyles-DOcC-AXu.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getZIndexFromUnknown-CAZViM58.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./omit-DyRDxTHk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
