import{r as f,R as e}from"./iframe-D4kLWznI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DTOW1dZ3.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B28gm5Zj.js";import{C as k}from"./ComposedChart-D5eWF65_.js";import{X as K}from"./XAxis-CIt9BLfr.js";import{L as v}from"./Legend-DWq2NLoW.js";import{B as a}from"./Bar-L9sZCWod.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./Label-CC2QlraV.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./throttle-q19G1wYU.js";import"./axisSelectors-ByHGSv-T.js";import"./diverging-COuExidI.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Brhd5wtn.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CuWdjgeb.js";import"./uniqBy-B6TwiwOy.js";import"./iteratee-DSdbCzg-.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CQy-JarL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzREhQg7.js";import"./useAnimationId-Cda-LmXY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./tooltipContext-BfGQtnp7.js";import"./ErrorBarContext-D-e_coEF.js";import"./activeStyles-B6xOxwnr.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./getZIndexFromUnknown-AewYoVT7.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./omit-DVO_AIbf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
