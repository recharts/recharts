import{r as f,R as e}from"./iframe-CRBCr4I7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-C5vFCns8.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C5HnNY9r.js";import{C as k}from"./ComposedChart-AEeY6CWp.js";import{X as K}from"./XAxis-4jTaFcnE.js";import{L as v}from"./Legend-Dak6j9fY.js";import{B as a}from"./Bar-e96AHD7s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CLJtKhiN.js";import"./Text-CzrZS4hs.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./ZIndexLayer-ChuLKuaE.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXwH5847.js";import"./throttle-Bi7M9SHL.js";import"./axisSelectors-Cn24srzI.js";import"./d3-scale-BBFMZtoY.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Csv9gEG8.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BCu_-7t9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwKZkKAc.js";import"./useAnimationId-BEWOQrK8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./tooltipContext-BCV-IEpo.js";import"./ErrorBarContext-C9vHq9NB.js";import"./activeStyles-BGmObwWl.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./getZIndexFromUnknown-BwoqauFi.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./omit-cftw3tuH.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
