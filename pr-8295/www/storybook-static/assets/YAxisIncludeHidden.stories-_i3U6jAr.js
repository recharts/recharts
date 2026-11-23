import{r as f,R as e}from"./iframe-kLrggBpZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B5avTU_X.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CKCGde2F.js";import{C as k}from"./ComposedChart-DaK4Bp3q.js";import{X as K}from"./XAxis-B-2vEHb0.js";import{L as v}from"./Legend-pS2At-4X.js";import{B as a}from"./Bar-BJ67uZXE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CpspZ4dp.js";import"./Text-DNntKRRw.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./ZIndexLayer-CZ_FttOi.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./throttle-BkTfx27C.js";import"./axisSelectors-D6wM5g8f.js";import"./d3-scale-DE-4LfFJ.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DVOP9mMm.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BhEl9_49.js";import"./uniqBy-B-ByEpXp.js";import"./iteratee-B7qBUA2a.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DxslDEhK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f81kex-M.js";import"./useAnimationId-CEVcGH0v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./tooltipContext-Ddmapz-Y.js";import"./ErrorBarContext-MaEtcn-S.js";import"./activeStyles-BevLUsk4.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./getZIndexFromUnknown-DNluFhwA.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./omit-B2VxqQbn.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
