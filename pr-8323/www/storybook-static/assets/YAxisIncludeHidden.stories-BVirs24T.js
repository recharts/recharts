import{r as f,R as e}from"./iframe-J6essBJs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Ou9wZ7uM.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BsmeZsA8.js";import{C as k}from"./ComposedChart-Bs7sztQ5.js";import{X as K}from"./XAxis-Oxu4uJGF.js";import{L as v}from"./Legend-DlRQ2Vo9.js";import{B as a}from"./Bar-BUbxm_XB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./Label-DrwYb9eR.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoWbS56a.js";import"./throttle-rB4iKGhW.js";import"./axisSelectors-COh-2QwC.js";import"./diverging-mCWeQZGc.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CQZiUgoa.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CGfgSTTk.js";import"./uniqBy-W156VtsH.js";import"./iteratee-DWpXed5n.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BOxNMiFO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D7oaCIG9.js";import"./useAnimationId-TXNHUPXz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./tooltipContext-DSBQQpWt.js";import"./ErrorBarContext-BsKM5vJT.js";import"./activeStyles-Bv4vkUPt.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./getZIndexFromUnknown-B_FQ6YGb.js";import"./useEffectiveDataKey-XIQJdOoE.js";import"./omit-BLhRN2pu.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
