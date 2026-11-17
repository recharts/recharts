import{r as f,R as e}from"./iframe-CcEsDsPt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-ioZsuscH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B6RUMmkk.js";import{C as k}from"./ComposedChart-D0JJ5S5k.js";import{X as K}from"./XAxis-BYDL1VAX.js";import{L as v}from"./Legend-Bs4mWeS9.js";import{B as a}from"./Bar-DMdUcgyA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CMmdEaqf.js";import"./Text-wPKGoZhq.js";import"./resolveDefaultProps-CG7EywaD.js";import"./ZIndexLayer-DOqZSl62.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DR_PitVn.js";import"./throttle-DZ4rLUZb.js";import"./axisSelectors-CKb6nzHd.js";import"./d3-scale-CJ6MxznC.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Clhdkuph.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btojr813.js";import"./uniqBy-BwAyAD40.js";import"./iteratee-D7dhGHWZ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-frn6yaTB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ZV4Rn0ty.js";import"./useAnimationId-qpAzE9JI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./tooltipContext-CGOWsEmb.js";import"./ErrorBarContext-CPIS3FDy.js";import"./activeStyles-CiUshd_8.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getZIndexFromUnknown-BuuOwQKA.js";import"./useEffectiveDataKey-B9tlhySB.js";import"./omit-DY-nh95c.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
