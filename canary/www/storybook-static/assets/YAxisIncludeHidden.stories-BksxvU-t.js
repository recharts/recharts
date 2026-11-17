import{r as f,R as e}from"./iframe-Bu5r_UoW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-sL3yeYN7.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BoZi0EKL.js";import{C as k}from"./ComposedChart-CGLPX3yw.js";import{X as K}from"./XAxis-CnJljd4s.js";import{L as v}from"./Legend-CG1wFSPg.js";import{B as a}from"./Bar-CjChK6uM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0RpFXi-A.js";import"./Text-Whpl_RQm.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./ZIndexLayer-BpE6rRDX.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./throttle-BpoLTe0M.js";import"./axisSelectors-Bhk2XSO9.js";import"./d3-scale-DImarRMe.js";import"./CartesianAxis-DeK_gPGC.js";import"./Layer-DFVqeIzd.js";import"./types-Bn2H5HlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqfNjaYX.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cvj3h31Q.js";import"./uniqBy-CyQEgUk3.js";import"./iteratee-0LTiAB4q.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C66iRC8T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M1V3Y4MR.js";import"./useAnimationId-BnIWNy46.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./tooltipContext-DfROrrQb.js";import"./ErrorBarContext-C-78saLU.js";import"./activeStyles-8B2_TUAk.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getZIndexFromUnknown-DZMQ3R8e.js";import"./useEffectiveDataKey-BxhAq3wv.js";import"./omit-COdxDF2M.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
