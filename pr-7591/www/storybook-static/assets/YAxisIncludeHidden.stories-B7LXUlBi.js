import{r as f,R as e}from"./iframe-BRjS3pa5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BKuUSn8V.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-XdBxArD4.js";import{C as k}from"./ComposedChart-BbCOodCR.js";import{X as K}from"./XAxis-C08AGWpL.js";import{L as v}from"./Legend-BYyTc8iV.js";import{B as s}from"./Bar-Q41Xotji.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cffb3mHz.js";import"./Layer-BT4MOeWW.js";import"./resolveDefaultProps-CQjC3mbh.js";import"./Text-z_Sr8qFY.js";import"./DOMUtils-D9-UYNUT.js";import"./isWellBehavedNumber-BpzQ2UFz.js";import"./Label-Dttiw5NK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-98YKZStn.js";import"./index-CTzNvEbv.js";import"./index-BBA_Z08e.js";import"./types-DRhRxFpq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqYlra_S.js";import"./throttle-BVKBaBan.js";import"./RechartsThemeContext-CTxTvR-3.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-kdlfkWfS.js";import"./index-BBFKTPis.js";import"./index-JNqHplgB.js";import"./axisSelectors-CG0YGbYa.js";import"./d3-scale-BkRq6yTg.js";import"./CartesianChart-CNsqprpw.js";import"./chartDataContext-UzO9iCYp.js";import"./CategoricalChart-CG1ra5Si.js";import"./Symbols-CmPruLuj.js";import"./symbol-BIXc70XJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-De69kyJ6.js";import"./uniqBy-BAhY2P_x.js";import"./iteratee-vQSh6bDz.js";import"./tooltipContext-D1__PQT4.js";import"./AnimatedItems-51O2x23y.js";import"./useAnimationId-CRgssPqb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BRRrD7WV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pSZkQHNE.js";import"./RegisterGraphicalItemId-BMfolY6u.js";import"./ErrorBarContext-CRJaMaH8.js";import"./GraphicalItemClipPath-CPBZ3hrs.js";import"./SetGraphicalItem-B-YWrUBQ.js";import"./getZIndexFromUnknown-CySiY5s8.js";import"./graphicalItemSelectors-CveEmnYZ.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
