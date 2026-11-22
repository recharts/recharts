import{r as f,R as e}from"./iframe-CGGZfnCV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DBOKklMV.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BqswsCB2.js";import{C as k}from"./ComposedChart-BcV6dG2I.js";import{X as K}from"./XAxis-D0RGLID7.js";import{L as v}from"./Legend-B6u0LYsj.js";import{B as a}from"./Bar-tPMtoLyP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BodzTsEv.js";import"./Text-BWSViN8b.js";import"./resolveDefaultProps-DB16si7p.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./throttle-CPPktxFr.js";import"./axisSelectors-ClqRDW4l.js";import"./d3-scale-DH0gLY6W.js";import"./CartesianAxis-BDMs3FLV.js";import"./Layer-BEhjTHM-.js";import"./types-D01_wvtH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BSU2Mggc.js";import"./uniqBy-awSaeX3A.js";import"./iteratee-CqSBOUYa.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdMdJi_F.js";import"./useAnimationId-CKpnbEUf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./tooltipContext-tytBYaal.js";import"./ErrorBarContext-C-uWWZZj.js";import"./activeStyles-C8mJMGZo.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./getZIndexFromUnknown-CnwO_WEL.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./omit-BVNq-1Xe.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
