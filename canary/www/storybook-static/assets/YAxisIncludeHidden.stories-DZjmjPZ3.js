import{r as f,R as e}from"./iframe-lJBwbutv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DzJ296_j.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DOZGt0Xc.js";import{C as k}from"./ComposedChart-Cxisz18M.js";import{X as K}from"./XAxis-eFYFTspd.js";import{L as v}from"./Legend-m3nE9M3l.js";import{B as a}from"./Bar-DCGMePyX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C1XxCcqG.js";import"./Text-CH7ZTJa6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./ZIndexLayer-DMFEoW6r.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-g2gwazbI.js";import"./throttle-BD4ZOoVc.js";import"./axisSelectors-CiZzV4Ua.js";import"./d3-scale-BrfLvVJ7.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4uciLnE.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zJJN7xLG.js";import"./uniqBy-DWWs0y9k.js";import"./iteratee-DkvjpvPG.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BXXFCsKs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLn-6YRh.js";import"./useAnimationId-Dj7sECHw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./tooltipContext-rr--AtsR.js";import"./ErrorBarContext-CF700d8f.js";import"./activeStyles-C_lJCdGG.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getZIndexFromUnknown-DzuXgSkc.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./omit-DwkGh_sW.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
