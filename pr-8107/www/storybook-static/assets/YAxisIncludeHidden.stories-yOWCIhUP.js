import{r as f,R as e}from"./iframe-BGa_aXYV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CP1brurK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ck6l0OZs.js";import{C as k}from"./ComposedChart-wHTG2hfS.js";import{X as K}from"./XAxis-CE3oHyxg.js";import{L as v}from"./Legend-Dilw1X-J.js";import{B as a}from"./Bar-hPUmwWmc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bzq01dK8.js";import"./Text-mATLrig6.js";import"./resolveDefaultProps--MxbOSxe.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./throttle-odPHgumR.js";import"./axisSelectors-BhlTci4j.js";import"./d3-scale-D32hxSnZ.js";import"./CartesianAxis-D2QFH6SB.js";import"./Layer-Bzj9T_Rp.js";import"./types-BlkSdkM7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BTlrgf4s.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-dSe8emrx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNMIfASl.js";import"./useAnimationId-BY6DYNe9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./tooltipContext-rNLAi3ah.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./ErrorBarContext-DCAq7oKy.js";import"./activeStyles-DZX2Soqz.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getZIndexFromUnknown-DnoxmsUU.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./omit-ax2xeIYV.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
