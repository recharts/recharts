import{r as f,R as e}from"./iframe-C3lSaTFw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CGdCh3qj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CVjGcfFW.js";import{C as k}from"./ComposedChart-ByMiL3yy.js";import{X as K}from"./XAxis-MYsgX6vB.js";import{L as v}from"./Legend-cxhj2kjR.js";import{B as a}from"./Bar-ClwUFC8D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./DOMUtils-DW6zNYNN.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIuAiCXb.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./throttle-BAVesAqd.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianAxis-BQ-frZs4.js";import"./Layer-DCoygAxl.js";import"./types-BmaDYfeO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./Symbols-gLeSQBZx.js";import"./symbol-BKxV6GsZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cal3qYIU.js";import"./uniqBy-CNbis68a.js";import"./iteratee-BZbHMMPe.js";import"./AnimatedItems-BIU8Piw-.js";import"./useAnimationId-Dtjg15yn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8U833xr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./tooltipContext-D_PIy0yL.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getZIndexFromUnknown-C2MPDSv4.js";import"./useGraphicalItemIdentity-B93Md1_E.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
