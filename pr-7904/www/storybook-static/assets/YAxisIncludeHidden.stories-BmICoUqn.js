import{r as f,R as e}from"./iframe-F-DUQmzx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DMt8A7ih.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B0XgO37h.js";import{C as k}from"./ComposedChart-BciQM212.js";import{X as K}from"./XAxis-CueAAdhT.js";import{L as v}from"./Legend-YXZFBq_w.js";import{B as a}from"./Bar-HR2u-7FE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B3Zz6TZ9.js";import"./Text-CORYS8dP.js";import"./resolveDefaultProps-54NLwGe7.js";import"./DOMUtils-DPU74_Ri.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G7VYzfve.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./throttle-DpMrsvGt.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./Symbols-K1su9SmC.js";import"./symbol-CPJFdzCM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0MzWZVh.js";import"./uniqBy-BJq_zyLF.js";import"./iteratee-DqoyaVpm.js";import"./AnimatedItems-TRoMQ37Y.js";import"./useAnimationId-BjShbhcH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dr6hKtyQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBGLeya9.js";import"./tooltipContext-DdiULKBv.js";import"./RegisterGraphicalItemId-osvmWAHd.js";import"./ErrorBarContext-WZQ5BE4f.js";import"./GraphicalItemClipPath-Ts1JrvmG.js";import"./SetGraphicalItem-Dh88RhAB.js";import"./getZIndexFromUnknown-CMLDvzce.js";import"./useGraphicalItemIdentity-Co6jLI_S.js";import"./dataEntryStyles-C8fldv-r.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
