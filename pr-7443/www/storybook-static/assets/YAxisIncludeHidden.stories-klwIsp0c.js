import{r as f,R as e}from"./iframe-Dn7uhoyL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BfFk8v58.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CVPi3ttj.js";import{C as k}from"./ComposedChart-CB9Nre2s.js";import{X as K}from"./XAxis-CM-PbRui.js";import{L as v}from"./Legend-VoyKXnXv.js";import{B as s}from"./Bar-BrBh0euE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWJg7GwY.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./Label-BkxCdWVF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWtyWVlG.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-NsLko8.js";import"./immer-jPz9tOCf.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./Symbols-D0L3NZVE.js";import"./symbol-Sc7zzrJc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./tooltipContext-Cbb2NkgC.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7YkQMq8.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getZIndexFromUnknown-DWMqRqlW.js";import"./graphicalItemSelectors-aMcZFkec.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
