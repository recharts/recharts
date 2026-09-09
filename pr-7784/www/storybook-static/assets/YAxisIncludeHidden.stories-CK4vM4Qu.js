import{r as f,R as e}from"./iframe-CUWBn4q2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DznKUGT9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CXDrS8ji.js";import{C as k}from"./ComposedChart-CsAUZMi5.js";import{X as K}from"./XAxis-BLeODyW3.js";import{L as v}from"./Legend-D0pQu-Vm.js";import{B as a}from"./Bar-DrwgWZnE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-kwBf54iY.js";import"./Text-DyTjweFw.js";import"./resolveDefaultProps-D0umfLoR.js";import"./DOMUtils-DIgt7RHT.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./RechartsWrapper-D0kr3yQ2.js";import"./axisSelectors-BtjPkbxT.js";import"./throttle-D674SENT.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./CartesianAxis-B28nXVtL.js";import"./Layer-B2jZ5e2I.js";import"./types-Cm8He0RL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./Symbols-BphLgeeK.js";import"./symbol-B9Ox7FN7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ChKOjUVs.js";import"./uniqBy-BV5A9cpt.js";import"./iteratee-CH0i-qx9.js";import"./AnimatedItems-DFCeZ6-M.js";import"./useAnimationId-75oMmLO2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkXPWe3J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./tooltipContext-Dqre0BOE.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getZIndexFromUnknown-y4PX2ahG.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
