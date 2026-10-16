import{r as f,R as e}from"./iframe-D9OaE0-D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B27MwDT8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C6kYgFGy.js";import{C as k}from"./ComposedChart-7wLgVQR2.js";import{X as K}from"./XAxis-jEEi2ah-.js";import{L as v}from"./Legend-DkqrCmau.js";import{B as a}from"./Bar-BNJnbef3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DM3WzLWy.js";import"./Text-BzPsoW0G.js";import"./resolveDefaultProps-BdEIFooo.js";import"./pageBackground-Cv-86bVo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_H7NPBA.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./axisSelectors-D_Wp4SpS.js";import"./throttle-C2SndTCZ.js";import"./d3-scale-C7A9n28f.js";import"./CartesianAxis-piiyQKSw.js";import"./Layer-D4toxw-K.js";import"./types-CXdLVzsF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-2JOV4OxH.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./Symbols-CbfWA2CL.js";import"./symbol-Cw1fMt1F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZfP2Owcx.js";import"./uniqBy-yYv24bjR.js";import"./iteratee-4GlLraWT.js";import"./activeStyles-8VQiBHQs.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BseNEmt0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./tooltipContext-xzp5Odnb.js";import"./ErrorBarContext-CIfQ1Dv4.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getZIndexFromUnknown-RJrKb_ME.js";import"./useEffectiveDataKey-B44sET-2.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
