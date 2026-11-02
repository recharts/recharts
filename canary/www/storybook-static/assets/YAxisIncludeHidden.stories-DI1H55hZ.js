import{r as f,R as e}from"./iframe-DVXtBbhv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-e33_-5yv.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CRXmCTqm.js";import{C as k}from"./ComposedChart-BchTIeWN.js";import{X as K}from"./XAxis-BQ7gOxOo.js";import{L as v}from"./Legend-Dlxza6ak.js";import{B as a}from"./Bar-BnVSJ396.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-5Ji-gJCy.js";import"./Text-vABaHyza.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./throttle-CSTRLONy.js";import"./axisSelectors-M5GsU3rg.js";import"./d3-scale-Ctk2L_AK.js";import"./CartesianAxis-BnuaOFtw.js";import"./Layer-DvCe8pYL.js";import"./types-DRd1AoLJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-R8U0hgkF.js";import"./uniqBy-DRpOlyJe.js";import"./iteratee-BH10e2Wz.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-h2AkLue_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWRYsjhQ.js";import"./useAnimationId-mwIlAEpa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./tooltipContext-DfrRO7K2.js";import"./dataEntryStyles-aRHeEgvk.js";import"./ErrorBarContext-DvlMCK3a.js";import"./activeStyles-C5r4Jq_u.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getZIndexFromUnknown-CVXE7EWA.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./omit-BAMjBdfC.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
