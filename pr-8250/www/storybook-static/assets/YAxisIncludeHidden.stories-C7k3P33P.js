import{r as f,R as e}from"./iframe-WBbNNnuy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BvxL6veE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-tUIWaJXi.js";import{C as k}from"./ComposedChart-5JnVr7Ht.js";import{X as K}from"./XAxis-D4ryVEq0.js";import{L as v}from"./Legend-BCZHr7ks.js";import{B as a}from"./Bar-_w1CetyC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7oootOX.js";import"./Text-BMtYTGtz.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./throttle-BZsWSkxT.js";import"./axisSelectors-BsjG_ZcL.js";import"./d3-scale-BmTpsTXt.js";import"./CartesianAxis-d7TJLpW4.js";import"./Layer-B9NKZG1g.js";import"./types-DJHF32C4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-KCZFV5Qp.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BXgxBoqY.js";import"./uniqBy-CZ2AwJLU.js";import"./iteratee-ZB0s3k9M.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DB--RtiY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8WyH4x0.js";import"./useAnimationId-Cxl9dyaW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./tooltipContext-xwEZLSIE.js";import"./ErrorBarContext-DyCR_fdR.js";import"./activeStyles-CA5Mddf7.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./getZIndexFromUnknown-CY5LGFIY.js";import"./useEffectiveDataKey-CNDMCH51.js";import"./omit-DDgCfzm_.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
