import{r as f,R as e}from"./iframe-D9AiK7MA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-tdOr8uxM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DhQQTweq.js";import{C as k}from"./ComposedChart-DRe_fBXL.js";import{X as K}from"./XAxis-BCGK_x8y.js";import{L as v}from"./Legend-CEpsdsq6.js";import{B as s}from"./Bar-Da-lcEEj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaTR-VJZ.js";import"./Text-C_gczTx7.js";import"./resolveDefaultProps-BrjTargu.js";import"./DOMUtils-C3E39plZ.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-XiAaecg1.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./RechartsWrapper-FkIEBIEk.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./throttle-CqrKdGFn.js";import"./axisSelectors-CD31PgCw.js";import"./d3-scale-CwcWyPDB.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./CartesianAxis-NS8dhc5y.js";import"./Layer-nhRynhYN.js";import"./types-Cl8UDNBF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./CategoricalChart-BiDsY9G3.js";import"./Symbols-CVYHcjvQ.js";import"./symbol-DxHnn3QN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-rjFr_gsT.js";import"./uniqBy-6EpLurNX.js";import"./iteratee-KOAwIcrd.js";import"./AnimatedItems-DbRJrrAP.js";import"./useAnimationId-C-WCGbVo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJSM4NJJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./tooltipContext-DmjzTDu2.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./ErrorBarContext-jnq7QWza.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./getZIndexFromUnknown-6kdP3LZO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ed7jlxwP.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
