import{r as f,e}from"./iframe-BXZsi3ZJ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-CF2_AxHC.js";import{R as A}from"./arrayEqualityCheck-Cr28DIq7.js";import{C}from"./ComposedChart-A4rsHRl-.js";import{X as K}from"./XAxis-vWhvLlJA.js";import{L as v}from"./Legend-CwV2obUu.js";import{B as a}from"./Bar-DbaQSLxd.js";import{R as x}from"./RechartsHookInspector-BcsNAcT5.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./CartesianAxis-D3TuOOex.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./Label-BOPAlXUc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN0SI8Of.js";import"./zIndexSlice-47t4gEct.js";import"./types-5-uOdbL9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./RechartsWrapper-DbqalEnK.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./Symbols-CywLz0nT.js";import"./Curve-CD_JBQwm.js";import"./useElementOffset-CCimOZj2.js";import"./iteratee-pBQ1AHnD.js";import"./tooltipContext-EOyvDAOK.js";import"./ReactUtils-Cp6NqBbj.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C086hGgA.js";import"./useAnimationId-DdIT7cjj.js";import"./Trapezoid-CgIXwzIx.js";import"./Sector-CiJ5MIJx.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./getZIndexFromUnknown-a_DZ_8ao.js";import"./graphicalItemSelectors-6mRrvq5H.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
