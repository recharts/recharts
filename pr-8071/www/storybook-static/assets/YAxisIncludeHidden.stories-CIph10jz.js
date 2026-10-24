import{r as f,R as e}from"./iframe-B1_QfljJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BOlbfRR9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cb-_WhSJ.js";import{C as k}from"./ComposedChart-CmygcsGV.js";import{X as K}from"./XAxis-C5w_o036.js";import{L as v}from"./Legend-lE2hevyr.js";import{B as a}from"./Bar-CTsBmcsP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./pageBackground-C2L5RPBY.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DCJHrufs.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./dataEntryStyles-DFEzHfWh.js";import"./axisSelectors-7XQKMXbV.js";import"./throttle-D7IvOyg1.js";import"./d3-scale-Ch4lSu5M.js";import"./CartesianAxis-Bufnbb1Y.js";import"./Layer-B_0rxCBF.js";import"./types-DbTvfnZ9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-eNWWZf5L.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./Symbols-7PX4GXAg.js";import"./symbol-CpjRZqaq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bo0SdiMk.js";import"./uniqBy-LQrir7c7.js";import"./iteratee-B9ldopPv.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Cj23hm4O.js";import"./useAnimationId-g_gs6Adq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLSVVjg0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./tooltipContext-Bae-_IL0.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getZIndexFromUnknown-DoRjXW1P.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./omit-6Ev2RNPr.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
