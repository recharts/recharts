import{r as f,R as e}from"./iframe-Ct1svimm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DJ-mdmri.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DuTNyMvu.js";import{C as k}from"./ComposedChart-Cy6iJ-vC.js";import{X as K}from"./XAxis-DQtY80zm.js";import{L as v}from"./Legend-Bd6FU5Xr.js";import{B as a}from"./Bar-NsEmdJ2C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B2Mk85O5.js";import"./Text-VSzLHfPE.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./ZIndexLayer-BltRI-Nr.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./throttle-pNdBRgo_.js";import"./axisSelectors-CIwgaX7y.js";import"./d3-scale-BL9MDqqK.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0VQQHcg.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CY9fcLag.js";import"./uniqBy-BMmxp9UC.js";import"./iteratee-BWHT356U.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CHH9ur-w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sIigVXDT.js";import"./useAnimationId-CDKCdXQz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./tooltipContext-CjOvsAyy.js";import"./ErrorBarContext-CQBLFEFh.js";import"./activeStyles-DWgBPDlx.js";import"./SetGraphicalItem-inprgaSw.js";import"./getZIndexFromUnknown-CLDmdJG2.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./omit-BUxAPCMO.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
