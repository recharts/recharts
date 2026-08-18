import{r as f,R as e}from"./iframe-BMarL12M.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-hUo2hZ05.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C3zFoeWv.js";import{C as k}from"./ComposedChart-DmXgJ0VK.js";import{X as K}from"./XAxis-HDWpUUwS.js";import{L as v}from"./Legend-CLxa5TeL.js";import{B as s}from"./Bar-Bv-ZPq1t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-wMX0Bukp.js";import"./Text-CGkcqRdd.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./DOMUtils-DSG72bMg.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./throttle-szqIxzqv.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./Symbols-C84cErrU.js";import"./symbol-haaQYdDX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbVTphV2.js";import"./uniqBy-CCOUcI7g.js";import"./iteratee-CBPiPp_w.js";import"./AnimatedItems-BsByAcaR.js";import"./useAnimationId-W_lOfRkr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C589zoI3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./tooltipContext-DTTJjkWg.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getZIndexFromUnknown-Bc7pPkaa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BqDrOfHf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
