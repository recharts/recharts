import{r as f,R as e}from"./iframe-Ca9zq6-c.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Di_pPAFf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CR-xpxM6.js";import{C as k}from"./ComposedChart-DleCrOAK.js";import{X as K}from"./XAxis-BXUxDWml.js";import{L as v}from"./Legend-D8rMlQBw.js";import{B as s}from"./Bar-BWbnIkDg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CVL7Gg7t.js";import"./CartesianAxis-Cdin4D0O.js";import"./Layer-D2dY01rr.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./Label-Dc6nn1YN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./types-DL0DYnfp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./immer-BRLk8fdE.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./Symbols-DqIr3c5H.js";import"./symbol-CUsmHQpS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-lMCe9HxU.js";import"./uniqBy-DQNXoyeH.js";import"./iteratee-BGMi6Zy8.js";import"./tooltipContext-B6laIlo7.js";import"./ReactUtils-CQ3qeCfU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cd2dU1AM.js";import"./useAnimationId-DX_MO7p4.js";import"./ActiveShapeUtils-zHL_kIK3.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./ErrorBarContext-BNMjRvsS.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./getZIndexFromUnknown-c_WrGoh0.js";import"./graphicalItemSelectors-CQ9fLIUB.js";const ve={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
