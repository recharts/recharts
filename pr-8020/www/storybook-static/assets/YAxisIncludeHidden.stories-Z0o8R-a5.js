import{r as f,R as e}from"./iframe-BYNQK8LM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CHFcgGbi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CnKvPC-T.js";import{C as k}from"./ComposedChart-CliK5bO3.js";import{X as K}from"./XAxis-CBcIWiwv.js";import{L as v}from"./Legend-BksFtpyC.js";import{B as a}from"./Bar-BcpcZOGd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label--8HpHVT6.js";import"./Text-uEN8Pqjn.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./pageBackground-ezRX3My0.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DnQxIb9c.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./axisSelectors-f_hhqOEQ.js";import"./throttle-DlEVZZqo.js";import"./d3-scale-D4yBTTO3.js";import"./CartesianAxis-DHgd3hOW.js";import"./Layer-CWziNCLd.js";import"./types-8Tp7AoeZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-Cg_72k7E.js";import"./index-CsXf8i4B.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Di3THVkM.js";import"./index-C5WITlKt.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./Symbols-DryRVk5L.js";import"./symbol-CDBfvHL7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dn-sBbsw.js";import"./uniqBy-CHpNcSg2.js";import"./iteratee-CAw-gtof.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CDuvBT6X.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtScsc5f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./tooltipContext-DdQ6U365.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getZIndexFromUnknown-BD35HtNd.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./omit-x0RYk8Kc.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
