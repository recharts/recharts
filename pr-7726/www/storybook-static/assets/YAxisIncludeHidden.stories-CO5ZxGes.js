import{r as f,R as e}from"./iframe-BKk44VOT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DPFxody7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BjWKOBUm.js";import{C as k}from"./ComposedChart-Bs9KweDK.js";import{X as K}from"./XAxis-2cJ7kaI0.js";import{L as v}from"./Legend-C8H3bsT4.js";import{B as s}from"./Bar-BWRg73Aa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPr6N2Q-.js";import"./Text-BtR9CUIB.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./DOMUtils-Dil5o6Lr.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./throttle-BdnDrpLZ.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./Symbols-BAM533G2.js";import"./symbol-BvEjq6Qb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CN77nqgF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./tooltipContext-BLox9vj-.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getZIndexFromUnknown-8l31fZiV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Ddb1xjud.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
