import{r as f,R as e}from"./iframe-ESIqq74j.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DKsjzmyR.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CKvG1btl.js";import{C as k}from"./ComposedChart-L_mLjP39.js";import{X as K}from"./XAxis-DazJCOyK.js";import{L as v}from"./Legend-BjeJ2ZzA.js";import{B as a}from"./Bar-DtPvqr-k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BX7H8p4m.js";import"./Text-SrX2-qRa.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./ZIndexLayer-C_1IKv4J.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./throttle-s6zM-TSz.js";import"./axisSelectors-Dt46-i8H.js";import"./d3-scale-RU_yJ5H-.js";import"./CartesianAxis-B_kntHFz.js";import"./Layer-Bde02su5.js";import"./types-CKUWabzj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bi21MMet.js";import"./uniqBy-DLn6pOi-.js";import"./iteratee-Ceo2QOyl.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CU93DU9D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CB4eyp-1.js";import"./useAnimationId-Fts_Wu3I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./tooltipContext-BLaEyLYd.js";import"./ErrorBarContext-ckgpu_x8.js";import"./activeStyles-rtMeimPT.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./getZIndexFromUnknown-ZslcYDsk.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./omit-BlNgJLyW.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
