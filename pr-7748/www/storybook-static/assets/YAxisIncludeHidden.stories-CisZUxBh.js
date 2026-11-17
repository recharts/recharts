import{r as f,R as e}from"./iframe-BRuR_Aem.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CTNE1Ach.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bj7VXWF6.js";import{C as k}from"./ComposedChart-BfbWwovc.js";import{X as K}from"./XAxis-DkgTjfQy.js";import{L as v}from"./Legend-CGqrsjIi.js";import{B as a}from"./Bar-CB33Zn9r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BRU8Jowp.js";import"./Text-DCSoJ6K5.js";import"./resolveDefaultProps-CB_4huk8.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./throttle-Bze-tpN5.js";import"./axisSelectors-vJ_QG27E.js";import"./d3-scale-D-1jLUlb.js";import"./CartesianAxis-khCvplyM.js";import"./Layer-DH8vqzA_.js";import"./types-LyIymARE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzKiCd-F.js";import"./uniqBy-CMkG7L-l.js";import"./iteratee-Bz7ftEAa.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D3durKHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuBia6p2.js";import"./useAnimationId-CqnKfWIo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./tooltipContext-QS9D-yjw.js";import"./ErrorBarContext-BSmlh0M0.js";import"./activeStyles-ddHtcBjm.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./getZIndexFromUnknown-V73OkGI2.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./omit-Dwhz06lk.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
