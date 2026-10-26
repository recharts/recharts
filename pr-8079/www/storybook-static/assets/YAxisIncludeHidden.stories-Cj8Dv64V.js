import{r as f,R as e}from"./iframe-CatpbanJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZ1k9Ood.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BMWzHmEu.js";import{C as k}from"./ComposedChart-KfrZJSX3.js";import{X as K}from"./XAxis-D8aO7K4u.js";import{L as v}from"./Legend-C4LGK5gX.js";import{B as a}from"./Bar-S-CjY4LU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CA5ryIJW.js";import"./Text-CG59Fli3.js";import"./resolveDefaultProps-BADc_Fld.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGfelowG.js";import"./throttle-CW9K2jjI.js";import"./dataEntryStyles-DxsZOfoL.js";import"./axisSelectors-ByEpyZG7.js";import"./d3-scale-DWpKPZRY.js";import"./CartesianAxis-D1ZUqzID.js";import"./Layer-ElswMSOx.js";import"./types-BWsJ_4qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLFC9k-P.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./Symbols-DFruy8Se.js";import"./symbol-DvaRjft0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-N652NpPr.js";import"./uniqBy-CMP_GnVX.js";import"./iteratee-d_6xpuw1.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-RllIEBru.js";import"./useAnimationId-BwwRxKkz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPp-8w2u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./tooltipContext-DP_p8xcm.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getZIndexFromUnknown-Drk4eXtB.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./omit-CY3zoyhJ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
