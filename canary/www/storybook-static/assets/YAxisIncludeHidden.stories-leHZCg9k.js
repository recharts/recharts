import{r as f,R as e}from"./iframe-BWDOX6-u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CmY1zbsh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DNz64E0x.js";import{C as k}from"./ComposedChart-CBeAkuvH.js";import{X as K}from"./XAxis-Bg1rIWpH.js";import{L as v}from"./Legend-DF6DtGN2.js";import{B as a}from"./Bar-gQweS-Ob.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7PH8HeI.js";import"./Text-BC76d3cf.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DK35yTF0.js";import"./throttle-CylvlJBG.js";import"./axisSelectors-DEg5_gPJ.js";import"./d3-scale-B4wSjZj4.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRyXUEk1.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDtS6U3Q.js";import"./uniqBy-BH4YjQyG.js";import"./iteratee-CCjAiajQ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Bpfp_vOc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-YmvaNl9F.js";import"./useAnimationId-DnCcjn8H.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./tooltipContext-Bo8jdiGb.js";import"./dataEntryStyles-BX1vU1kO.js";import"./ErrorBarContext-CMdxFUFX.js";import"./activeStyles-1bnNLlnc.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getZIndexFromUnknown-BXf84R5E.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./omit-BFXhOTRO.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
