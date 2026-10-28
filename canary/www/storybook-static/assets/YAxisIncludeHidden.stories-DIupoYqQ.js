import{r as f,R as e}from"./iframe-Bvdgb1qV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BeFwt-ht.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B01j9Vcs.js";import{C as k}from"./ComposedChart-Buy3_glc.js";import{X as K}from"./XAxis-D59h15hK.js";import{L as v}from"./Legend-DI99byP4.js";import{B as a}from"./Bar-Dn4NbgOm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DP6vSrfL.js";import"./Text-DPvkSF-G.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEav2p-j.js";import"./throttle-BPyPQEAQ.js";import"./dataEntryStyles-BpvBRnn1.js";import"./axisSelectors-B7JYqxaB.js";import"./d3-scale-AQ3fTkSg.js";import"./CartesianAxis-qmdlREsz.js";import"./Layer-C-2DDjxl.js";import"./types-BLGnyPc9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BzPq7Pbp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-N8aUytSm.js";import"./useAnimationId-t1eD8fzp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./tooltipContext-Rzl4-Jch.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./activeStyles-D6UDaEYG.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getZIndexFromUnknown-ClX14vNe.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./omit-Bx-usdV-.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
