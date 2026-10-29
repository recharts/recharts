import{r as f,R as e}from"./iframe-CuGhPmlk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLBgWodt.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BOf55cXv.js";import{C as k}from"./ComposedChart-BaRxWhmE.js";import{X as K}from"./XAxis-CKjURUro.js";import{L as v}from"./Legend-CV_YUnjK.js";import{B as a}from"./Bar-DWTid5V3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B62wTY7D.js";import"./Text-L-8TUXNX.js";import"./resolveDefaultProps-JU216Ibw.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./throttle-D0-4r1vg.js";import"./axisSelectors-Bzh2qDn8.js";import"./d3-scale-DH8f3Idv.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CkD6y7S6.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DovsWr-R.js";import"./uniqBy-D9UgBzVb.js";import"./iteratee-CkLtFoKx.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-T4o6_Eqe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CA1kt8UJ.js";import"./useAnimationId-DwU2Zwh7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./tooltipContext-DBELoiW1.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./ErrorBarContext-B35UIqZH.js";import"./activeStyles-U82greWp.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getZIndexFromUnknown-DzCSh5Gk.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./omit-AMeldnD3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
