import{r as f,R as e}from"./iframe-CVu8zrUS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CbExEBw4.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bq6bmQlp.js";import{C as k}from"./ComposedChart-DxlxWjOw.js";import{X as K}from"./XAxis-Cmp_u62X.js";import{L as v}from"./Legend-Ce9eAhQx.js";import{B as a}from"./Bar-xWnk4k-f.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./Label-Cx8AJG-1.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./throttle-DhpuiNc1.js";import"./axisSelectors-Sot67Aim.js";import"./d3-scale-BfJtYZLb.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BMgc3fuA.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./path-BBMZd4YL.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BbIoPGWl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BixLzELc.js";import"./useAnimationId-HRjjYmjj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./tooltipContext-Ccv8zWbS.js";import"./ErrorBarContext-v1LyTi-B.js";import"./activeStyles-BYV0uDWS.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./getZIndexFromUnknown-Czbq2HvR.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./omit-BEZij6l-.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
