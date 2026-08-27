import{r as f,R as e}from"./iframe-COd9kUku.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bz97xI6z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BfP4v1bS.js";import{C as k}from"./ComposedChart-Vvr56aGu.js";import{X as K}from"./XAxis-B5YW1-Pp.js";import{L as v}from"./Legend-jz1-VpGi.js";import{B as s}from"./Bar-Di15zWAz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BfhUPh9D.js";import"./Text-osvpinWz.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./DOMUtils-csxZCivv.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-06cimeo-.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./throttle-5ro8HE4Y.js";import"./d3-scale-uQ_gA658.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./CartesianAxis-DNJooG1E.js";import"./Layer-riiSoJFM.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./Symbols-Bbok-PlM.js";import"./symbol-C6vTYQ3L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BI-YLrcT.js";import"./uniqBy-C2H_mvdb.js";import"./iteratee-3XdrkIX1.js";import"./AnimatedItems-RKe26m0b.js";import"./useAnimationId-xpwU92YM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzmCpk66.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./tooltipContext-CVsqSJZH.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getZIndexFromUnknown-uR6Strlj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DhNgM9I4.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
