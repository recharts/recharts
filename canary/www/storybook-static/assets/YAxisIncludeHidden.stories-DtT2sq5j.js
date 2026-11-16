import{r as f,R as e}from"./iframe-1fJ5z_WZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-De-4AuvJ.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJlX5T59.js";import{C as k}from"./ComposedChart-Ejf7RFZN.js";import{X as K}from"./XAxis-Kvj5vG7_.js";import{L as v}from"./Legend-CmPChhHP.js";import{B as a}from"./Bar-Bxudt8Ic.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7hOOLTD.js";import"./Text-BeONQBVt.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./ZIndexLayer-CrU6dYup.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJTK4O93.js";import"./throttle-6GiZsFaS.js";import"./axisSelectors-V7mZ-cGP.js";import"./d3-scale-DqY1ZQ_w.js";import"./CartesianAxis-DL2qV91b.js";import"./Layer-6gV2DTZI.js";import"./types-XVdAxFZ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CR62a_mQ.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DE_GKN50.js";import"./uniqBy-C60c41gU.js";import"./iteratee-DEMDIKbX.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CqRs5fjI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kcn0wIRK.js";import"./useAnimationId-BaNyc8zg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./tooltipContext-BvBvAVwb.js";import"./ErrorBarContext-CHpXmxM4.js";import"./activeStyles-C3pl5b-R.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getZIndexFromUnknown-C3twUa9l.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./omit-C4r1CQBm.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
