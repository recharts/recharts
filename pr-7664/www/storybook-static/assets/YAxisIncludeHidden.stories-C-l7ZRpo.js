import{r as f,R as e}from"./iframe-DU8eOjQ1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5Bhkieg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BTgaU9mo.js";import{C as k}from"./ComposedChart-D8lCnIzr.js";import{X as K}from"./XAxis-DwxXrNeT.js";import{L as v}from"./Legend-XINFVufZ.js";import{B as s}from"./Bar-COU1xcMU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Z9o5T8X-.js";import"./Text-AtzkHDEd.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./DOMUtils-Cql2uYAT.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8k4jgaj.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./throttle-Ds7SGj9O.js";import"./axisSelectors-BDOPVsa7.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./CartesianAxis-CXtQQdut.js";import"./Layer-BIDK12wM.js";import"./types-RZ1xD5kE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./Symbols-s2FGnFTW.js";import"./symbol-D0L4AM1n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-GWMwWCSs.js";import"./uniqBy-DbQx-kHr.js";import"./iteratee-Did0_bax.js";import"./AnimatedItems-DENpSSAq.js";import"./useAnimationId-CdvddGlN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfThDaqC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./tooltipContext-C_CDpSBv.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getZIndexFromUnknown-CYPMJSt_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BqNpATTK.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
