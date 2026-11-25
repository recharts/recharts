import{r as f,R as e}from"./iframe-DkUPJ-sS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DUp2X2GH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-12UiSTLm.js";import{C as k}from"./ComposedChart-3SzIkZlG.js";import{X as K}from"./XAxis-BWwIFA6B.js";import{L as v}from"./Legend-DKjZAMK9.js";import{B as a}from"./Bar-BWBhdnwM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./Label-8ZjagO8_.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXszvLGt.js";import"./throttle-B27eHaYH.js";import"./axisSelectors-DXomLufj.js";import"./d3-scale-CycPPIVV.js";import"./CartesianAxis-CPfh-d6g.js";import"./Layer-Dz0e5F_f.js";import"./types-BwlCxTmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-mRcsep52.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Bn3uQ3yx.js";import"./uniqBy-BDWNlPAq.js";import"./iteratee-WjMYvucc.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BCBCgPLo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG9rqJG5.js";import"./useAnimationId-2gl_z5Fx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./tooltipContext-zL5LcCIw.js";import"./ErrorBarContext-MZRvuvrv.js";import"./activeStyles-DgOrLWSA.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./getZIndexFromUnknown-DIfsP9xn.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./omit-DJKGho52.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
