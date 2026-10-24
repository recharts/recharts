import{r as f,R as e}from"./iframe-B4_QwD1D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BXoC-zzw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CBhoAbgS.js";import{C as k}from"./ComposedChart-BYrbpJyI.js";import{X as K}from"./XAxis-ClMwOqtx.js";import{L as v}from"./Legend-DI9r16Hx.js";import{B as a}from"./Bar-CLApzcZQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-bs3lrZa-.js";import"./Text-D60EpHHD.js";import"./resolveDefaultProps-DIsbUszc.js";import"./pageBackground-BarjFxCc.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLJnSwwV.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./dataEntryStyles-C6hQpsCt.js";import"./axisSelectors-BPJ5zN30.js";import"./throttle-CoBiCp2n.js";import"./d3-scale-DbsLf6d-.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./Layer-Bwh0wvH7.js";import"./types-OK8mrrgc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D2uM5dQm.js";import"./index-D5vd9j9o.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./Symbols-Ci7sUahQ.js";import"./symbol-45SraHnz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsVVqcI3.js";import"./uniqBy-Cr-9UYKs.js";import"./iteratee-HAqVuPyF.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-B6_AFvwr.js";import"./useAnimationId-Dxw2C04Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-QGBOtCIB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./tooltipContext-Bj46R6VX.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getZIndexFromUnknown-Pownv5WE.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./omit-DxP95b9-.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
