import{r as f,R as e}from"./iframe-C55y8OzM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DGa7nV3z.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-mi5wuovt.js";import{C as k}from"./ComposedChart-DsJNQyNb.js";import{X as K}from"./XAxis-BhP0mslG.js";import{L as v}from"./Legend-DyRKl7qb.js";import{B as a}from"./Bar-DkhpMUyg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./pageBackground-D6U7S1qf.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdI7uft_.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./axisSelectors-DyDkozWt.js";import"./throttle-zPKptILV.js";import"./d3-scale-CwLPJ1sG.js";import"./CartesianAxis-UMkVq4pL.js";import"./Layer-D0VzgPFA.js";import"./types-BjarwEzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DsEVXtD9.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./Symbols-Brox2qm_.js";import"./symbol-Btd-f6kS.js";import"./path-DyVhHtw_.js";import"./useElementOffset--zSzp9Ca.js";import"./uniqBy-Cvg7I5_E.js";import"./iteratee-B67uZlwB.js";import"./activeStyles-DVnALFej.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kX1A_stc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./tooltipContext-CA6M0awf.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getZIndexFromUnknown-Cj3V-2_L.js";import"./useEffectiveDataKey-BY6K7cit.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
