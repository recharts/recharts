import{r as f,R as e}from"./iframe-CZEQ_wjd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BLT7Ik9Z.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CGZbBTjh.js";import{C as k}from"./ComposedChart-DVaTaaXl.js";import{X as K}from"./XAxis-GN6jnA3k.js";import{L as v}from"./Legend-CBZkI5K2.js";import{B as a}from"./Bar-BDgId091.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-COoLstIf.js";import"./Text-Dsq3-wjY.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./pageBackground-CKNOMxYJ.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./axisSelectors-BfF4ImUe.js";import"./throttle-DA2J31XT.js";import"./d3-scale-er3AEJAE.js";import"./CartesianAxis-DTwSBZEB.js";import"./Layer-D6WM8pRX.js";import"./types-CKK75Clx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CLkKKSWb.js";import"./index-C8Xv27VY.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./Symbols-ptZJXXcr.js";import"./symbol-m8ordAaR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BfHlsJSZ.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6Hc5hiS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./tooltipContext-CM3PKbsO.js";import"./ErrorBarContext-BhJCUijj.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getZIndexFromUnknown-J650HG4x.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./omit-D3KbE23V.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
