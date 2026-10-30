import{r as f,R as e}from"./iframe-B89lyy_-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CnBxKCbE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BefUx2Nd.js";import{C as k}from"./ComposedChart-BsssixLG.js";import{X as K}from"./XAxis-CSc3N7hL.js";import{L as v}from"./Legend-ANhqDYkd.js";import{B as a}from"./Bar-DaOrSdsz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C15axuMc.js";import"./Text-Dp5nXiQm.js";import"./resolveDefaultProps-CABzBelW.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./throttle-BZuMAyb2.js";import"./axisSelectors-DR4qXUjK.js";import"./d3-scale-BgC9WZfP.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-VgXxR9hf.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-B-2MwM8M.js";import"./dataEntryStyles-C4pyloN-.js";import"./useElementOffset-DD1T0fU1.js";import"./uniqBy-QREi1o1G.js";import"./iteratee-Dd6IP1KA.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-6ZaFDz_R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXq2cdeR.js";import"./useAnimationId-CrfHw1CS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./tooltipContext-Dxp7rSLd.js";import"./ErrorBarContext-CHzFixYj.js";import"./activeStyles-CQvoijJ0.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getZIndexFromUnknown-BsKTAFT9.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./omit-BrVOqOU-.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
