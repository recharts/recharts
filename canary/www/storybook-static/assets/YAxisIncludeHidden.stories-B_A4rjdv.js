import{r as f,R as e}from"./iframe-DuosGyDB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-0dGXX3NL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Da09UpSD.js";import{C as k}from"./ComposedChart-kJQ__URY.js";import{X as K}from"./XAxis-C-4m1UDl.js";import{L as v}from"./Legend-eZbVNtkY.js";import{B as a}from"./Bar-CEyva5Lf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CD5z-ltE.js";import"./Text-ws-7QaY4.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./pageBackground-BOChA0aI.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B7YuRzj4.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./axisSelectors-BhFgqUpp.js";import"./throttle-BFe2F0jb.js";import"./d3-scale-BcfysILW.js";import"./CartesianAxis-BQQINrGM.js";import"./Layer-kSYl9qai.js";import"./types-DpRgdAcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DqMyJeth.js";import"./index-C8gr5WFK.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";import"./activeStyles-Cx6m_4O3.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xphMqkoD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HElctZzh.js";import"./tooltipContext-CDP0qc2I.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getZIndexFromUnknown-B20ksQh_.js";import"./useEffectiveDataKey-BuRZ7bwL.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
