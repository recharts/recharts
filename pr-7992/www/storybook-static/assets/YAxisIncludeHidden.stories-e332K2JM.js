import{r as f,R as e}from"./iframe-DpdlAHMd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLQpEtie.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D40A4F5S.js";import{C as k}from"./ComposedChart-zgSZL8eg.js";import{X as K}from"./XAxis-BEUW7cLW.js";import{L as v}from"./Legend-CoqeD9v2.js";import{B as a}from"./Bar-2V_ZkQs1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-E3aXJx_S.js";import"./Text-CoXwYvwY.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./pageBackground-D9ogOXyk.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-lKfC9naY.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./axisSelectors-DQOroxWm.js";import"./throttle-Bui1B-A-.js";import"./d3-scale-DPtZvEea.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dd9femQq.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./Symbols-BqSBrmZ6.js";import"./symbol-BMskukWu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJ8RLuax.js";import"./uniqBy-D_yJRXK6.js";import"./iteratee-CYPCsLC3.js";import"./activeStyles-D6HKGU7f.js";import"./useAnimationId-BE4SknEb.js";import"./dataEntryStyles-YsQ_uBBL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK9sa7-j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-fnlRVR3C.js";import"./tooltipContext-BJXngdCP.js";import"./ErrorBarContext-CNLce-HY.js";import"./GraphicalItemClipPath-Cs7E0DKS.js";import"./SetGraphicalItem-KfOC3T9M.js";import"./getZIndexFromUnknown-DamPCXHC.js";import"./useEffectiveDataKey-jGEWZ8Yk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
