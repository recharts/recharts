import{r as f,R as e}from"./iframe-BB3lVLoc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DG4767Mj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CfHP3A1Y.js";import{C as k}from"./ComposedChart-CylK8khp.js";import{X as K}from"./XAxis-BBQp-Idt.js";import{L as v}from"./Legend-BZK3nF7M.js";import{B as s}from"./Bar-Ccm6G5ye.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cn0Fp29B.js";import"./Text-DEC8wtTL.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./DOMUtils-CldD4RXg.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTgItK4v.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./RechartsWrapper-S-WqrQUy.js";import"./axisSelectors-CEA0dwEw.js";import"./throttle-QtsYQF8O.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./CartesianAxis-m8s8CMt8.js";import"./Layer-NQ3_WlgF.js";import"./types-KCNzlOcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./Symbols-D3aKpe7H.js";import"./symbol-BGppE-YZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";import"./AnimatedItems-DJZqC0i8.js";import"./useAnimationId-BDqb5MNR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTqJh7jp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./tooltipContext-BFo4MnEz.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getZIndexFromUnknown-PK6XOoIa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B1_R2Hdb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
