import{r as f,R as e}from"./iframe-B_MIDKz_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D3fzxS21.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BRdFs8ID.js";import{C as k}from"./ComposedChart-BLBMKU0r.js";import{X as K}from"./XAxis-C4lIERbq.js";import{L as v}from"./Legend-DEqvMq_C.js";import{B as a}from"./Bar-BCask9Je.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CENIwYcD.js";import"./Text-B7cqpu59.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./throttle-BEqz9r6e.js";import"./axisSelectors-Dl7meOBx.js";import"./d3-scale-TVFiOeXq.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CqGFDY60.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kN6XAzkC.js";import"./uniqBy-CXvSLOdk.js";import"./iteratee-CYXB4_wY.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BZln5lTY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-m0bX_fRW.js";import"./useAnimationId-BYTiB8_B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./tooltipContext-Bd3wPk_t.js";import"./dataEntryStyles-BFC38uYF.js";import"./ErrorBarContext-Dwk9fL5w.js";import"./activeStyles-CDqKbiIO.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getZIndexFromUnknown-DSADA5M5.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./omit-BAbgDgVO.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
