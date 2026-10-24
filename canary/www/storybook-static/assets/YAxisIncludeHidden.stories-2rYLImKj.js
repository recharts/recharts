import{r as f,R as e}from"./iframe-DwT3zBcw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Blmef7Zk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1c8R-o4.js";import{C as k}from"./ComposedChart-BRJHnsZA.js";import{X as K}from"./XAxis-DDMS_4GY.js";import{L as v}from"./Legend-BGqif3Gi.js";import{B as a}from"./Bar-BqReAFK0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BJdAgAze.js";import"./Text-aRPMe4ci.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./pageBackground-DsM-Z0Rr.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYMRbOsR.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./axisSelectors-C7AasPYQ.js";import"./throttle-zQvI5ucF.js";import"./d3-scale-DKCZEfGq.js";import"./CartesianAxis-BOCUxksG.js";import"./Layer-DTu28EsQ.js";import"./types-CLejyp8C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-ytYCFw.js";import"./index-Bk7-Tdy1.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./Symbols-Cg4hZU-z.js";import"./symbol-DBcDWVfa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPhfD7za.js";import"./uniqBy-DSw40EQt.js";import"./iteratee-BWpKqSkU.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-0kotXHCs.js";import"./useAnimationId-BjdF1-gz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLCOL5Gn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./tooltipContext-Zx6HZVwu.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./ErrorBarContext-HVEt8c-6.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getZIndexFromUnknown-BmpsiiYo.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./omit-CqiIsrs9.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
