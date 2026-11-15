import{r as f,R as e}from"./iframe-DQsNmxmG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D-cWoYYZ.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-fYCbSPba.js";import{C as k}from"./ComposedChart-CViFtKa3.js";import{X as K}from"./XAxis-BeNbg6hp.js";import{L as v}from"./Legend-Bw2hlUcx.js";import{B as a}from"./Bar-BH_ML8yC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./ZIndexLayer-DJNsuc82.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-0rkllN.js";import"./throttle-zQAbuFwu.js";import"./axisSelectors-BsRkt3Xk.js";import"./d3-scale-BIy4_L5R.js";import"./CartesianAxis-Crywq0Oq.js";import"./Layer-JjdEQyi5.js";import"./types-wkisKABV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MEg26Y_7.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cpkvj5mB.js";import"./uniqBy-sQmteKOL.js";import"./iteratee-v4pwgsAc.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CArKPFy6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rFuZYgZx.js";import"./useAnimationId-CfQHWCsS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./tooltipContext-l1grKCFD.js";import"./ErrorBarContext-WH4H2KKq.js";import"./activeStyles-BgO2Wbsx.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getZIndexFromUnknown-CelNEHss.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./omit-CO-53XuN.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
