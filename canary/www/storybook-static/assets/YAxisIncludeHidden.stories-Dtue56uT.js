import{r as f,R as e}from"./iframe-0XL0sthS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BB_fEBXq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C9Fui9SZ.js";import{C as k}from"./ComposedChart-Deu_CMYg.js";import{X as K}from"./XAxis-8dcEWD9_.js";import{L as v}from"./Legend-C5lZ5guZ.js";import{B as a}from"./Bar-4oEz1n5v.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./throttle-Dos2q2R1.js";import"./dataEntryStyles-jYd5_Tui.js";import"./axisSelectors-CET1BM1x.js";import"./d3-scale-D8BAYDAt.js";import"./CartesianAxis-P0zAs4bB.js";import"./Layer-3mPd111u.js";import"./types-B6SF8UCq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-mX6d9D.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BydIrxuW.js";import"./uniqBy-DSUFf6NQ.js";import"./iteratee-C_ZjvgJo.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Bxms0g1E.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cwefqyhe.js";import"./useAnimationId-RVbaj9rd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./tooltipContext-83SIdlui.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./activeStyles-DtmDpwwD.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getZIndexFromUnknown-B-eE6KkA.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./omit-DbXB84Si.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
