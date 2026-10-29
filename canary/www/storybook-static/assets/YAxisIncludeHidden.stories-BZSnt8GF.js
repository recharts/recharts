import{r as f,R as e}from"./iframe-DlbVoy8b.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BhrY96Pd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DIPR8J8Q.js";import{C as k}from"./ComposedChart-kpOOzPnf.js";import{X as K}from"./XAxis-S-cm4cjH.js";import{L as v}from"./Legend-CmCZgCji.js";import{B as a}from"./Bar-D61P4U12.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db_JATF8.js";import"./Text-D-UClZ_j.js";import"./resolveDefaultProps-DXzjMp61.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./throttle-DlhUrerR.js";import"./axisSelectors-C1oz2VfT.js";import"./d3-scale-wuSABge9.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BikB_Nzb.js";import"./uniqBy-dmJ8LW9D.js";import"./iteratee-ZueROYHY.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DZdmLQwZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6c5uuZ_V.js";import"./useAnimationId-69ly1h0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./tooltipContext-DqmisGoO.js";import"./dataEntryStyles-CWf0jd4a.js";import"./ErrorBarContext-DTMhIhTa.js";import"./activeStyles-68fYVlFc.js";import"./SetGraphicalItem--R52djyG.js";import"./getZIndexFromUnknown-Mxkab-zw.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./omit-D7Zh_glI.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
