import{r as f,R as e}from"./iframe-DehjRTS0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BGtv0j9s.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Or93N-XC.js";import{C as k}from"./ComposedChart-9t6iBSgP.js";import{X as K}from"./XAxis-Cg2bfD3w.js";import{L as v}from"./Legend-BNPrBsNu.js";import{B as a}from"./Bar-BGHmAtMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D6Z-0Dfn.js";import"./Text-CTuG3Uwk.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./throttle-DesffiZ0.js";import"./axisSelectors-DZdKwAWL.js";import"./d3-scale-C22MolAx.js";import"./CartesianAxis-CwmDOfi4.js";import"./Layer-DlT20hA_.js";import"./types-Be7PvpBk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRtSS_eM.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DLrTCfvS.js";import"./uniqBy-B1en0uiU.js";import"./iteratee-BJM6y6Dd.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DzT0ep5z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-w2oZ3J.js";import"./useAnimationId-DcJ3b19B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-equOl3.js";import"./tooltipContext-eFEUsm3a.js";import"./ErrorBarContext-CF1ouw75.js";import"./activeStyles-CTG2KgqA.js";import"./SetGraphicalItem-Doit17ow.js";import"./getZIndexFromUnknown-CtA--8Vx.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./omit-DbGvskck.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
