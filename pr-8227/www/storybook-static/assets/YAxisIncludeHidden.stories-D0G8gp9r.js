import{r as f,R as e}from"./iframe-BaiXEn0-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DuwRFPvA.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CSqAGFLj.js";import{C as k}from"./ComposedChart-DKPCp_TU.js";import{X as K}from"./XAxis-BhEilA83.js";import{L as v}from"./Legend-D55Tzweu.js";import{B as a}from"./Bar-1Ya73Dri.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CWe40LeI.js";import"./Text-Dz83mHfX.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./ZIndexLayer-BmwEMujN.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Com92wlg.js";import"./throttle-D7xKVZuZ.js";import"./axisSelectors-s8isxUHu.js";import"./d3-scale-Bpc0urwb.js";import"./CartesianAxis-CXgLYYat.js";import"./Layer-Dc68LG4Z.js";import"./types-C6nAEk1h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRQNcvpu.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./Symbols-cv2IRaTf.js";import"./symbol-CRYIzv0a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-53YyRLbB.js";import"./uniqBy-jcM0FYxk.js";import"./iteratee-DwgGl-hX.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CA2v1itW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBwLqskU.js";import"./useAnimationId-FtoyJDPN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./tooltipContext-FuvoFEqQ.js";import"./ErrorBarContext-BDsV7QiN.js";import"./activeStyles-CYcJyLiS.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getZIndexFromUnknown-CGwC5-Px.js";import"./useEffectiveDataKey-l-c80nhy.js";import"./omit-DyM5CAkJ.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
