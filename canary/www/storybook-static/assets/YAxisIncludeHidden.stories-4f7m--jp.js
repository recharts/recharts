import{r as f,R as e}from"./iframe-DzGmKl0f.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-0b4E4ljK.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C_hCocyn.js";import{C as k}from"./ComposedChart-BMgh39RK.js";import{X as K}from"./XAxis-jTQGWzOI.js";import{L as v}from"./Legend-DaKWHHq_.js";import{B as a}from"./Bar-CPWBwh6t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D7SDC5pA.js";import"./Text-4Yqe8NiQ.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./ZIndexLayer-DCgoY3ny.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BjROy2nM.js";import"./throttle-CTpO1d0G.js";import"./axisSelectors-CXmW2Cx2.js";import"./d3-scale-BqUwTZLN.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DyktFVWv.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C8NhgWYR.js";import"./uniqBy-DbBQ0HwH.js";import"./iteratee-BoZ32etu.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C67JpI60.js";import"./useAnimationId-CGyZ0qQs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./tooltipContext-BNPOIc1F.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./activeStyles-wSVq9YzU.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./getZIndexFromUnknown-H2fTT77H.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./omit-D9Uvq-cR.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
