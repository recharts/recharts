import{r as f,R as e}from"./iframe-C-3ZsddJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D4KLVqJs.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CznyzfFG.js";import{C as k}from"./ComposedChart-CtuYyNef.js";import{X as K}from"./XAxis-ZaXNF9D9.js";import{L as v}from"./Legend-CIfx6KHV.js";import{B as a}from"./Bar-C5_fOXmu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKMse05f.js";import"./Text-gCPwfBz1.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./pageBackground-Bkm5uuC-.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G1m3PEiN.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./dataEntryStyles-CEJLUdCX.js";import"./axisSelectors-BJ1i-OvH.js";import"./throttle-B2MnXNQi.js";import"./d3-scale-DV_TqrZd.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-wMqgqvbl.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./Symbols-OLVEorTH.js";import"./symbol-CerJsWCH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHApDFqY.js";import"./uniqBy-B15nsN6v.js";import"./iteratee-iSL6B2R2.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFI7v7xW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./tooltipContext-DIAgqQux.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./getZIndexFromUnknown-cweALYLX.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./omit-B1ykJwbX.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
