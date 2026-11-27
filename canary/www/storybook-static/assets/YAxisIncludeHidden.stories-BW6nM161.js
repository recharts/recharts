import{r as f,R as e}from"./iframe-Dt7VmJVd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BGz_S1YP.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CsJRlQGe.js";import{C as k}from"./ComposedChart-BEVdjL9z.js";import{X as K}from"./XAxis-6DHVILmw.js";import{L as v}from"./Legend-YTTvCKln.js";import{B as a}from"./Bar-lKzcet16.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./Label-DBOYMKjR.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./throttle-DKLEp5Cv.js";import"./axisSelectors-DsQjGGXt.js";import"./diverging-DKSFl2hd.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DmetyJsw.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D-hWuImz.js";import"./uniqBy-DBz81KvG.js";import"./iteratee-Csv0o0lQ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BTAsZYzb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhd8BSnf.js";import"./useAnimationId-CZxgU6AP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./tooltipContext-CB1f6TvU.js";import"./ErrorBarContext-BfQEnsTO.js";import"./activeStyles-CXzu6olF.js";import"./SetGraphicalItem-meI4aCtS.js";import"./getZIndexFromUnknown-CDVfEwyz.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./omit-BkInlzwT.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
