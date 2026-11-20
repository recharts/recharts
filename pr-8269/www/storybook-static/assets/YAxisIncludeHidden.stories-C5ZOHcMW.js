import{r as f,R as e}from"./iframe-qp48uAQ7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DlgcwvPx.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KCJej1vF.js";import{C as k}from"./ComposedChart-CiZY4n0u.js";import{X as K}from"./XAxis-DBjPaOy0.js";import{L as v}from"./Legend-BgAjc9md.js";import{B as a}from"./Bar-GEtuL3Cq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Sje2x2ae.js";import"./Text-9axAMSSa.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./ZIndexLayer-B5vbT5ul.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./throttle-DidOwtMq.js";import"./axisSelectors-EQaPQOEj.js";import"./d3-scale-C1UROyMV.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-1rMBmo6H.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Dp4_SaWM.js";import"./uniqBy-Cnk-Rop6.js";import"./iteratee-CnEj035Y.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-MmJGBd3d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cfn5NBZC.js";import"./useAnimationId-gBLR8eku.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ilFziir.js";import"./tooltipContext-CRinBg2b.js";import"./ErrorBarContext-BOAdtyxi.js";import"./activeStyles-CvvZZ1RN.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./getZIndexFromUnknown-BAgHT1YF.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./omit-D2tnasXN.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
