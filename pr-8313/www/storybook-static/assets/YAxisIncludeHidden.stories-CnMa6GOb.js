import{r as f,R as e}from"./iframe-Bpzk9XpD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-h8NK-7C6.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CybCXANO.js";import{C as k}from"./ComposedChart-OJyIgW0F.js";import{X as K}from"./XAxis-BP9q3ZDK.js";import{L as v}from"./Legend-UtQoP2bc.js";import{B as a}from"./Bar-BfXwiROK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./Label-eMApu8Ae.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./throttle-BPowKzWT.js";import"./axisSelectors-BX6dGTcL.js";import"./diverging-NmCyEWmm.js";import"./CartesianAxis-DyKfTr_o.js";import"./Layer-DCNhrIPV.js";import"./types-BjOl9SGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlW5DJbf.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DUi4H2Fd.js";import"./uniqBy-DJXoe2B2.js";import"./iteratee-nuQs-o3F.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CqhA2T9I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6Dmq4B9R.js";import"./useAnimationId-B2Y87b6z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./tooltipContext-D0ANBb_b.js";import"./ErrorBarContext-CEm3_QIT.js";import"./activeStyles-Dvq2y-2D.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./getZIndexFromUnknown-b2quTXB_.js";import"./useEffectiveDataKey-Cem866lm.js";import"./omit-DcYFru-w.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
