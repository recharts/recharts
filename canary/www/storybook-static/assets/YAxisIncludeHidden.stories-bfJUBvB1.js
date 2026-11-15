import{r as f,R as e}from"./iframe-pamQLAuY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BYc7pX1a.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BlDUGc8d.js";import{C as k}from"./ComposedChart-D29eHQa-.js";import{X as K}from"./XAxis-D-SXbwy8.js";import{L as v}from"./Legend-Daog0-bD.js";import{B as a}from"./Bar-Dyf9STcO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-53Y237WA.js";import"./Text-CgAHMzD3.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./ZIndexLayer-DY36flUP.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./throttle-C_B1UjR8.js";import"./axisSelectors-DKhGUp-k.js";import"./d3-scale-eIG0jwTX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ub_WEUz3.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./Symbols-BHovV0ds.js";import"./symbol-OE1C7JWw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-S9fbae.js";import"./uniqBy-7m0iRReY.js";import"./iteratee-so155A_3.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2noBFFP.js";import"./useAnimationId-BGgwVpYD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./tooltipContext-DB05krQV.js";import"./ErrorBarContext-mAfMrTZ7.js";import"./activeStyles-BKbfAIaZ.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getZIndexFromUnknown-Bku_Z_HA.js";import"./useEffectiveDataKey-DQOO5VHk.js";import"./omit-DiNE4MF3.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
