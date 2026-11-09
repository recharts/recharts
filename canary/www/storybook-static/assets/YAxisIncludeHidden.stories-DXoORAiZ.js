import{r as f,R as e}from"./iframe-CMDkES_H.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-C3tuYQmx.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CEXNkTXm.js";import{C as k}from"./ComposedChart-AN7xQ-23.js";import{X as K}from"./XAxis-B5q3F6Uy.js";import{L as v}from"./Legend-BA5EDhFL.js";import{B as a}from"./Bar-CS1mktTM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DkUV91yB.js";import"./Text-CXN2lt2h.js";import"./resolveDefaultProps-BBu38DQb.js";import"./ZIndexLayer-Dr7m0amd.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./throttle-BV0akTiG.js";import"./axisSelectors-BgqFub1M.js";import"./d3-scale-Vem8QkvK.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-YdCgLXYS.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CfLeRl1x.js";import"./uniqBy-CBQHwdan.js";import"./iteratee-DQxlQ_gO.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CQKyrMQS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Yk3Jnp.js";import"./useAnimationId-Br5Fw6SL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./tooltipContext-BfYJ3kCm.js";import"./ErrorBarContext-DWVCzs9M.js";import"./activeStyles-uNCwuaQZ.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getZIndexFromUnknown-DV_2JkUf.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./omit-D-A9C4xh.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
