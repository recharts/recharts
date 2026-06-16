import{r as f,R as e}from"./iframe-DmhIhH2M.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Bd-9gvNF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DeBpIagA.js";import{C as k}from"./ComposedChart-ChlzmAy5.js";import{X as K}from"./XAxis-CY-yJKaB.js";import{L as v}from"./Legend-FVCMzRGs.js";import{B as s}from"./Bar-DAKefZGO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BMOKRRSC.js";import"./CartesianAxis-C8QhC4vv.js";import"./Layer-BQ4TD7AW.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./isWellBehavedNumber-yi49kod_.js";import"./Label-C1lSOaos.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qAObD_uq.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./types-ChCyCTKP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./immer-lqUHKS7P.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./Symbols-bmVrm1PP.js";import"./symbol-DzNzzMDl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";import"./tooltipContext-r-gHsS5Z.js";import"./AnimatedItems-D_A-W6sA.js";import"./useAnimationId-CIds5Px0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUGLdKb8.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getZIndexFromUnknown-DgPuOini.js";import"./graphicalItemSelectors-CW756Y0s.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
