import{r as f,R as e}from"./iframe-D3EjTtxy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ChbhO02F.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CR47Grm-.js";import{C as k}from"./ComposedChart-DuMK799R.js";import{X as K}from"./XAxis-CBAr_26y.js";import{L as v}from"./Legend-xKqboeAU.js";import{B as a}from"./Bar-ChXPI4NF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cwzl5MfK.js";import"./Text-D8BNDsFW.js";import"./resolveDefaultProps-CypR0Li3.js";import"./pageBackground-Bgbh54PU.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYrhxp9-.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./axisSelectors-2jJKhRaD.js";import"./throttle-EojsqAtG.js";import"./d3-scale-Bcyj84u8.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./Layer-CAR2aUbH.js";import"./types-OWn5Mrao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BKqCmNei.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Symbols-C_eJ930f.js";import"./symbol-Cwu5ve2k.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcOLWzLv.js";import"./uniqBy-BMWd6n_M.js";import"./iteratee-CFhE0l7L.js";import"./activeStyles-Celt-13r.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkUhA54S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./tooltipContext-AeMc0G5i.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getZIndexFromUnknown-ocp5ONv-.js";import"./useEffectiveDataKey-CruL2487.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
