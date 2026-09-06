import{r as f,R as e}from"./iframe-DVVgwXG1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DTftp1IZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cy6ToStD.js";import{C as k}from"./ComposedChart-CyvTvZ7f.js";import{X as K}from"./XAxis-Bz_enE-E.js";import{L as v}from"./Legend-CO5LFhkT.js";import{B as s}from"./Bar-CniBJf7W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bq1dbdZA.js";import"./Text-x0LSajbz.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./DOMUtils-Dl_vO6wQ.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./throttle-3PkmjBJ2.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianAxis-CMSfRSGS.js";import"./Layer-DfoKGH6M.js";import"./types-6aOyMGka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./Symbols-qhBQ31h7.js";import"./symbol-D1q2gJr2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CF8eY8PS.js";import"./uniqBy-Cnk7JbTd.js";import"./iteratee-v6TgR0jc.js";import"./AnimatedItems-DCmrT7i2.js";import"./useAnimationId-BGsmQL0f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWI-Pcd6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./tooltipContext-B_Ip8Zvn.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getZIndexFromUnknown-D84Eb0en.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BgK3GuXn.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
