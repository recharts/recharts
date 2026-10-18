import{r as f,R as e}from"./iframe-B3isOhIl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DVwvC3Cs.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B54EHMmU.js";import{C as k}from"./ComposedChart-DAKT1lAu.js";import{X as K}from"./XAxis-XCclqj4B.js";import{L as v}from"./Legend-FsD39S4Q.js";import{B as a}from"./Bar-BesC-7Hq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CVF_BzUf.js";import"./Text-BQG2REj-.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./pageBackground-DLA1FFDB.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./axisSelectors-DsO3f3GY.js";import"./throttle-twRdBhxV.js";import"./d3-scale-C7hQHBL4.js";import"./CartesianAxis-CpEPqood.js";import"./Layer-DDNmqfG8.js";import"./types-BQEZ_W3y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DMqUbMYB.js";import"./index-CTz2_SJP.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./Symbols-CHRhA_xc.js";import"./symbol-C0zBHoL6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bt2O-KAE.js";import"./uniqBy-CLwCtMAQ.js";import"./iteratee-TbnSWGh6.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-D2IXZFhG.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbypY_BX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./tooltipContext-DPnQxXAI.js";import"./ErrorBarContext-C1S_4TWD.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./getZIndexFromUnknown-B9vBvZ3z.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./omit-K7thEirw.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
