import{r as f,R as e}from"./iframe--N-T_hBz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DsuWS9IR.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BrmEEgcV.js";import{C as k}from"./ComposedChart-Cmhus7DD.js";import{X as K}from"./XAxis-DdKAxJ7S.js";import{L as v}from"./Legend-CT_fuNBJ.js";import{B as a}from"./Bar-Occbe1AV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./resolveDefaultProps-BZdVkepW.js";import"./ZIndexLayer-PDpl17Qr.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ch50KZor.js";import"./throttle-DiHBngta.js";import"./axisSelectors-dSJNPUYj.js";import"./d3-scale-syhDUnOY.js";import"./CartesianAxis-D25MAZFZ.js";import"./Layer-1myxLhO2.js";import"./types-CDdNjsiG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dga53r6u.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CggySQjW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0b2pOCq.js";import"./useAnimationId-B0H5IbY6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./tooltipContext-DSz7WbbM.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./activeStyles-CQz5jccO.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getZIndexFromUnknown-0NIZVPm3.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./omit-CZqsuqgq.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
