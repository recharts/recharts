import{r as f,R as e}from"./iframe-WNWxHA5w.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-C2XMsDVi.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BVgHV45y.js";import{C as k}from"./ComposedChart-DpKMEvwE.js";import{X as K}from"./XAxis-DfMY5qBP.js";import{L as v}from"./Legend-Dh7TdA43.js";import{B as a}from"./Bar-BDZtsY-j.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./Label-CezBD4yi.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CgU14Zha.js";import"./throttle-DWlA00LM.js";import"./axisSelectors-DqPRQxzX.js";import"./diverging-zFOgTZT_.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MLPBuzwi.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bHpKFJEG.js";import"./useAnimationId-PYVmWLIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./tooltipContext-KIFqTDI5.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./activeStyles-CeKhNTWp.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./getZIndexFromUnknown-BSCGJkFK.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./omit-Czg6ajmW.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
