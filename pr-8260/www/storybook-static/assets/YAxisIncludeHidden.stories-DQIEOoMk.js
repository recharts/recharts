import{r as f,R as e}from"./iframe-BrId7CKe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CGC-AYss.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DF5zMGO6.js";import{C as k}from"./ComposedChart-Cnp7765T.js";import{X as K}from"./XAxis-CGJzYa5v.js";import{L as v}from"./Legend-ByWeI-o6.js";import{B as a}from"./Bar-C3ge_sdb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BOSTGjYW.js";import"./Text-CtzCspEf.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./ZIndexLayer-DtobrSuN.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BScTjZiA.js";import"./throttle-CvD-CMS9.js";import"./axisSelectors-BWicBn7w.js";import"./d3-scale-Did4wLnp.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0PTLzSu.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CyYI02cJ.js";import"./uniqBy-DKGrDlDL.js";import"./iteratee-BEaiqON8.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiqZRBIg.js";import"./useAnimationId-DnW4K7Yj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./tooltipContext-CzexA5ec.js";import"./ErrorBarContext-Di-OPTeN.js";import"./activeStyles-haHqTj48.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./getZIndexFromUnknown-DuaM8Eae.js";import"./useEffectiveDataKey-BlMggeza.js";import"./omit-3XqNU2p2.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
