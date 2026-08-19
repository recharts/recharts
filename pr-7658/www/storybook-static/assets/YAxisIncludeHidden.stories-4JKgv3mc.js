import{r as f,R as e}from"./iframe-BEU0VEzj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bwob8VzU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-mhTpFGis.js";import{C as k}from"./ComposedChart-NpRQQbTs.js";import{X as K}from"./XAxis-DHuUhI2Z.js";import{L as v}from"./Legend-Bq1E_AiK.js";import{B as s}from"./Bar-OlLgFsmx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ChFEzAZk.js";import"./Text-1VnO-5nk.js";import"./resolveDefaultProps-3wYQv28v.js";import"./DOMUtils-B3nT0fft.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./throttle-BnTbmX16.js";import"./axisSelectors-X6Iztzs2.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./CartesianAxis-I3SN0dPC.js";import"./Layer-BxzS3V_h.js";import"./types-BcpteXUs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";import"./AnimatedItems-C1OsdHSy.js";import"./useAnimationId-BpSAAbQy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBifCncj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./tooltipContext-DHu5iVhe.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./ErrorBarContext-OH4Zfmtr.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getZIndexFromUnknown-D_f3A5QJ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D4g6qdze.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
