import{r as f,R as e}from"./iframe-Bzny_MYO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CJm4ZJgn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MTgyOxcR.js";import{C as k}from"./ComposedChart-C-U97YwV.js";import{X as K}from"./XAxis-D652bNH-.js";import{L as v}from"./Legend-Cs8q_FQN.js";import{B as a}from"./Bar-ikM8WtMT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DTuGlMPs.js";import"./Text-fNDWB5Io.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./throttle-GvTGKSCT.js";import"./axisSelectors-BEccdncb.js";import"./d3-scale-CLm70OA6.js";import"./CartesianAxis-CF7trjb7.js";import"./Layer-DwImaMiy.js";import"./types-DppBMtwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwCbU-k0.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DP5qLQcH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIffJDOA.js";import"./useAnimationId-DPjHdwMC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./tooltipContext-Iz_t1CFH.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./ErrorBarContext-B5xatTad.js";import"./activeStyles-D4lYsebj.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getZIndexFromUnknown-Cj4bG7xW.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./omit-xpSuvOOd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
